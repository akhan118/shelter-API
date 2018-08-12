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
        $this->dropTable('shelter_table');
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
