<?php

use yii\db\Migration;

/**
 * Class m180305_175021_shelter_table
 */
class m180305_175021_shelter_table extends Migration
{
  public function safeup(){

      $tableOptions = null;
      if ($this->db->driverName === 'mysql') {
          // http://stackoverflow.com/questions/766809/whats-the-difference-between-utf8-general-ci-and-utf8-unicode-ci
          $tableOptions = 'CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE=InnoDB';
      }

      $this->createTable('{{%shelter_table}}', [
          'shelter_id' => $this->primaryKey(),
          'shelter_name' => $this->string(10)->notNull(),

      ], $tableOptions);
    }

    public function safedown()
    {
        $this->dropTable('shelter_table');
    }

}
