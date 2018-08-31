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
            $userId= Yii::$app->user->identity->id;


            $shelter = (new \yii\db\Query())
                            ->select('*')
                            ->from('shelter_table')
                            ->where(['userId' => $userId])
                            ->all();
                            var_dump($shelter);
            //
            // return ['access_token' => Yii::$app->user->identity->getAuthKey(),
            //         'username' => Yii::$app->user->identity->username,
            //         'role' => \Yii::$app->authManager->getRolesByUser($userId),
            //         'shelter'=> $shelter,
            //       ];
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
            return ['signup' => true,
                    'userId' => Yii::$app->db->getLastInsertID(),
                    ];
        } else {
            return ['signup' => false,'error'=>$model->getErrors()];
        }
    }



    public function actionYellow()
    {
        $userId= Yii::$app->user->identity->id;
        if (\Yii::$app->user->can('viewAdmin')) {
            return   $response = [
                'username' => Yii::$app->user->identity->username,
                'access_token' => Yii::$app->user->identity->getAuthKey(),
                'role' => \Yii::$app->authManager->getRolesByUser($userId),

            ];
        } else {
            return   $response = [
                      'username' => 'Does not have the correct role to view',
                  ];
        }
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



    /**
     * Action SignUpShelter
     * Add a new shelter
     * Author: Annette & Ahmad .
     * paramters: shelter_name , email, username .
     * return : new shelter id or error.
     * @return string
     */
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
                $userId= $signup['userId'];
                Yii::$app->db->createCommand()->insert('shelter_table', [
                'shelter_name' => $newShelterinfo['shelter_name'],
                'shelter_email' => $newShelterinfo['email'],
                'username' => $newShelterinfo['username'],
                'userID' => $userId,

            ])->execute();
                return   $response = [
                'status' => 'success',
                'new_shelter_id' => Yii::$app->db->getLastInsertID(),
            ];
            } else {
                return       $response = [
               'signup' =>'failed',
               'error' => $signup['error']
           ];
            }
        } else {
            return     $response = [
              'incomplete input ' =>'failed',
              'error' => $newShelterinfo,
          ];
        }
    }




        /**
         * Action ShelterConfig
         * This function will add the initial information for types of rooms-
         * available for the shelter when they first register their shelter
         * Author: Annette
         * paramters: ..........?
         * return : ...........?
         * @return string
         */
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
        $newShelterinfo = Yii::$app->request->get();


 // this section is to make sure all information is being received to enter into db
 //
        if (isset($newShelterinfo['shelter_id'])
            && isset($newShelterinfo['shelter_address'])
            && isset($newShelterinfo['shelter_address_city'])
            && isset($newShelterinfo['shelter_address_state'])
            && isset($newShelterinfo['shelter_address_zip'])
            && isset($newShelterinfo['shelter_phone'])
            && isset($newShelterinfo['shelter_EIN'])
            && isset($newShelterinfo['shelter_county'])) {




// find shelter_id from shelter_table for shelter named


            $shelteridString = (new \yii\db\Query())
                ->select('*')
                ->from('shelter_table')
                ->where(['shelter_id' => $newShelterinfo['shelter_id']])
                ->all();

            $newshelter_name='';
            if (count($shelteridString) > 0) {
                $newshelter_name = $shelteridString[0]['shelter_name'];
            }
                    // $newshelter_address = $shelteridString[0]['shelter_address'];


// Check to see if shelter_id exists before adding to database

            $sheltertypeString = (new \yii\db\Query())
                ->select('*')
                ->from('shelter_detail_table')
                ->where(['shelter_id' => $newShelterinfo['shelter_id']])
                ->all();


            if (count($sheltertypeString) < 1) {
                // shelter doesn't exist in detail database

//
//  Add bed availability to database
// Insert Women and if available


                $sheltertoupdate = ShelterTable::findAll(['shelter_id' => $newShelterinfo['shelter_id']]);

                $sheltersearch = $newShelterinfo['shelter_id'];

                if (count($sheltertoupdate) > 0) {
                    if ($shelteridString[0]['shelter_address'] == null) {
                        $sheltertoupdate[0]->shelter_address = $newShelterinfo['shelter_address'];
                        $sheltertoupdate[0]->shelter_address_city = $newShelterinfo['shelter_address_city'];
                        $sheltertoupdate[0]->shelter_address_state = $newShelterinfo['shelter_address_state'];
                        $sheltertoupdate[0]->shelter_address_zip = $newShelterinfo['shelter_address_zip'];
                        $sheltertoupdate[0]->shelter_county = $newShelterinfo['shelter_county'];
                        $sheltertoupdate[0]->shelter_phone = $newShelterinfo['shelter_phone'];
                        $sheltertoupdate[0]->shelter_EIN = $newShelterinfo['shelter_EIN'];
                        $sheltertoupdate[0]->save();

                        $addmessage = ['Shelter information has been updated in the database', $sheltertoupdate[0]];
                        return $addmessage;
                    } else {
                        $alreadythere = 'Shelter Information is already there. Should update instead of adding as new shelter';
                        return $alreadythere;
                    }
                } else {
                    $sheltertheremessage = 'The Shelter was not in the database.  Please Signup';
                    return $sheltertheremessage;
                }
            } else {
                //    shelter already exist and just update info

                $alreadythere = 'Already there. Should update instead of adding as new shelter';
                return $alreadythere;
            }
        } else {
            $baddata = ['Missing Shelter Data', $newShelterinfo];
            return $baddata;
        }
        }








