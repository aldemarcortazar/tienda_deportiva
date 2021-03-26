<?php
require_once './api/classes/class_estadistica.php';
header('Content-Type: application/json');
function res( $array)
{
    $res = null;
    if( count($array) != 0 ){
        $res = array(
            'err' => false,
            'status' => http_response_code(200) ,
            'statusText' => 'data encontrada con exito',
            'data' => $array
        );
    }else{
        $res = array(
            'err' => true,
            'status' => http_response_code(200),
            'statusText' => 'data no encontrada',
            'data' => $array
        );
    }

    return $array;
}
switch($_SERVER['REQUEST_METHOD']){
    case 'GET':
        if(isset($_GET['all_facture'])){
            $facture = new Estadistica();
            $facturas = $facture->getAllFactura();
        
            echo json_encode(res($facturas));
        }else if($_GET['facturas_fechas']){
            $facture = new Estadistica();
            $facturas = $facture->getAllFactura_fecha();
            echo json_encode(res($facturas));
        }else if(isset($_GET['cantidad_prendas_vendidas'])){
            $facture = new Estadistica();
            $facturas = $facture->getCantidad_prendas_vendidas();
            echo json_encode(res($facturas));
        }else if($_GET['dias_prendas_vendidas']){
            $facture = new Estadistica();
            $facturas = $facture->getDias_prendas_vendidas();
            echo json_encode(res($facturas));
        }
        break;
    case 'POST':
        break;
}
