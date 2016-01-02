<?php 
//include('config.php');
//
//$db = mysqli_connect ($db_host, $db_user, $db_password, $db_name) OR die ('Could not connect to MySQL: ' . mysqli_connect_error());
//
//$name = mysql_real_escape_string($_POST['name']);
//
//$email = mysql_real_escape_string($_POST['email']);



$json = array(
    "status" => "success",
    "name" => $_POST["name"],
    "email" => $_POST["email"]
);

$output = json_encode($json);

echo $output;






?>