<?php
    $servername = "localhost";
    $username = "pvtilnd_roger";
    $password = "B-9T558B";
    $DBname = "pvtilnd_points";
    
 $con = mysqli_connect("$servername","$username","$password","$DBname") or die ("could not connect database");

if (!$con){
    die (json_encode("could not connect database"));
}

json_encode("connection successful");

?>
