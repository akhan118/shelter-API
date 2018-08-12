<?php

use yii\db\Migration;

/**
 * Class m180811_210718_new_shelter_table
 */
class m180811_210718_new_shelter_table extends Migration
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

        $this->createTable('{{%shelter_table}}', [
            'shelter_id' => $this->primaryKey(),
            'shelter_name' => $this->string(10)->notNull(),
            'shelter_address' => $this->string(30)->notNull(),
            'shelter_address_city' => $this->string(30)->notNull(),
            'shelter_address_state' => $this->string(30)->notNull(),
            'shelter_address_zip' => $this->string(30)->notNull(),
            'shelter_county' => $this->string(10)->notNull(),
            'shelter_phone' => $this->integer()->notNull(),
            'shelter_email' => $this->string(10)->notNull(),
            'shelter_EIN' => $this->integer()->notNull(),
            'shelter_long' => $this->integer()->notNull(),
            'shelter_lat' => $this->integer()->notNull(),
            'username' => $this->string(30)->notNull(),
            'shelter_approved' => $this->smallInteger()->notNull()->defaultValue(0),

        ], $tableOptions);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        echo "m180811_210718_new_shelter_table cannot be reverted.\n";

        return false;
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m180811_210718_new_shelter_table cannot be reverted.\n";

        return false;
    }
    */
}
