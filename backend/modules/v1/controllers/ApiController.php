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
        'except'=>['login','signup','getrequestedinfo','getrequestedinfov2']
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


    public function actionGetrequestedinfo()
     {


        $shelter_name='holy shelter';
    // Pulls shelters from database that are family type
        $rows = (new \yii\db\Query())
            ->select(['shelter_id'])
            ->from('shelter_detail_table')
            ->where(['shelter_type_id' => '7'])
            ->all();

         $shelter_type_id = [];


        // puts all the selected shelters into an array for json file format

            //  var_dump($rows);
        for ($i = 0 ; $i < count ($rows) ; $i ++) {
            array_push($shelter_type_id, $rows[$i]['shelter_id']);
        }
        // var_dump($shelter_type_id);

        $sheltertable = ShelterTable::findAll($shelter_type_id);
      //   var_dump($sheltertable);


    //   if ($rows) {
    //         $shelterRows = (new \yii\db\Query())
    //             ->select('*')
    //             ->from('shelter_table')
    //             ->where(['shelter_id' => $rows[0]['shelter_id']])
    //             ->limit(10)
    //             ->all();
    //    }
      //  $a = $sheltertable[1] => ["shelter_address"];
// var_dump($a);

// returns all shelters found for type
          return $sheltertable;
    }

    public function actionSignupshelter()
    {
        $request = Yii::$app->request;
        $get = $request->get();
        return $get;
    }

    public function actionGetrequestedinfov2()
      {

        //get shelter type (decide if it is a string or in )
       $requestedShelterType = Yii::$app->request->get();

        if ($requestedShelterType['sheltertype'] == 5) {
          //grab all shelters that match the query type
          $response1 = (new \yii\db\Query())
          ->select('*')
          ->from('shelter_detail_table')
          ->all();

        }else {
          $response1 = (new \yii\db\Query())
          ->select('*')
          ->from('shelter_detail_table')
          ->where(['shelter_type_id' => $requestedShelterType])
          ->all();
        }

        $sheltertypeString = (new \yii\db\Query())
        ->select('*')
        ->from('type_table')
        ->where(['shelter_type_id' => intval($requestedShelterType['sheltertype'])] )
        ->all();

        $returnedArray = [];

        // puts all the selected shelter id into an array for json file format
        for ($i = 0 ; $i < count ($response1) ; $i ++) {

          //get desired fields from shelter_table from shelters matching type
          //request
          $response2 = (new \yii\db\Query())
          ->select(['shelter_id',  'shelter_name', 'shelter_address',
            'shelter_address_city', 'shelter_address_state', 'shelter_address_zip',
            'shelter_phone', 'shelter_long', 'shelter_lat', 'shelter_county' ])
          ->from('shelter_table')
          ->where(['shelter_id' => $response1[$i]['shelter_id']])
          ->all();

          array_push($returnedArray, $response2[0] );
          //add in fields from shelter_detail_table
          $returnedArray[$i]['shelter_type'] = [ "id" => $requestedShelterType['sheltertype'],
                "type" => $sheltertypeString[0]['type_name']
              ];
          $returnedArray[$i]['available'] = $response1[$i]['available'];
          $returnedArray[$i]['last_updated'] = $response1[$i]['last_updated'];

        }
        return $returnedArray;
      }

}
