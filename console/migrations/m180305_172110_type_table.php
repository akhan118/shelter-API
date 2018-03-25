<?php

use yii\db\Migration;

/**
 * Class m180305_172110_type_table
 */
class m180305_172110_type_table extends Migration
{
  public function safeup()
    {
      $tableOptions = null;
      if ($this->db->driverName === 'mysql') {
          // http://stackoverflow.com/questions/766809/whats-the-difference-between-utf8-general-ci-and-utf8-unicode-ci
          $tableOptions = 'CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE=InnoDB';
      }

      $this->createTable('{{%type_table}}', [
          'shelter_type_id' => $this->primaryKey(),
          'type_name' => $this->string(10)->notNull(),

      ], $tableOptions);
    }

    public function safedown()
    {
        $this->dropTable('type_table');
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m171021_205740_menu cannot be reverted.\n";

        return false;
    }
    */
  }
