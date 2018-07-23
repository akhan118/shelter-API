<?php

use yii\db\Migration;

/**
 * Class m180719_161725_dropShelter_id_index
 */
class m180719_161725_dropShelter_id_index extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
         $this->dropIndex('shelter_type_id', 'shelter_detail_table');
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        echo "m180719_161725_dropShelter_id_index cannot be reverted.\n";

        return false;
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m180719_161725_dropShelter_id_index cannot be reverted.\n";

        return false;
    }
    */
}
