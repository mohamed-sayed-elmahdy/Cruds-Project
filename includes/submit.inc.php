<?php

if($_SERVER["REQUEST_METHOD"] == "POST"){

    $title = $_POST["title"];
    $price = $_POST["price"];
    $taxes = $_POST["taxes"];
    $ads = $_POST["ads"];
    $discount = $_POST["discount"];
    $amount = $_POST["amount"];
    $category = $_POST["category"];

    try{

        require_once("dbh.inc.php");

        $query = "INSERT INTO products (title, price, taxes, ads, discount, amount, category) VALUES (?, ?, ?, ?, ?, ?, ?)";
        $stmt = $pdo->prepare($query);
        $stmt->execute([$title, $price, $taxes, $ads, $discount, $amount, $category]);
        $pdo = null;

        header("Location: ../index.php");
    } catch(PDOException $e) {
        die("Query failed: " . $e->getMessage());
    }
} else {
    header("Location: ../index.php");
}