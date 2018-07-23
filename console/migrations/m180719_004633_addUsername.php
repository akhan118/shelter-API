<?php

use yii\db\Migration;

/**
 * Class m180719_004633_addUsername
 */
class m180719_004633_addUsername extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->addColumn('shelter_table', 'username', $this->string(30));
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        echo "m180719_004633_addUsername cannot be reverted.\n";

        return false;
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m180719_004633_addUsername cannot be reverted.\n";

        return false;
    }
    */
}
