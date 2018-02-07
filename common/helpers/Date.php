<?php
/**
 * @link http://www.yiiframework.com/
 * @copyright Copyright (c) 2008 Yii Software LLC
 * @license http://www.yiiframework.com/license/
 */

 namespace common\helpers;

/**
 * ArrayHelper provides additional array functionality that you can use in your
 * application.
 *
 * For more details and usage information on ArrayHelper, see the [guide article on array helpers](guide:helper-array).
 *
 * @author Qiang Xue <qiang.xue@gmail.com>
 * @since 2.0
 */
class Date
{
  function isWeekend($date) {
      return (date('N', strtotime($date)) >= 6);
  }

  function isHolyday($date) {
      return (date('N', strtotime($date)) >= 6);
  }


  function lastTradingDate(){

    // return the last trading day as as an object

  }

function tradingDate()
{

}

function pastTradingDate($days)
{

}

function futureTradingDate($days)
{

}

}


// $FromDayDate=new \DateTime('today',new \DateTimeZone('America/New_York'));
// VarDump::dd($FromDayDate);
//
//
// $ToDayDate = new \DateTime('today');
// $ToDayDate->modify("+7 day");
// $ToDayDate->format("Y-m-d");

// VarDump::dd($ToDayDate);
// die();
