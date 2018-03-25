<?php

use yii\db\Migration;

/**
 * Class m180306_181951_shelter_type_FK
 */
class m180306_181951_shelter_type_FK extends Migration
{

    public function safeUp()
    {
      $tableOptions = null;
      if ($this->db->driverName === 'mysql') {
          // http://stackoverflow.com/questions/766809/whats-the-difference-between-utf8-general-ci-and-utf8-unicode-ci
          $tableOptions = 'CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE=InnoDB';
      }
      // $this->alterTable('{{%shelter_detail_table}}', [
      //     'shelter_detail_id' => $this->primaryKey(),
      //     'shelter_id' => $this->integer()->notNull(),
      //     'shelter_type_id' => $this->integer()->notNull(),
      //     'last_updated' => $this->datetime()->notNull(),
      //     'available' => $this->boolean()->notNull(),
      // ], $tableOptions);
      // add foreign key for table `shelter_detail_table`
            $this->addForeignKey(
                'shelter_type_id',
                'shelter_detail_table',
                'shelter_type_id',
                'type_table',
                'shelter_type_id',
                'CASCADE'
            );
    }


    public function safeDown()
    {
        echo "m180306_181951_shelter_type_FK cannot be reverted.\n";

        return false;
    }


}
