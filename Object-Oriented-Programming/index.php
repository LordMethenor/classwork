<html>
  <head>
    <title>Object Oriented Programming</title>
  </head>
  <body>
  <h1>ET: Basic OOP in PHP</h1>
    <?php
      include 'et.php';
      $myglasses = new Sunglasses;
      $myglasses->setOwner("Lee");
      $myglasses->setBrand("Yaybans");
      $myglasses->setMaterial("plastic");
      $myglasses->setLens("nearsighted");
      $myglasses->setShade("darker");
      echo $myglasses->describe();
      $image = 'A tree';
      echo "<br>Before: <b>" . $image . "</b>";
      $correctedImage = $myglasses->correct($image);
      echo "<br>After: <b>" . $correctedImage . "</b>";
      
    ?> 
  </body>
</html>