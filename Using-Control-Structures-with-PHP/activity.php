<?php
  $min = -100;
  $max = 100;
  $range = $max - $min;
  $num1 = rand($min, $max);
  $num2 = rand($min, $max);
  $tried = [];
  for ( $i = $min + $min; $i <= $max + $max; $i++ )
  {
    $unique = false;
    $answer = 0;
    while ($unique == false)
    {
      $answer = rand( $min + $min, $max + $max );
      $unique = true;
      foreach ( $tried as $key => $value )
      {
        $unique = ($answer == $value) ? false : $unique;
      }
    }
    $tried[] = $answer;
    echo ($answer == $num1+$num2) ? $num1 . ' + ' . $num2 . ' = ' . $answer : '';
  }
?>