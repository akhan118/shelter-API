<?php

namespace app\modules\v1\models;

use Yii;

/**
 * This is the model class for table "shelter_detail_table".
 *
 * @property int $shelter_detail_id
 * @property int $shelter_id
 * @property int $shelter_type_id
 * @property string $last_updated
 * @property int $available
 *
 * @property ShelterTable $shelter
 * @property TypeTable $shelterType
 */
class ShelterDetailTable extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'shelter_detail_table';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['shelter_id', 'shelter_type_id', 'last_updated', 'available'], 'required'],
            [['shelter_id', 'shelter_type_id', 'available'], 'integer'],
            [['last_updated'], 'safe'],
            [['shelter_id'], 'exist', 'skipOnError' => true, 'targetClass' => ShelterTable::className(), 'targetAttribute' => ['shelter_id' => 'shelter_id']],
            [['shelter_type_id'], 'exist', 'skipOnError' => true, 'targetClass' => TypeTable::className(), 'targetAttribute' => ['shelter_type_id' => 'shelter_type_id']],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'shelter_detail_id' => 'Shelter Detail ID',
            'shelter_id' => 'Shelter ID',
            'shelter_type_id' => 'Shelter Type ID',
            'last_updated' => 'Last Updated',
            'available' => 'Available',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getShelter()
    {
        return $this->hasOne(ShelterTable::className(), ['shelter_id' => 'shelter_id']);
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getShelterType()
    {
        return $this->hasOne(TypeTable::className(), ['shelter_type_id' => 'shelter_type_id']);
    }
}
