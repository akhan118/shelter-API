<?php

use yii\db\Migration;

/**
 * Class m180305_180144_shelter_detail_table
 */
class m180305_180144_shelter_detail_table extends Migration
{
  public function safeup(){

      $tableOptions = null;
      if ($this->db->driverName === 'mysql') {
          // http://stackoverflow.com/questions/766809/whats-the-difference-between-utf8-general-ci-and-utf8-unicode-ci
          $tableOptions = 'CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE=InnoDB';
      }

      $this->createTable('{{%shelter_detail_table}}', [
          'shelter_detail_id' => $this->primaryKey(),
          'shelter_id' => $this->integer()->notNull(),
          'shelter_type_id' => $this->integer()->notNull(),
          'last_updated' => $this->datetime()->notNull(),
          'available' => $this->boolean()->notNull(),
      ], $tableOptions);
    }

    public function safedown()
    {
        $this->dropTable('shelter_detail_table');
    }

}
