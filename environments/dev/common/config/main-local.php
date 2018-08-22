<?php
return [
    'components' => [
        'db' => [
            'class' => 'yii\db\Connection',
             'dsn' => 'mysql:host=localhost;dbname=homeless_project',
            //'dsn' => 'mysql:host=localhost;dbname=homeless_project2',
            'username' => 'root',
            'password' => 'root',
            'charset' => 'utf8',
        ],
        'mailer' => [
            'class' => 'yii\swiftmailer\Mailer',
            'viewPath' => '@common/mail',
            // send all mails to a file by default. You have to set
            // 'useFileTransport' to false and configure a transport
            // for the mailer to send real emails.
            'useFileTransport' => true,
        ],
          //add Authorization Manager
        'authManager' => [
            'class' => 'yii\rbac\DbManager',
            // 'defaultRoles' => ['superAdmin','shelterAdmin','user']
        ],
    ],
];
