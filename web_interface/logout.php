<?php
session_start(); // Start the session

// Unset all of the session variables
$_SESSION = [];

// Destroy the session
session_destroy();

// Optionally, redirect to a login page or home page
header("Location: index.php");
exit();
?>
