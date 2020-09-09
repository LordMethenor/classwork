<html>
  <head>
    <title>PHP Test</title>
  </head>
  <body>
    <h1>Warmup</h1>
    <p><?php include "wu.php"; ?></p>
    <h1>Classwork</h1>
    <p>    
      <table border = '1'>
        <tr>
          <td></td>
          <td>literal</td>
          <td>add to string</td>
          <td>concat to string</td>
          <td>add to boolean</td>
          <td>concat to boolean</td>
          <td>add to float</td>
          <td>concat to float</td>
          <td>add to integer</td>
          <td>concat to integer</td>
        </tr>
        <tr>
          <td>string</td>
          <td><?php echo '1' ?></td>
          <td><?php echo '1' + '1' ?></td>
          <td><?php echo '1' . '1' ?></td>
          <td><?php echo '1' + true ?></td>
          <td><?php echo '1' . true ?></td>
          <td><?php echo '1' + 1.1 ?></td>
          <td><?php echo '1' . 1.1 ?></td>
          <td><?php echo '1' + 1 ?></td>
          <td><?php echo '1' . 1 ?></td>
        </tr>
        <tr>
          <td>boolean</td>
          <td><?php echo true ?></td>
          <td><?php echo true + '1' ?></td>
          <td><?php echo true . '1' ?></td>
          <td><?php echo true + true ?></td>
          <td><?php echo true . true ?></td>
          <td><?php echo true + 1.1 ?></td>
          <td><?php echo true . 1.1 ?></td>
          <td><?php echo true + 1 ?></td>
          <td><?php echo true . 1 ?></td>
        </tr>
                <tr>
          <td>float</td>
          <td><?php echo 1.1 ?></td>
          <td><?php echo 1.1 + '1' ?></td>
          <td><?php echo 1.1 . '1' ?></td>
          <td><?php echo 1.1 + true ?></td>
          <td><?php echo 1.1 . true ?></td>
          <td><?php echo 1.1 + 1.1 ?></td>
          <td><?php echo 1.1 . 1.1 ?></td>
          <td><?php echo 1.1 + 1 ?></td>
          <td><?php echo 1.1 . 1 ?></td>
        </tr>
                <tr>
          <td>string</td>
          <td><?php echo 1 ?></td>
          <td><?php echo 1 + '1' ?></td>
          <td><?php echo 1 . '1' ?></td>
          <td><?php echo 1 + true ?></td>
          <td><?php echo 1 . true ?></td>
          <td><?php echo 1 + 1.1 ?></td>
          <td><?php echo 1 . 1.1 ?></td>
          <td><?php echo 1 + 1 ?></td>
          <td><?php echo 1 . 1 ?></td>
        </tr>
      <table>
    </p>
    <h1>Exit Ticket</h1>
      <ol>
        <li><?php echo str_repeat("Hello World!", 10); ?></li>
        <li><?php echo str_shuffle("Hello World!"); ?></li>
        <li><?php echo intval(true); ?></li>
        <li><?php echo chr(90); ?></li>
      </ol>
  </body>
</html>