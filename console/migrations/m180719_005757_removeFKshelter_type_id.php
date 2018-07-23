<?php

use yii\db\Migration;

/**
 * Class m180719_005757_removeFKshelter_type_id
 */
class m180719_005757_removeFKshelter_type_id extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->dropForeignKey('shelter_type_id', 'shelter_detail_table');
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        echo "m180719_005757_removeFKshelter_type_id cannot be reverted.\n";

        return false;
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m180719_005757_removeFKshelter_type_id cannot be reverted.\n";

        return false;
    }
    */
}
