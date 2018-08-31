<?php

use yii\db\Migration;

/**
 * Handles adding userId to table `shelter`.
 */
class m180825_190113_add_userId_column_to_shelter_table extends Migration
{
    /**
     * @inheritdoc
     */
    public function up()
    {
        $this->addColumn('shelter_table', 'userId', $this->integer());
    }

    /**
     * @inheritdoc
     */
    public function down()
    {
        $this->dropColumn('shelter', 'userId');
    }
}
