<?php

use yii\db\Migration;

/**
 * Class m180629_005328_username_fk
 */
class m180629_005328_username_fk extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
    //         public
    //  void addForeignKey ( $name, $table, $columns, $refTable, $refColumns, $delete = null, $update = null )
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        echo "m180629_005328_username_fk cannot be reverted.\n";

        return false;
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m180629_005328_username_fk cannot be reverted.\n";

        return false;
    }
     */
}
