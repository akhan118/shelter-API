<?php

use yii\db\Migration;

/**
 * Handles the dropping of table `shelter_detail`.
 */
class m180811_210540_drop_shelter_detail_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->dropTable('shelter_detail_table');
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->createTable('shelter_detail_table', [
            'shelter_detail_id' => $this->primaryKey(),
           
        ]);
    }
}
