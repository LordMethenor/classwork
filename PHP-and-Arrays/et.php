<html>
  <head>
    <title>Exit Ticket</title>
  </head>
  <body>
    <h1>Associative Arrays</h1>
    <p>
      <h2>Conjugations</h2>
      <table border = '1'>
        <?php
          $verbs_table = [['past'=>'<b>Past</b>', 'gerund'=>'<b>Gerund</b>', 'present'=>'<b>Present</b>']];
          $verbs = ['talk','borrow','brush'];
          foreach($verbs as $index => $verb)
          {
            array_push($verbs_table, ['present'=>$verb,'past'=>$verb . 'ed','gerund'=>$verb . 'ing']);
          }
          foreach($verbs_table as $rowkey => $row)
          {
            echo("
              <tr>
                <td>" . $row['present'] . "</td>
                <td>" . $row['past'] . "</td>
                <td>" . $row['gerund'] . "</td>
              <tr>
            ");
          }

          //print_r($data);
        ?>
      </table>
    </p>
  </body>
</html>