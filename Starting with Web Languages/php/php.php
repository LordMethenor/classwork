<?php
  $langName = "PHP";
  $langAbout = "A server side scripting language";
  $langYear = "1995";
  $langSample = '<image src="php.png">';
?>
<html>
  <head>
    <title><?php echo $langName; ?></title>
  </head>
  <body>
    <h1> The Language Resource </h1>
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