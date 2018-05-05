<?php

namespace app\modules\v1\models;

use Yii;

/**
 * This is the model class for table "shelter_table".
 *
 * @property int $shelter_id
 * @property string $shelter_name
 * @property string $shelter_address
 * @property string $shelter_address_city
 * @property string $shelter_address_state
 * @property string $shelter_address_zip
 * @property int $shelter_phone
 * @property int $shelter_long
 * @property int $shelter_lat
 * @property string $shelter_county
 * @property string $shelter_email
 * @property int $shelter_EIN
 * @property int $shelter_approved
 *
 * @property ShelterDetailTable[] $shelterDetailTables
 */
class ShelterTable extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'shelter_table';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['shelter_name', 'shelter_address', 'shelter_address_city', 'shelter_address_state', 'shelter_address_zip', 'shelter_phone', 'shelter_long', 'shelter_lat', 'shelter_county', 'shelter_email', 'shelter_EIN'], 'required'],
            [['shelter_phone', 'shelter_long', 'shelter_lat', 'shelter_EIN', 'shelter_approved'], 'integer'],
            [['shelter_name', 'shelter_county', 'shelter_email'], 'string', 'max' => 10],
            [['shelter_address', 'shelter_address_city', 'shelter_address_state', 'shelter_address_zip'], 'string', 'max' => 30],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'shelter_id' => 'Shelter ID',
            'shelter_name' => 'Shelter Name',
            'shelter_address' => 'Shelter Address',
            'shelter_address_city' => 'Shelter Address City',
            'shelter_address_state' => 'Shelter Address State',
            'shelter_address_zip' => 'Shelter Address Zip',
            'shelter_phone' => 'Shelter Phone',
            'shelter_long' => 'Shelter Long',
            'shelter_lat' => 'Shelter Lat',
            'shelter_county' => 'Shelter County',
            'shelter_email' => 'Shelter Email',
            'shelter_EIN' => 'Shelter  Ein',
            'shelter_approved' => 'Shelter Approved',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getShelterDetailTables()
    {
        return $this->hasMany(ShelterDetailTable::className(), ['shelter_id' => 'shelter_id']);
    }
}
