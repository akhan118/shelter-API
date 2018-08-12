<?php

use yii\db\Migration;

/**
 * Class m180811_210645_new_shelter_detail_table
 */
class m180811_210645_new_shelter_detail_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
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

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        echo "m180811_210645_new_shelter_detail_table cannot be reverted.\n";

        return false;
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m180811_210645_new_shelter_detail_table cannot be reverted.\n";

        return false;
    }
    */
}
