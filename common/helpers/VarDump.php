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
class VarDump
{
  static function dd($data,$die=0){

      highlight_string("<?php\n \n " . var_export($data, true) . ";\n \n ?>");


    //  echo '<pre>';
    //  var_dump($data);
    //  echo '</pre>';

    echo '<br>';
    echo '<br>';

     if($die==1){
     die('End of Data');
}
  }
}
