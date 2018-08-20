<?php

use yii\db\Migration;

/**
 * Class m180819_232559_init_rbac
 */
class m180819_232559_init_rbac extends Migration
{
    /**
     * @inheritdoc
     */
    public function safeUp()
    {

    }

    /**
     * @inheritdoc
     */
    public function safeDown()
    {
        echo "m180819_232559_init_rbac cannot be reverted.\n";

        return false;
    }

    public function up()
    {
        $auth = Yii::$app->authManager;

        // add "createPost" permission
        $viewAdmin = $auth->createPermission('viewAdmin');
        $viewAdmin->description = 'view Admin stuff';
        $auth->add($viewAdmin);

        // add "updatePost" permission
        $viewSuperAdmin = $auth->createPermission('viewSuperAdmin');
        $viewSuperAdmin->description = 'view super admin stuff';
        $auth->add($viewSuperAdmin);

        // add "author" role and give this role the "createPost" permission
        $admin = $auth->createRole('admin');
        $auth->add($admin);
        $auth->addChild($admin, $viewAdmin);

        // add "admin" role and give this role the "updatePost" permission
        // as well as the permissions of the "author" role
        $superAdmin = $auth->createRole('superAdmin');
        $auth->add($superAdmin);
        $auth->addChild($superAdmin, $viewSuperAdmin);


    }

    public function down()
    {
        $auth = Yii::$app->authManager;

        $auth->removeAll();
    }
}
