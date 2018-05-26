<?php

use yii\db\Migration;

/**
 * Class m180417_024308_add_columns
 */
class m180417_024308_add_columns extends Migration
{
    /**
     * @inheritdoc
     */
    public function safeUp()
    {
      $this->addColumn('shelter_table','shelter_address_state' , $this->string(30)
         // 'shelter_address_zip' , $this->string(10)
      );
    }

    /**
     * @inheritdoc
     */
    public function safeDown()
    {
        echo "m180417_024308_add_columns cannot be reverted.\n";

        return false;
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m180417_024308_add_columns cannot be reverted.\n";

        return false;
    }
    */
}
