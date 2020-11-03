<?php
$obj= mysqli_connect('localhost','root','root');
$sql= "set names utf8";
$return= mysqli_query($obj,$sql);
$sql= "use starbucks";
$return= mysqli_query($obj,$sql);
?>