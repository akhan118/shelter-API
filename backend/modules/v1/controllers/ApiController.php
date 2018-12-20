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
     'except' => ['login', 'signup', 'getrequestedinfo', 'getrequestedinfov2', 'getallsheltersneedactivation', 'signupshelter', 'shelterconfig', 'shelterupdateconfig', 'updateshelterapprovalview', 'updateshelterapprovalupdate']
        ];

        return $behaviors;
    }

    /**
     * Action Login
     * This function will log Shelter Admin into app so they can work with the Shelter they are attached to-
     *
     * Author: Ahmad
     * paramters: username, password, userId
     * return : access token, username, role, and shelter associated with userId
     * @return string
     */

    public function actionLogin()
    {
        $model = new LoginForm();
        $request = Yii::$app->request;
        $get = $request->get();
        $newLogininfo = Yii::$app->request->get();

        $model->attributes = Yii::$app->request->get();
        if ($model->validate() && $model->login()) {
            $userId = Yii::$app->user->identity->id;


            $shelter = (new \yii\db\Query())
                ->select('*')
                ->from('shelter_table')
                // ->where(['userId' => $newLogininfo['userId']])
                ->where(['userId' => $userId])
                ->all();


            return [
                'access_token' => Yii::$app->user->identity->getAuthKey(),
                'username' => Yii::$app->user->identity->username,
                'role' => \Yii::$app->authManager->getRolesByUser($userId),
                'shelter' => $shelter,
            ];
        } else {
            return ['Authentication' => false];
        }    }


    /**
     * Action Signup
     * This function will add the initial location information for Shelters-
     *
     * Author: Ahmad
     * paramters: shelter_name, email, username, and password
     *            
     * return : if signup = send true and userId, or false and error message 
     * @return string
     */
    public function actionSignup()
    {
        $model = new SignupForm();
        $request = Yii::$app->request;
        $get = $request->get();
        
        $model->attributes = Yii::$app->request->get();
      
        
        if ($model->validate() && $model->signup()) {

            return [
                'signup' => true,
                   'userId' => Yii::$app->db->getLastInsertID(),
               
                    ];

        } else {
            return ['signup' => false, 'error' => $model->getErrors()];
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


    /**
     * Action SignUpShelter
     * Add a new shelter
     * Author: Annette & Ahmad .
     * paramters: shelter_name , email, username .
     * return : new shelter_id or error.
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
                $userId = $signup['userId'];

              
                $newuserID = (new \yii\db\Query())
                ->select('*')
                ->from('user')
                 ->where(['username' => $newShelterinfo['username']])
                ->all();


            if ($signup['signup'] != false) {
                $userId= $signup['userId'];

                $useridString = (new \yii\db\Query())
                    ->select('*')
                    ->from('user')
                    ->where(['username' => $newShelterinfo['username']])
                    ->all();

//  var_dump($useridString);
                $userId = $useridString[0]['id'];
 
                Yii::$app->db->createCommand()->insert('shelter_table', [
                'shelter_name' => $newShelterinfo['shelter_name'],
                'shelter_email' => $newShelterinfo['email'],
                'username' => $newShelterinfo['username'],
                'userID' => $userId,
            ])->execute();
                return $response = [
                'status' => 'success',
                'new_shelter_id' => Yii::$app->db->getLastInsertID(),
                'userID'=> $userId,
            ];
            } else {
                return $response = [
               'signup' =>'failed',
               'error' => $signup['error']
           ];
            }
        
        } else {
            return $response = [
              'incomplete input ' =>'failed',
              'error' => $newShelterinfo,
          ];
        }
    }
            
}




    /**
     * Action ShelterConfig
     * This function will add the initial location information for Shelters-
     *
     * Author: Annette
     * paramters: shelter_id, shelter_address, shelter_address_city, shelter_address_state, shelter_address_zip, shelter_phone,
     *            shelter_EIN, shelter_county
     * return : shelter information that was add or error message
     * @return string
     */
    public function actionShelterconfig()
    {
        $request = Yii::$app->request;
        $get = $request->get();
            // $newShelteravailable = Yii::$app->request->get();

        // var_dump($newShelteravailable);
        date_default_timezone_set('america/detroit');
        $date = date('Y-m-d h:i:s a', time());

        // Get individual variable information out of $get and make sure not blank
       // items to get are  shelter_id, address, city, state, zip, phone, EIN, and county 
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
                ->where(['shelter_id' => $newShelterinfo['shelter_id']] and ['shelter_approved' => 1])
                ->all();
            

            // shelter exists in shelter_table

            if (count($shelteridString) > 0) {
                $newshelter_name = $shelteridString[0]['shelter_name'];
            
                  
//
//  if address information is not there then update that information



                $sheltertoupdate = ShelterTable::findAll(['shelter_id' => $newShelterinfo['shelter_id']]);

                $sheltersearch = $newShelterinfo['shelter_id'];

                if (count($sheltertoupdate) > 0) {
                    if ($shelteridString[0]['shelter_address'] == null) {
                        var_dump($newShelterinfo);
                        var_dump($shelteridString[0]['shelter_address']);
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
            // } else {
            //     //    shelter already exist and just update info

            //     $alreadythere = 'Already there. Should update instead of adding as new shelter';
            //     return $alreadythere;
            // } 
            } else {

                $message = ['The shelter id is not in the database, please correct or sign up', $newShelterinfo];
                return $message;
            }
        } else {
            $baddata = ['Missing Shelter Data', $newShelterinfo];
            return $baddata;
        }
    }



    /**
     * Action ShelterUpdateConfig
     * This function will add the information for types of rooms or update if already in shelter_detail_table-
     * Author: Annette
     * paramters: shelter_id, type of room and the availability
     * return : shelter information that was updated or error message
     * @return string
     */



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


            $sheltertableString = (new \yii\db\Query())
                ->select('*')
                ->from('shelter_table')
                 ->where(['shelter_id' => $newShelteravailable['shelter_id']])
                 ->all();
           var_dump($sheltertableString[0]['shelter_approved']);
           var_dump($sheltertableString);
          
          if ($sheltertableString[0]['shelter_approved'] = 0){

            $message = "This shelter is not approved for updating";
            return $message;
          }
          
                var_dump($sheltertableString);

            if (count($sheltertableString) > 0 and $sheltertableString[0]['shelter_approved'] = 1) {
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

                    $message = ['Availability has been added', $newShelteravailable];
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

                $message = ['That shelter is not in the database so the availability cannot be updated', $newShelteravailable];
                return $message;
            }
        } else {
            $missingdata = ['Missing data', $newShelteravailable];
            return $missingdata;
        }
    }


    /**
     * Action GetallsheltersNeedActivation
     * This function will display to the Superuser all shelters in database  
     * Author: Abdul
     * paramters: 
     * return : return all shelters 
     * @return string
     */


// Get all shelter by admin ethire approved or not
    public function actionGetallsheltersneedactivation()
    {
        $response = (new \yii\db\Query())
            ->select('*')
            ->from('shelter_table')
    //   ->where(['shelter_approved' => $shelter_approved]) // super admin can check by approve number 1 not 2 approved
            ->all();
        if (count($response) > 0) {

            $message = ['Shelters in database ',
             $response];
            return $message;

        } else {

            $message = ['No shelters in database'];
            return $message;

            // return $response;
        }
    }



    /**
     * Action Updateshelterapprovalupdate
     * This function will update selected shelter to approved status. This is for  the Superuser only   
     * Author: Annette
     * paramters: shelter_id, new status -- 1 = approved or 2 = suspended
     * return : shelters info that was approved or message if shelter is not in database
     * @return string
     */


    public function actionUpdateshelterapprovalupdate()
    {

        $request = Yii::$app->request;
        $get = $request->get();
        $newShelterinfo = Yii::$app->request->get();

        $sheltertoupdate = ShelterTable::findAll(['shelter_id' => $newShelterinfo['shelter_id']]);

        $sheltersearch = $newShelterinfo['shelter_id'];

        if (count($sheltertoupdate) > 0) {
            // if ($shelteridString[0]['shelter_address'] == null) {
            //     $sheltertoupdate[0]->shelter_address = $newShelterinfo['shelter_address'];
            //     $sheltertoupdate[0]->shelter_address_city = $newShelterinfo['shelter_address_city'];
            //     $sheltertoupdate[0]->shelter_address_state = $newShelterinfo['shelter_address_state'];
            //     $sheltertoupdate[0]->shelter_address_zip = $newShelterinfo['shelter_address_zip'];
            //     $sheltertoupdate[0]->shelter_county = $newShelterinfo['shelter_county'];
            //     $sheltertoupdate[0]->shelter_phone = $newShelterinfo['shelter_phone'];
            //     $sheltertoupdate[0]->shelter_EIN = $newShelterinfo['shelter_EIN'];
            $sheltertoupdate[0]->shelter_approved = $newShelterinfo['shelter_approved'];

            $sheltertoupdate[0]->save();
            // }

            return $sheltertoupdate[0];
        } else {

            $message = "Nothing to update";
            return $message;
        }
    }


    /**
     * Action Getrequestedinfov2
     * This function will available shelters in the database to the Users searching for shelter.  
     * Author: Annette
     * paramters: Type of shelter searching (Women, Men, Youth or Family)for or 5 for all shelters
     * return : List of shelter matching search type
     * @return string
     */

    public function actionGetrequestedinfov2()
    {

        //get shelter type (decide if it is a string or in )
        $requestedShelterType = Yii::$app->request->get();
        $k=0;
        
            //grab all shelters that match the query type
        $response2 = (new \yii\db\Query())
            ->select([
                'shelter_id', 'shelter_name', 'shelter_address',
                'shelter_address_city', 'shelter_address_state', 'shelter_address_zip',
                'shelter_phone', 'shelter_long', 'shelter_lat', 'shelter_county'
            ])
            ->from('shelter_table')
            // ->where(['shelter_id' => $response1[$i]['shelter_id']])
            ->where(['shelter_approved' => 1])
            ->all();
// var_Dump($response2);
if (count($response2)<1){
    $message="No shelters to display.  Need to be approved";
    return $message;
}
         $returnedArray = [];

        // puts all the selected shelter id into an array for json file 

        if ($requestedShelterType['sheltertype'] == 5) {


            for ($i = 0; $i < count($response2); $i++) {
            
            //get desired fields from shelter_table from shelters matching type
            //request
        
                $response1 = (new \yii\db\Query())
                    ->select('*')
                    ->from('shelter_detail_table')
                    ->where(['shelter_id' => $response2[$i]])
                    ->all();
                for ($j = 0; $j < 4; $j++) {
                array_push($returnedArray, $response2[$i]);
            //add in fields from shelter_detail_table
                $returnedArray[$k]['shelter_type_id'] = $response1[$j]['shelter_type_id'];
                $returnedArray[$k]['available'] = $response1[$j]['available'];
                $returnedArray[$k]['last_updated'] = $response1[$j]['last_updated'];
                
                    $k = $k + 1;
                }
       
            }
         } else {
            $response1 = (new \yii\db\Query())
                ->select('*')
                ->from('shelter_detail_table')
                ->where(['shelter_type_id' => $requestedShelterType])
                ->all();

            if (count($response1) > 0) {

                 for ($i = 0; $i < count($response1); $i++) {
                      $response2 = (new \yii\db\Query())
                      ->select([
                            'shelter_id', 'shelter_name', 'shelter_address',
                            'shelter_address_city', 'shelter_address_state', 'shelter_address_zip',
                            'shelter_phone', 'shelter_long', 'shelter_lat', 'shelter_county'
                             ])
                        ->from('shelter_table')
                            // ->where(['shelter_id' => $response1[$i]['shelter_id']])
                        ->where(['shelter_approved' => 1] and ['shelter_id' => $response1[$i]['shelter_id']] )
                        ->all();

                        array_push($returnedArray, $response2[$i]);
                        $returnedArray[$i]['shelter_type_id'] = $response1[$i]['shelter_type_id'];
                        $returnedArray[$i]['available'] = $response1[$i]['available'];
                        $returnedArray[$i]['last_updated'] = $response1[$i]['last_updated'];

                   }
            } else {
                 $message = "No Available to that type" & $requestedShelterType['sheltertype'];
                  return $message;

               }
           }


    return $returnedArray;
}
}
