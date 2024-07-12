<?php

require_once "includes/dbh.inc.php";

try {
    if (isset($_GET['delete'])) {
        $id = $_GET['delete'];

        $query = "DELETE FROM products WHERE id=?";
        $stmt = $pdo->prepare($query);
        $stmt->execute([$id]);

        header("Location: index.php");
        exit;
    }

    $query = "SELECT * FROM products";
    $stmt = $pdo->prepare($query);
    $stmt->execute();

    $products = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $pdo = null;

} catch (PDOException $e) {
    die("Query failed: " . $e->getMessage());
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Admin</title>
  <link rel="stylesheet" href="style.css">
</head>

<body>
  <div class="crud">
    <header>
      <h1>My Store</h1>
      <p>Administrator Management System</p>
    </header>
<?php echo $products[0]['category']; ?>

    <form action="includes/submit.inc.php" method="POST" class="inputs">
      <input type="text" name="title" id="title" placeholder="Title">
      <div class="price">
        <input onkeyup="getTotal()" type="number" name="price" id="price" placeholder="Price">
        <input onkeyup="getTotal()" type="number" name="taxes" id="taxes" placeholder="Taxes">
        <input onkeyup="getTotal()" type="number" name="ads" id="ads" placeholder="Ads">
        <input onkeyup="getTotal()" type="number" name="discount" id="discount" placeholder="Discount">
        <span id="total">Total: <span id="sum">0</span>$</span>
      </div >
      <input type="number" name="amount" id="amount" placeholder="Amount">
      <input type="text" name="category" id="category" placeholder="Category">
      <button type="submit" id="submit" name="submit">Submit</button>
    </form>

      </div>
      <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Price</th>
              <th>Taxes</th>
              <th>Ads</th>
              <th>Discount</th>
              <th>Amount</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <?php foreach ($products as $product) : ?>
              <tr>
                <td><?php echo $product['id']; ?></td>
                <td><?php echo $product['title']; ?></td>
                <td><?php echo $product['price']; ?></td>
                <td><?php echo $product['taxes']; ?></td>
                <td><?php echo $product['ads']; ?></td>
                <td><?php echo $product['discount']; ?></td>
                <td><?php echo $product['amount']; ?></td>
                <td><?php echo $product['category']; ?></td>
                <td>
                  <form method="get" action="<?php echo $_SERVER['PHP_SELF']; ?>">
                    <input type="hidden" name="delete" value="<?php echo $product['id']; ?>">
                    <button type="submit" class="btn btn-danger">Delete</button>
                  </form>
                </td>
              </tr>
            <?php endforeach; ?>
          </tbody>
      </table>

    </div>
  </div>
  <script src="main.js"></script>
</body>

</html>