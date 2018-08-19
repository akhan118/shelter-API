<?php
namespace console\controllers;

use Yii;
use yii\console\Controller;

class RbacController extends Controller
{
    public function actionInit()
    {
        $auth = Yii::$app->authManager;

        /**
         * Permissions
         */

        // create and add "createPost" permission
        $createPost = $auth->createPermission('createPost');
        $createPost->description = 'User can create a post';
        $auth->add($createPost);

        // create and add "updatePost" permission
        $updatePost = $auth->createPermission('updatePost');
        $updatePost->description = 'User can update post';
        $auth->add($updatePost);

        // create and add "actionYellow" permission
        $createPost = $auth->createPermission('actionYellow');
        $createPost->description = 'create actionYellow';
        $auth->add($actionYellow);
        /**
         * Roles
         */

        // create and add "user" role
        $user = $auth->createRole('user');
        $auth->add($user);

        // create and add "shelterAdmin" role
        $shelterAdmin = $auth->createRole('shelterAdmin');
        $auth->add($shelterAdmin);

        // create and add "supersuperAdmin" role
        $superAdmin = $auth->createRole('superAdmin');
        $auth->add($superAdmin);

        /**
         * Mutual connections
         */

        // "shelterAdmin" can create new Post
        $auth->addChild($shelterAdmin, $createPost);

        // "superAdmin" can do everything what "shelterAdmin" can
        $auth->addChild($superAdmin, $shelterAdmin);
       
        // "superAdmin" can update ALL Posts
        $auth->addChild($superAdmin, $updatePost);

        //"superAdmin' can do yellow
        $auth->addChild($superAdmin, $actionYellow);
}

public function actionCreateShelterAdminRule()
{
    $auth = Yii::$app->authManager;

    // add the rule
    $rule = new \console\rbac\ShelterAdminRule();
    $auth->add($rule);

    // add the "updateOwnPost" permission and associate the rule with it.
    $updateOwnPost = $auth->createPermission('updateOwnPost');
    $updateOwnPost->description = 'Update own post';
    $updateOwnPost->ruleName = $rule->name;
    $auth->add($updateOwnPost);

    // get the "updatePost" permission
    $updatePost = $auth->getPermission('updatePost');

    // get the "shelterAdmin" role
    $shelterAdmin = $auth->getRole('shelterAdmin');

    // "updateOwnPost" will be used from "updatePost"
    $auth->addChild($updateOwnPost, $updatePost);

    // allow "shelterAdmin" to update their own posts
    $auth->addChild($shelterAdmin, $updateOwnPost);
}


// public function actionAssign($role, $username)
// {
//     $user = User::find()->where(['username' => $username])->one();
//     if (!$user) {
//         throw new InvalidParamException("There is no user \"$username\".");
//     }

//     $auth = Yii::$app->authManager;
//     $roleObject = $auth->getRole($role);
//     if (!$roleObject) {
//         throw new InvalidParamException("There is no role \"$role\".");
//     }

//     $auth->assign($roleObject, $user->id);
// }
}