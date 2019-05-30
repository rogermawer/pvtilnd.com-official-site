<?php


 include "scripts/constants.php";




            
$data=array();
$q=mysqli_query($con,"SELECT giver, receiver, points, comment, time FROM awarded_points ORDER BY id DESC LIMIT 5;");
if (!($q)){
    echo json_encode("error getting data");
}
else{
    while ($row=mysqli_fetch_object($q)){
    $data[]=$row;
    }
}
echo json_encode($data);
?>