//  This function is to update the availability of the shelters
 public function actionShelterupdateconfig()
 {
     $request = Yii::$app->request;
     $get = $request->get();
     $newShelteravailable = Yii::$app->request->get();
        // var_dump($newShelteravailable);
        date_default_timezone_set('america/detroit');
     $date = date('Y-m-d h:i:s a', time());

// // Get individual variable information out of $get and make sure not blank
// // items to get are  shelter_name, men, women, family, youth and if available or not

        if (isset($newShelteravailable['shelter_id'])
            && isset($newShelteravailable['women'])
            && isset($newShelteravailable['womenavailable'])
            && isset($newShelteravailable['men'])
            && isset($newShelteravailable['menavailable'])
            && isset($newShelteravailable['youth'])
            && isset($newShelteravailable['youthavailable'])
            && isset($newShelteravailable['family'])
            && isset($newShelteravailable['familyavailable'])) {
            $sheltertypeString = (new \yii\db\Query())
                ->select('*')
                ->from('shelter_detail_table')
                ->where(['shelter_id' => $newShelteravailable['shelter_id']])
                ->all();


            if (count($sheltertypeString) < 1) {


// Insert Women and if available because not entered before

                Yii::$app->db->createCommand()->insert('shelter_detail_table', [

                    'shelter_id' => $newShelteravailable['shelter_id'],
                    'shelter_type_id' => $newShelteravailable['women'],
                    'available' => $newShelteravailable['womenavailable'],
                    'last_updated' => $date,
                ])->execute();


// Insert Men and if available

                Yii::$app->db->createCommand()->insert('shelter_detail_table', [

                    'shelter_id' => $newShelteravailable['shelter_id'],
                    'shelter_type_id' => $newShelteravailable['men'],
                    'available' => $newShelteravailable['menavailable'],
                    'last_updated' => $date,
                ])->execute();

// Insert Youth and if available
                Yii::$app->db->createCommand()->insert('shelter_detail_table', [
                    'shelter_id' => $newShelteravailable['shelter_id'],
                    'shelter_type_id' => $newShelteravailable['youth'],
                    'available' => $newShelteravailable['youthavailable'],
                    'last_updated' => $date,
                ])->execute();

// Insert Family and if available
                Yii::$app->db->createCommand()->insert('shelter_detail_table', [
                    'shelter_id' => $newShelteravailable['shelter_id'],
                    'shelter_type_id' => $newShelteravailable['family'],
                    'available' => $newShelteravailable['familyavailable'],
                    'last_updated' => $date,
                ])->execute();

                $message = ['Availability has been added', $sheltertypeString];
                return $message;
            } else {


// Update the men, women, youth and family availability

                $sheltertoupdate = ShelterDetailTable::findAll(['shelter_id' => $newShelteravailable['shelter_id']]);

                $sheltersearch = $newShelteravailable['shelter_id'];

                if (count($sheltertoupdate) > 0) {
                    $sheltertoupdate[0]->shelter_type_id = $newShelteravailable['women'];
                    $sheltertoupdate[0]->available = $newShelteravailable['womenavailable'];
                    $sheltertoupdate[0]->last_updated = $date;
                    $sheltertoupdate[0]->save();

                    $sheltertoupdate[1]->shelter_type_id = $newShelteravailable['men'];
                    $sheltertoupdate[1]->available = $newShelteravailable['menavailable'];
                    $sheltertoupdate[1]->last_updated = $date;
                    $sheltertoupdate[1]->save();

                    $sheltertoupdate[2]->shelter_type_id = $newShelteravailable['youth'];
                    $sheltertoupdate[2]->available = $newShelteravailable['youthavailable'];
                    $sheltertoupdate[2]->last_updated = $date;
                    $sheltertoupdate[2]->save();

                    $sheltertoupdate[3]->shelter_type_id = $newShelteravailable['family'];
                    $sheltertoupdate[3]->available = $newShelteravailable['familyavailable'];
                    $sheltertoupdate[3]->last_updated = $date;
                    $sheltertoupdate[3]->save();

                    $message = ['Availability has been updated', $sheltertoupdate];
                    return $message;
                }
            }
        } else {
            $missingdata = ['Missing data', $newShelteravailable];
        }
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
