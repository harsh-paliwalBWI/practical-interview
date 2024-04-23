<?php

$host = 'localhost';
$username = 'cms';
$password = 'passwordforcms';
$database = 'cms';


$conn = new mysqli($host, $username, $password, $database);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
