<?php

use yii\db\Migration;

/**
 * Handles the dropping of table `shelter`.
 */
class m180811_210615_drop_shelter_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        if ($this->db->schema->getTableSchema('shelter_table', true) != null) {
            $this->dropTable('shelter_table');
            // table 'my_table' exists!
        }
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->createTable('shelter_table', [
            'shelter_id' => $this->primaryKey(),

        ]);
    }
}
