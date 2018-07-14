<?php

use yii\db\Migration;

/**
 * Class m180414_233341_change_phone
 */
class m180414_233341_change_phone extends Migration
{
    /**
     * @inheritdoc
     */
    public function Up()
    {

    //    $this->addColumn('shelter_table', 'shelter_address_city', $this->string(30),
    //       // 'shelter_phone' => $this->string(12)->notNull(),
    //       'shelter_address_state' , $this->string(30)->notNull(),
    //       'shelter_address_zip' , $this->string(30)->notNull(),
    //    ];
    }


    /**
     * @inheritdoc
     */
    public function Down()
    {
        echo "m180414_233341_change_phone cannot be reverted.\n";

        return false;
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m180414_233341_change_phone cannot be reverted.\n";

        return false;
    }
    */
}
