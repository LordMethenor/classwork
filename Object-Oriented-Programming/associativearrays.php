<html>
  <head>
    <title>Associative Array vs OOP</title>
  </head>
  <body>
  <h1>OOP and/or Associative Arrays</h1>
  <h2>OOP</h2>
    <?php
      include 'oop.php';
      $myglasses = new Sunglasses;
      $myglasses->setOwner("Lee");
      $myglasses->setBrand("Yaybans");
      $myglasses->setMaterial("plastic");
      $myglasses->setLens("nearsighted");
      $myglasses->setShade("darker");
      echo "Owner: " . $myglasses->getOwner() . "<br>Brand: " . $myglasses->getBrand() . "<br>Lens Correction: " . $myglasses->getLens() . "<br>Material: " . $myglasses->getMaterial() . "<br>Tint: " . $myglasses->getShade(); 
      $image = 'A tree';
      echo "<br>Before: <b>" . $image . "</b>";
      $correctedImage = $myglasses->correct($image);
      echo "<br>After: <b>" . $correctedImage . "</b>";
    ?> 
    <h2>Associative Array</h2>
    <?php
      $myglasses = [
        'Owner'=>'Lee',
        'Brand'=>'Yaybeans',
        'Lens Correction'=>'nearsighted',
        'Material'=>'pastic',
        'Tint'=>'darker'
      ];
      foreach ($myglasses as $property => $value) {
        echo $property . ": " . $value ."<br>";
      }
    ?>
  </body>
</html>