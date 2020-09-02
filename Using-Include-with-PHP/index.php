<html>
  <head>
    <title>Home</title>
  </head>
  <body>
    <table border = '1' width = '100%' height = '100%'>
    <tr>
      <td valign="center"><button>Navigation</button></td>
      <td><h1>Sample Website</h1></td>
    </tr>
    <tr>
      <td>
        <p align = 'left'>
          <?php include "pagemap.php"?>       
        </p>
      </td>
      <td>
        <?php include "pagecontent.php"?>       
      </td>
    <tr>
      <td>
        <p>
          Site Navigation
          <?php include "sitemap.php"?>
        </p>
      </td>
      <td>
        <table>
          <tr>
            <?php include "context.php"?>       
          </tr>
          <tr>
            <?php include "pagenav.php"?></p>
          </tr>
        </table>
      </td>
    </tr>
    </table>
  </body>
</html>