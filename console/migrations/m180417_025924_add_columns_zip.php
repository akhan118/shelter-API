<?php

use yii\db\Migration;

/**
 * Class m180417_025924_add_columns_zip
 */
class m180417_025924_add_columns_zip extends Migration
{
    /**
     * @inheritdoc
     */
    public function safeUp()
    {
      $this->addColumn('shelter_table', 'shelter_address_zip' , $this->string(10)
      );
    }

    /**
     * @inheritdoc
     */
    public function safeDown()
    {
        echo "m180417_025924_add_columns_zip cannot be reverted.\n";

        return false;
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m180417_025924_add_columns_zip cannot be reverted.\n";

        return false;
    }
    */
}
