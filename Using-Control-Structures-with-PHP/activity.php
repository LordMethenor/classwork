<?php
  $min = -100000;
  $max = 100000;
  $range = $max - $min;
  $num1 = rand($min, $max);
  $num2 = rand($min, $max);
  $tried = [];
  for ( $i = $min - $min; $i <= $max + $max; $i++ )
  {
    $unique = false;
    $answer = 0;
    while ($unique == false)
    {
      $answer = rand( $min - $min, $max + $max );
      $unique = true;
      foreach ( $tried as $key => $value )
      {
        if ( $answer == $value) {
          $unique = false;
        }
      }
    }if ($answer == $num1+$num2) 
    {
      echo $num1 . ' + ' . $num2 . ' = ' . $answer;
    }
  }
?>