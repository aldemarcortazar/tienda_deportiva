<?php
require_once "../classes/class_estadistica.php";
header('Content-Type: application/json');
if( isset($_POST)){

    $domain = $_SERVER['HTTP_HOST'];
    $to = "anino79@misena.edu.co";
    $subject = "ventas retrasadas de mas de 10 dias la tienda de ropa LUAL";
    $estadisticas = new Estadistica();
    $datos = $estadisticas->getDias_no_vendidas();
    $messague = '<table>'. 
        '<tr>'.
            '<td>' . "Nombre prenda" . '</td>' .  
            '<td>' . "dias sin vender" . '</td>'
        .'</tr>';
        foreach ($datos as $prenda) {
            '<tr>'.
            '<td>' . $prenda['nom_prenda'] . '</td>' .  
            '<td>' . $prenda['Dias_Sin_vender'] . '</td>'
            .'</tr>';
        } 
      '</table>';

    $headers = "MIME-Version: 1.0\r\n" . "Content-Type: text/html; charset=utf-8\r\n" . 
    "From: envio automatico no responder <no-reply@gmail.com>";
    $send_mail=  mail($to , $subject,$messague,$headers);
    $res;
    if( $send_mail ){
        $res = array(
            "err" => false ,
            "status" => http_response_code(200),
            "status_text" => "mensaje enviado con exito",
        );
    }else {
        $res = array(
            "err" => true,
            "status" => http_response_code(500),
            "statusText" => "no se pudo enviar el mensaje"
        );
    }

    echo json_encode($res);
}