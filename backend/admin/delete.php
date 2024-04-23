<?php
$id = $_GET["id"];
if($id){
include("../db.php");
$sqlDelete = "DELETE FROM blogs WHERE id = $id";
if(mysqli_query($conn, $sqlDelete)){
    session_start();
    $_SESSION["delete"] = "Blog deleted successfully";
    header("Location:index.php");
}else{
    die("Something is not right. Data is not deleted");
}
}else{
    echo "Blog not found";
}
?>