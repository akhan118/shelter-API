<?php
namespace app\modules\v1\controllers;

use Yii;
use common\models\LoginForm;
use common\helpers\CorsCustom;
use frontend\models\ContactForm;
use yii\filters\ContentNegotiator;
use yii\web\Response;
use yii\filters\AccessControl;
use yii\rest\Controller;
use yii\filters\auth\HttpBearerAuth;
use frontend\models\SignupForm;
use common\models\User;
use app\modules\v1\models\ShelterTable;


/**
 * Site controller
 */
class ApiController extends Controller
{
    /**
     * @inheritdoc
     */


    public function behaviors()
    {
        $behaviors = parent::behaviors();
        $behaviors['contentNegotiator'] = [
            'class' => ContentNegotiator::className(),
            'formats' => [
                'application/json' => Response::FORMAT_JSON,
            ],
        ];
        // remove authentication filter
        $auth = $behaviors['authenticator'];
        unset($behaviors['authenticator']);
        // add CORS filter
        $behaviors['corsFilter'] = [
        'class' => CorsCustom::className(),
            ];
        // re-add authentication filter
        $behaviors['authenticator'] = $auth;
        // avoid authentication on CORS-pre-flight requests (HTTP OPTIONS method)
        $behaviors['authenticator']['except'] = ['options'];
        $behaviors['authenticator'] = [
        'class' => HttpBearerAuth::className(),
        'except'=>['login','signup']
            ];

        return $behaviors;
    }



    public function actionLogin()
    {
        $model = new LoginForm();
        $request = Yii::$app->request;
        $get = $request->get();
        $model->attributes =Yii::$app->request->get();
        if ($model->validate() && $model->login()) {
            return ['access_token' => Yii::$app->user->identity->getAuthKey(),
                    'username' => Yii::$app->user->identity->username,
                  ];
        } else {
            return ['Authentication' => false];
        }
    }


    public function actionSignup()
    {
        $model = new SignupForm();
        $request = Yii::$app->request;
        $get = $request->get();
        $model->attributes = Yii::$app->request->get();
        if ($model->validate() && $model->signup()) {
            return ['signup' => true,
                  ];
        } else {
            return ['signup' => false];
        }
    }



    public function actionYellow()
    {
        $response = [
            'username' => Yii::$app->user->identity->username,
            'access_token' => Yii::$app->user->identity->getAuthKey(),
        ];
        return $response;
    }

    public function actionIsmaeltest()
    {
        $response = 5;
        return $response;
    }

    public function actionGetallshelters()
    {

      $response = (new \yii\db\Query())
      ->select('*')
      ->from('shelter_table')
      ->all();

      return $response;
    }


    public function actionGetalltypes()
    {

      $response = (new \yii\db\Query())
      ->select('*')
      ->from('type_table')
      ->all();

      return $response;
    }

    public function actionSignupshelter()
    {
        $request = Yii::$app->request;
        $get = $request->get();
        return $get;
    }


}
