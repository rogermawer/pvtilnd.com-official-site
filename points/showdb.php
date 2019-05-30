<?php


 include "scripts/constants.php";


$data=array();
$q=mysqli_query($con,"select first_name, last_name, user_name, points from `members`");
if (!($q)){
    echo json_encode("error getting data");
}
else{
    while ($row=mysqli_fetch_object($q)){
    $data[]=$row;
    }
}
echo json_encode($data, JSON_NUMERIC_CHECK);
?>

