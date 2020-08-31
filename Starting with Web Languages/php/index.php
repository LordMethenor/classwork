<?php
  $title = 'Languages';
  $header = 'header.jpg';
  $heading = 'Starting with Web Languages';
  $links = '<ul>
    <li><a href="html.php">HTML</a></li>
    <li><a href="css.php">CSS</a></li>
    <li><a href="javascript.php">Javascript</a></li>
    <li><a href="php.php">PHP</a></li>
  </ul>';
?>
<html>
  <head>
    <title><?php echo $title; ?></title>
  </head>
  <body>
    <img src=<?php echo $header; ?> alt="header image">
    <h1> <?php echo $heading; ?> </h1>
    <?php echo $links; ?>
  </body>
</html>