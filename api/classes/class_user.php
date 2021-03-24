<?php
require_once '../classes/conexion.php';

class Usuario extends Conecction{
    
    private $documento;
    private $nombres;
    private $apellidos;
    private $id_tipo_docu;
    private $id_tipo_usu;
    private $telefono;
    private $correo;
    private $password;

    public function __construct($documento = null, $nombres = null, $apellidos = null, $id_tipo_docu = null, $id_tipo_usu = null, $telefono = null, $correo = null, $password = null)
    {
        parent::__construct();
        $this->$documento = $documento;
        $this->$nombres = $nombres;
        $this->$apellidos = $apellidos;
        $this->$id_tipo_docu = $id_tipo_docu;
        $this->$id_tipo_usu = $id_tipo_usu;
        $this->$telefono = $telefono;
        $this->$correo = $correo;
        $this->password = $password;
    }

    public function getDocumento(){
        return $this->documento;
    }

    public function setDocumento($documento){
        $this->documento = $documento;
    }

    public function getNombres(){
        return $this->nombres;
    }

    public function setNombres($nombres){
        $this->nombres = $nombres;
    }

    public function getApellidos(){
        return $this->apellidos;
    }

    public function setApellidos($apellidos){
        $this->apellidos = $apellidos;
    }

    public function getId_tipo_docu(){
        return $this->id_tipo_docu;
    }

    public function setId_tipo_docu($id_tipo_docu){
        $this->id_tipo_docu = $id_tipo_docu;
    }

    public function getId_tipo_usu(){
        return $this->id_tipo_usu;
    }

    public function setId_tipo_usu($id_tipo_usu){
        $this->id_tipo_usu = $id_tipo_usu;
    }

    public function getTelefono(){
        return $this->telefono;
    }

    public function setTelefono($telefono){
        $this->telefono = $telefono;
    }

    public function getCorreo(){
        return $this->correo;
    }

    public function setCorreo($correo){
        $this->correo = $correo;
    }

    public function addUser(){
        try{
            $sql = 'INSERT INTO usuarios (documento, id_tipo_docu, id_tipo_usu, nombres, apellidos, telefono, correo) VALUES (?,?,?,?,?,?,?)';
            $query = mysqli_prepare($this->connection, $sql);
            $ok = mysqli_stmt_bind_param($query,'iiissis',$this->documento, $this->id_tipo_docu, $this->id_tipo_usu, $this->nombres, $this->apellidos, $this->telefono, $this->correo);
            $ok = mysqli_stmt_execute($query);
            mysqli_stmt_close($query);
            return true;
        }
        catch(Throwable $except){
            echo $except;
            return false;
        }
    }
    
    public function getAllUsers(){
        try{
            $users = [];
            $sql = 'SELECT documento, usuarios.id_tipo_docu , usuarios.id_tipo_usu , nombres , apellidos , correo ,telefono, tipo_usuario.nom_tipo_usu , tipo_documento.nom_tipo_docu from usuarios inner join tipo_usuario on usuarios.id_tipo_usu = tipo_usuario.id_tipo_usu inner join tipo_documento on usuarios.id_tipo_docu = tipo_documento.id_tipo_docu';
            $query = mysqli_prepare($this->connection, $sql);
            $ok = mysqli_stmt_execute($query);
            $ok = mysqli_stmt_bind_result($query,$this->documento,
            $this->id_tipo_docu, 
            $this->id_tipo_usu, 
            $this->nombres, 
            $this->correo, 
            $this->apellidos,
            $this->telefono, 
            $nom_tipo_usua, 
            $nom_tip_docu
            );
            while(mysqli_stmt_fetch($query)){
                array_push($users,['documento'=>$this->documento,
                'id_tipo_docu' => $this->id_tipo_docu,
                'id_tipo_usu' => $this->id_tipo_usu, 
                'nombres' =>$this->nombres, 
                'apellidos' => $this->getApellidos(), 
                'correo' => $this->correo, 
                'telefono' => $this->telefono,  
                'nom_tip_usua' => $nom_tipo_usua,
                'nom_tip_docu' => $nom_tip_docu
                ]);
            }
            mysqli_stmt_close($query);
            return $users;
        }
        catch(Throwable $exe){
            echo $exe;
            return false;
        }
    }

    public function updateUser(){
        try{
            $sql = "UPDATE usuarios set nombres = ? , apellidos = ? , telefono = ?, correo = ?, id_tipo_docu = ?, id_tipo_usu = ?  where usuarios.documento = ?";
            $query = mysqli_prepare($this->connection , $sql);
            $ok = mysqli_stmt_bind_param($query , 'ssisii', $this->nombres , $this->apellidos, $this->telefono, $this->correo, $this->id_tipo_docu, $this->id_tipo_usu);
            $ok = mysqli_stmt_execute($query);
            mysqli_stmt_close($query);
            return true;
        }catch(Throwable $th){
            echo "El error esta en ". $th;
        }
    }

    public function deleteUser(){
        try{
            $sql = "DELETE from usuarios where documento = ?";
            $query = mysqli_prepare($this->connection, $sql);
            $ok = mysqli_stmt_bind_param($query , 'i' , $this->documento);
            $ok = mysqli_stmt_execute($query);
            mysqli_stmt_close($query);
            return true;
        }catch(Throwable $th){
            echo "El error esta en: " . $th;
        }
    }

    public function getUser(){
        try {
            $users = [];
            $sql = 'SELECT * FROM usuarios WHERE documento = ?';
            $query = mysqli_prepare($this->connection, $sql);
            $ok = mysqli_stmt_execute($query);
            $ok = mysqli_stmt_bind_result($query,$this->documento, $this->nombres, $this->apellidos, $this->id_tipo_docu, $this->id_tipo_usu, $this->telefono, $this->correo);
            while(mysqli_stmt_fetch($query)){
                array_push($users,['documento'=>$this->documento, 'nombres' =>$this->nombres, 'apellidos' => $this->apellidos, 'id_tipo_docu' => $this->id_tipo_docu, 'id_tipo_usu' => $this->id_tipo_usu, 'telefono' => $this->telefono, 'correo' => $this->correo]);
            }
            mysqli_stmt_close($query);
            return true;
        }catch (Throwable $th) {
            echo "El error esta en" . $th;
            return false;
        }
        return [];
    }
    public function authenticate($documento , $password){
        try{
            $user = [];
            $sql = "SELECT * from usuarios where documento = ? and password = ?";
            $query = mysqli_prepare($this->connection , $sql);
            $ok = mysqli_stmt_bind_param($query , 'is' , $this->documento , $this->password);
            $ok = mysqli_stmt_execute($query);
            $ok = mysqli_stmt_bind_result($query , $this->documento , $this->id_tipo_docu);
        }catch(Throwable $ex){
            echo "el error esta en $ex";
            return false;
        }
    }
} 