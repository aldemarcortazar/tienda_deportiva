<?php

require_once './../classes/class_user.php';
header('Content-Type: application/json');
switch($_SERVER['REQUEST_METHOD']){
    case 'GET':
        // Aca hacemos la peticion para obtener
        if(isset($_GET['document'])){
            $documento = $_GET['document'];
            // Nos traemos uno segun ese documento
            $usuario = new Usuario($documento);
            $usuario = $usuario->getUser();
            $res;
            if( count($usuario) !== 0 ){
                $res = array(
                    'err' => false,
                    'status' => http_response_code(200),
                    'statusText' => 'Exito si se encontro el usuario',
                    'data' => $usuario
                );
            }else{
                $res = array(
                    'err' => false,
                    'status' => http_response_code(200),
                    'statusText' => 'No se encontro el usuario',
                    'data' => $usuario 
                );
            }
            echo json_encode($res);
        }elseif(isset($_GET['documento']) && isset($_GET['password'])){
            $documento = $_GET['documento'];
            $password = $_GET['password'];
            $usuario = new Usuario($documento, $password);
            $user = $usuario->authenticate($documento, $password);
            $res ;
            if(count($user) !== 0){
                $res = array(
                    'err' => false,
                    'status' => http_response_code(200),
                    'statusText' => "usuario encontrado con exito",
                    'data' => $user
                );
            }else{
                $res = array (
                    'err' => true,
                    'status' => http_response_code(200),
                    'statusText' => 'no se encontro el usuario',
                    'data' => []
                );
            }
            echo json_encode($res);
        }elseif(!isset($_GET['documento'])){
            // Nos traemos todos
            $usuarios =  new Usuario();
            $users = $usuarios->getAllUsers();
            if( count($users) !== 0 ){
                $res = array(
                    'err' => false,
                    'status' => http_response_code(200),
                    'statusText' => 'Usuarios encontrados',
                    'data' => $users
                );
            }else{
                $res = array(
                    'err' =>  false,
                    'status' => http_response_code(200),
                    'statusText' => 'No se encontraron usuarios',
                    'data' => $users
                );
            }
            echo json_encode($res);
        }
        break;
    case 'POST':
        // Para agregar usuarios   
        $_POST = json_decode(file_get_contents('php://input'), true);
        $user = new Usuario($_POST['documento'],$_POST['password'], $_POST['nombres'], $_POST['apellidos'] , $_POST['id_tip_docu'], $_POST['id_tip_usua'] , $_POST['telefono'] , $_POST['correo']);
        $res ;
        if($user->addUser()){
            $res = array(
                'err' => false,
                'status' => http_response_code(201),
                'statusText' => 'Usuario agregado satisfactoriamente'
            );
        }else{
            $res = array(
                'err' => true,
                'status' => http_response_code(500),
                'statusText' => 'No se pudo agregar el registro'
            );
        }   
        echo json_encode($res);
        break;
    case 'PUT': 
        // Put es para actualizar
        $_PUT = json_decode(file_get_contents('php://input'), true);
        $user = new Usuario($_PUT['documento'], $_PUT['nombres'] , $_PUT['apellidos'] , $_PUT['id_tip_docu'] , $_PUT['id_tip_usua'] , $_PUT['telefono'] , $_POST['correo']);
        $res ;
        if( $user->updateUser() ){
            $res = array(
                'err' => false,
                'status' => http_response_code(200),
                'statusText' => 'Se modifico tu registro con exito'
            );
        }else{
            $res = array(
                'err' => true,
                'status' => http_response_code(500),
                'statusText' => 'No se puede modificar el usuario',
            );
        }
        echo json_encode($res);  
        break;
    case 'DELETE':
        // Delete es para borrar
        $_DELETE = json_decode(file_get_contents('php://input') , true);
        $user = new Usuario($_DELETE['documento']);
        $res;
        if($user->deleteUser()){
            $res = array(
                'err' => false,
                'status' => http_response_code(200),
                'statusText' => 'Se elimino el usuario'
            );
        }else{
            $res = array(
                'err' => true,
                'status' => http_response_code(500),
                'statusText' => 'No se pudo eliminar el usuario'
                );
        }
        echo json_encode($res);
        break;
}