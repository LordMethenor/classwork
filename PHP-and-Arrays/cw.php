<html>
  <head>
    <title>Classwork</title>
  </head>
  <body>
    <h1>Arrays in PHP</h1>
    <p>
      <h2>Multiplication Table</h2>
      <table border = '1'>
        <?php
          $timetable = [];
          for ($i = 1; $i < 13; $i++)
          {
            $row = [];
            for ($j = 1; $j < 13; $j++)
            {
              $row[] = $i*$j;
            }
            array_push($timetable, $row);
          }

          foreach($timetable as $rowkey => $rowvalue)
          {
            echo("<tr>");
            foreach($rowvalue as $key => $value)
            {
              $bolded = [null,null];
              if ($key == 0 || $rowkey == 0)
              {
                $bolded[0] = '<b>';
                $bolded[1] = '</b>';
              }
              echo("<td>" . $bolded[0] . $value .  $bolded[1] . "</td>");
            }
            echo("</tr>");
          }

          //print_r($data);
        ?>
      </table>
    </p>
  </body>
</html>