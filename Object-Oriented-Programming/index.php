<html>
  <head>
    <title>Object Oriented Programming</title>
  </head>
  <body>
  <h1>ET: Basic OOP in PHP</h1>
    <?php
      include 'et.php';
      $myglasses = new Sunglasses;
      $myglasses->owner = "Lee";
      $myglasses->brand = "Yaybans";
      $myglasses->material = "plastic";
      $myglasses->lenscorrection = "nearsighted";
      $myglasses->shade = "darker";
      echo $myglasses->describe();
      $image = 'A tree';
      echo "<br>Before: <b>" . $image . "</b>";
      $correctedImage = $myglasses->correct('A tree');
      echo "<br>After: <b>" . $correctedImage . "</b>";
      
    ?> 
  </body>
</html>