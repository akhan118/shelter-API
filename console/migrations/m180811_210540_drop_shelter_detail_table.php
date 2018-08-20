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
        if ($this->db->schema->getTableSchema('shelter_detail_table', true) != null) {
            $this->dropTable('shelter_detail_table');
            // table 'my_table' exists!
        }
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
