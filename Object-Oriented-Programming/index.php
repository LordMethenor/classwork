<html>
  <head>
    <title>Object Oriented Programming</title>
  </head>
  <body>
  <h1>Even More OOP</h1>
  <h2>WU: Modifying Modifiers with Getters & Setters and CW: OOP & Inheritance</h2>
    <?php
      include 'wucw.php';
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
  </body>
</html>