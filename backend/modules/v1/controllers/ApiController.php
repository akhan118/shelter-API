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
use app\modules\v1\models\ShelterDetailTable;

/**
 * Site controller
 */

class Shelter_item extends \yii\db\ActiveRecord
{
    public static function tableName()
    {
        return 'shelter_detail_table';
    }
}
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
        'except'=>['login','signup','getrequestedinfo','getrequestedinfov2', 'signupshelter', 'shelterconfig', 'shelterupdateconfig']
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
        // var_dump($get);
        $model->attributes = Yii::$app->request->get();
        if ($model->validate() && $model->signup()) {
            return ['signup' => true];
        } else {
            return ['signup' => false,'error'=>$model->getErrors()];
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
        for ($i = 0 ; $i < count($rows) ; $i ++) {
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

//This functions is used to update information for the shelter
    // public function actionUpdateshelter()
    // {}

//function to add new shelters to db
    public function actionSignupshelter()
    {
        $request = Yii::$app->request;
        $get = $request->get();
        $newShelterinfo = Yii::$app->request->get();
        if (isset($newShelterinfo['shelter_name'])
            && isset($newShelterinfo['email'])
            && isset($newShelterinfo['username'])) {
            $signup= $this->actionSignup();
            if ($signup['signup'] != false) {
                Yii::$app->db->createCommand()->insert('shelter_table', [
                'shelter_name' => $newShelterinfo['shelter_name'],
                'shelter_email' => $newShelterinfo['email'],
                'username' => $newShelterinfo['username'],
            ])->execute();
                $response = [
                'status' => 'success',
                'new_shelter_id' => Yii::$app->db->getLastInsertID(),
            ];
                return $response;
            } else {
                $response = [
               'signup' =>'failed',
               'error' => $signup['error']
           ];
                return $response;
            }
        } else {
            $response = [
              'incomplete input ' =>'failed',
              'error' => $newShelterinfo,
          ];
            return $response;
        }
    }



    //  This function will add the initial information for types of rooms available for the shelter when they first register their shelter

        public function actionShelterconfig()
        {
            $request = Yii::$app->request;
            $get = $request->get();
            $newShelteravailable = Yii::$app->request->get();
        // var_dump($newShelteravailable);
        date_default_timezone_set('america/detroit');
            $date = date('Y-m-d h:i:s a', time());

        // Get individual variable information out of $get and make sure not blank
       // items to get are  shelter_name, men, women, family, youth and if available or not


        if (isset($newShelteravailable['shelter_name'])
            && isset($newShelteravailable['women'])
            && isset($newShelteravailable['womenavailable'])
            && isset($newShelteravailable['men'])
            && isset($newShelteravailable['menavailable'])
            && isset($newShelteravailable['youth'])
            && isset($newShelteravailable['youthavailable'])
            && isset($newShelteravailable['family'])
            && isset($newShelteravailable['familyavailable'])) {




// find shelter_id from shelter_table for shelter named

//  var_dump($newShelteravailable['shelter_name']);
        $shelteridString = (new \yii\db\Query())
            ->select('shelter_id')
            ->from('shelter_table')
            ->where(['shelter_name' => $newShelteravailable['shelter_name']])
            ->all();
            $newshelter_id = $shelteridString[0]['shelter_id'];
            $newnumber = $newshelter_id;
            var_dump($newnumber);
            var_Dump($newshelter_id);

// Check to see if shelter_id exists before adding to database

        $sheltertypeString = (new \yii\db\Query())
            ->select('*')
            ->from('shelter_detail_table')
            ->where(['shelter_id' => $newshelter_id])
            ->all();


            if (count($sheltertypeString) <1) {
                // shelter doesn't exist in detail database
           $alreadythere='This Shelter is not there and will be addedn to database';
                var_dump($alreadythere);
//
//  Add bed availability to database
// Insert Women and if available

        Yii::$app->db->createCommand()->insert('shelter_detail_table', [

            'shelter_id' => $newshelter_id,
            'shelter_type_id' => $newShelteravailable['women'],
            'available' => $newShelteravailable['womenavailable'],
             'last_updated' => $date,
        ])->execute();

// Insert Men and if available

         Yii::$app->db->createCommand()->insert('shelter_detail_table', [

            'shelter_id' => $newshelter_id,
            'shelter_type_id' => $newShelteravailable['men'],
            'available' => $newShelteravailable['menavailable'],
            'last_updated' => $date,
        ])->execute();

// Insert Youth and if available
         Yii::$app->db->createCommand()->insert('shelter_detail_table', [

            'shelter_id' => $newshelter_id,
            'shelter_type_id' => $newShelteravailable['youth'],
            'available' => $newShelteravailable['youthavailable'],
            'last_updated' => $date,
        ])->execute();// Insert Women and if available

// Insert Family and if available
         Yii::$app->db->createCommand()->insert('shelter_detail_table', [

            'shelter_id' => $newshelter_id,
            'shelter_type_id' => $newShelteravailable['family'],
            'available' => $newShelteravailable['familyavailable'],
            'last_updated' => $date,
        ])->execute();
            } else {
                //    shelter already exist and just update info

            $alreadythere = 'Already there. Should update instead of add';
                return $alreadythere;
            }
        } else {
            $baddata = 'Missing Shelter Data';
            return $baddata;
        }
        }




//  This function is to update the availability of the shelters
// public function actionShelterupdateconfig(){


//         $request = Yii::$app->request;
//         $get = $request->get();
//         $newShelteravailable = Yii::$app->request->get();
//         // var_dump($newShelteravailable);
//         date_default_timezone_set('america/detroit');
//         $date = date('Y-m-d h:i:s a', time());

// // Get individual variable information out of $get and make sure not blank
// // items to get are  shelter_name, men, women, family, youth and if available or not

//         if (isset($newShelteravailable['shelter_name'])
//             && isset($newShelteravailable['women'])
//             && isset($newShelteravailable['womenavailable'])
//             && isset($newShelteravailable['men'])
//             && isset($newShelteravailable['menavailable'])
//             && isset($newShelteravailable['youth'])
//             && isset($newShelteravailable['youthavailable'])
//             && isset($newShelteravailable['family'])
//             && isset($newShelteravailable['familyavailable']))

//             {


// // find shelter_id from shelter_table for shelter named

//         //  var_dump($newShelteravailable['shelter_name']);
//             $shelteridString = (new \yii\db\Query())
//                 ->select('shelter_id')
//                 ->from('shelter_table')
//                 ->where(['shelter_name' => $newShelteravailable['shelter_name']])
//                 ->all();
//             $newshelter_id = $shelteridString[0]['shelter_id'];

//             var_Dump($newshelter_id);

// // Check to see if shelter_id exists before adding to database

//             $sheltertypeString = (new \yii\db\Query())
//                 ->select('*')
//                 ->from('shelter_detail_table')
//                 ->where(['shelter_id' => $newshelter_id])
//                 ->all();

// // var_dump($sheltertypeString);
// // var_dump(count($sheltertypeString));
// // var_dump ($newshelter_id);
//             if (count($sheltertypeString) > 0) {
//             // shelter does exist in detail database
//                 $alreadythere = 'There can be an update';
//                 var_dump($alreadythere);
// //
// //  Add bed availability to database
//                 // $newshelter_id = $shelteridString[0]['shelter_id'];
// // var_dump($newshelter_id);
//          $conditionname = $newShelteravailable['women'];
//          $available = $newShelteravailable['womenavailable'];
//  var_dump($conditionname);
//  var_dump($available);
// // $condition = 'shelter_id = ' &&$newshelter_id and shelter_type_id = $conditionname ';

// $condition = 'shelter_id = 3 && shelter_type_id = 1';
// var_dump ($condition);
//                  Yii::$app->db->createCommand()
//                       ->update('shelter_detail_table',
//                      ['available' => $available,
//                      'last_updated' => $date],
//                      [$condition ]

//                  )->execute();

//                 // Yii::$app->db->createCommand()
//                 //     ->update('table_name', [SET_Values], 'CONDITION')
//                 //     ->execute();



//     $conditional = '$shelter_id=3';
//     var_dump($conditional);
//             //   $sheltertoupdate = ShelterDetailTable::findAll($conditional);

//     //  var_dump($sheltertoupdate);
//             //  $sheltertoupdate->available= $newShelteravailable['womenavailable'];
//     // //             $sheltertoupdate->last_updated = $date;
//     // //             $sheltertoupdate->update();

//     // //             $message = 'added 1st one';
//     // //             var_dump($message);


//     // //         }
//     //     } else {

//     //         $baddata = 'Missing Shelter Data';
//     //         return $baddata;
//          }
//         }
//     }

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
        } else {
            $response1 = (new \yii\db\Query())
                ->select('*')
                ->from('shelter_detail_table')
                ->where(['shelter_type_id' => $requestedShelterType])
                ->all();
        }

        $sheltertypeString = (new \yii\db\Query())
            ->select('*')
            ->from('type_table')
            ->where(['shelter_type_id' => intval($requestedShelterType['sheltertype'])])
            ->all();

        $returnedArray = [];

        // puts all the selected shelter id into an array for json file format
        for ($i = 0; $i < count($response1); $i++) {

          //get desired fields from shelter_table from shelters matching type
          //request
            $response2 = (new \yii\db\Query())
                ->select([
                    'shelter_id', 'shelter_name', 'shelter_address',
                    'shelter_address_city', 'shelter_address_state', 'shelter_address_zip',
                    'shelter_phone', 'shelter_long', 'shelter_lat', 'shelter_county'
                ])
                ->from('shelter_table')
                ->where(['shelter_id' => $response1[$i]['shelter_id']])
                ->all();

            array_push($returnedArray, $response2[0]);
          //add in fields from shelter_detail_table
            $returnedArray[$i]['shelter_type'] = [
                "id" => $requestedShelterType['sheltertype'],
                "type" => $sheltertypeString[0]['type_name']
            ];
            $returnedArray[$i]['available'] = $response1[$i]['available'];
            $returnedArray[$i]['last_updated'] = $response1[$i]['last_updated'];
        }
        return $returnedArray;
    }
}
