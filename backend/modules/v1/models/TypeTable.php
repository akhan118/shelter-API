<?php

namespace app\modules\v1\models;

use Yii;

/**
 * This is the model class for table "type_table".
 *
 * @property int $shelter_type_id
 * @property string $type_name
 *
 * @property ShelterDetailTable[] $shelterDetailTables
 */
class TypeTable extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'type_table';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['type_name'], 'required'],
            [['type_name'], 'string', 'max' => 10],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'shelter_type_id' => 'Shelter Type ID',
            'type_name' => 'Type Name',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getShelterDetailTables()
    {
        return $this->hasMany(ShelterDetailTable::className(), ['shelter_type_id' => 'shelter_type_id']);
    }
}
