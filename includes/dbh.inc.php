<?php

$dsn = "mysql:host=localhost;dbname=warehouse";
$dbuser = "root";
$dbpass = "";

try{
    $pdo = new PDO($dsn, $dbuser, $dbpass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();   
}
