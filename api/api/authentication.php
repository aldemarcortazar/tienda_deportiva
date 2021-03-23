<?php
require_once './../classes/conexion.php';
header('Content-Type: application/json');
switch($_SERVER){
    case 'GET':
        $username = $_GET["username"];
        $paswword = $_GET["pasword"];
        
    break;
}