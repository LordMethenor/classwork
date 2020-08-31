<?php
  $langName = "CSS";
  $langAbout = "A style sheet language";
  $langYear = "1996";
  $langSample = '<image src="CSS.jpg">';
?>
<html>
  <head>
    <title><?php echo $langName; ?></title>
  </head>
  <body>
    <h1><?php echo $langName; ?></h1>
    <p>
      Name of Language: 
      <?php echo $langName; ?>
    <p>
      About this language: 
      <?php echo $langAbout; ?>
    <p>
      When was it created: 
      <?php echo $langYear; ?>
    <p>
      Sample code: 
      <br><?php echo $langSample; ?>
    <p>
      <a href="index.php">Go Home</a>
  </body>
</html>