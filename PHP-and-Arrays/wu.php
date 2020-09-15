<html>
  <head>
    <title>Warmup</title>
  </head>
  <body>
    <h1>Null & Var_Dump</h1>
    <p><?php
      echo("Var dump of variable <b>$</b><b>name");
      echo("</b><br>Not defined: <b>");
      var_dump($name);
      echo("</b><br>Defined as null: <b>");
      $name = null;
      var_dump($name);
      echo("</b><br>Redefined as alex: <b>");
      $name = 'alex';
      var_dump($name);
      echo("</b><br>unset: <b>");
      unset($name);
      var_dump($name)
    ?></p>
  </body>
</html>