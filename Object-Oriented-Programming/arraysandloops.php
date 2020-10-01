<html>
  <head>
    <title>OOP, Arrays, & Loops</title>
  </head>
  <body>
  <h1>OOP, Arrays, & Loops</h1>
    <?php
      include 'oop.php';
      $owners = ['Lee', 'Shaun', 'Nicholas', 'Evelyn', 'Justin', 'Joshua', 'Denise'];
      $glasses = [];
      foreach($owners as $key => $name) {
        $glass = new Sunglasses;
        $glass->setOwner($name);
        $glass->setBrand("Yaybans");
        $glass->setMaterial("plastic");
        $glass->setLens("nearsighted");
        $glass->setShade("darker");
        $glasses[] = $glass;
      }
      foreach($glasses as $key => $glass) {
        echo "<h2>Pair ".($key+1)."</h2>";
        $glass->setMaterial("titanium");
        echo "Owner: " . $glass->getOwner() . "<br>Brand: " . $glass->getBrand() . "<br>Lens Correction: " . $glass->getLens() . "<br>Material: " . $glass->getMaterial() . "<br>Tint: " . $glass->getShade(); 
        $image = 'A tree';
        echo "<br>Before: <b>" . $image . "</b>";
        $correctedImage = $glass->correct($image);
        echo "<br>After: <b>" . $correctedImage . "</b>";
      }

    ?> 
  </body>
</html>