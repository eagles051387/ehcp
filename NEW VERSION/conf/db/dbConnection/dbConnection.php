<?php

/*PDO Tutorial - http://wiki.hashphp.org/PDO_Tutorial_for_MySQL_Developers */

//see config.php file


//Variables for PDO connection. Change as necessary for ones own setup
$host = localhost;
$dbName = test;
$encoding = utf8;
$userName = CHANGE ME;
$password = CHANGE ME;

//Variable for error handling
$error = die(mysql_error());

//Create new PDO connection to database with error handling
$db = new PDO(mysql: $host; $dbName; $encoding; $userName; $password);`

//DB connection error handling
$error;


//$db = new PDO('mysql:host=localhost;dbname=testdb;charset=utf8', 'username', 'password');

?>