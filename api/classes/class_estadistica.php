<?php
require_once '../classes/conexion.php';

class Estadistica extends Conecction{
    private $documento;
    private $nombres;
    private $apellidos;
    private $fecha_venta;
    private $fecha_creacion;
    private $id_tipo_docu;
    private $nombre_almacen;
    private $nom_prenda;
    private $precio;
    private $talla;
    private $cantidad;
    private $valor_total_venta;
    private $nombre_pago;
    private $detalle_venta;
    private $id_venta_enca;
    private $id_prenda;



    public function __construct($documento = null, $nombres = null, $apellidos = null, $fecha_venta = null, $fecha_creacion = null, $id_tipo_docu = null, $nombre_almacen = null, $nom_prenda = null, $precio = null, $talla = null, $cantidad = null, $valor_total_venta = null, $nombre_pago = null, $detalle_venta = null, $id_venta_enca = null, $id_prenda = null)
    {
        parent::__construct();
        $this->documento = $documento;
        $this->nombres = $nombres;
        $this->apellidos = $apellidos;
        $this->fecha_venta = $fecha_venta;
        $this->fecha_creacion = $fecha_creacion;
        $this->id_tipo_docu = $id_tipo_docu;
        $this->nombre_almacen = $nombre_almacen;
        $this->nom_prenda = $nom_prenda;
        $this->precio = $precio;
        $this->talla = $talla;
        $this->cantidad = $cantidad;
        $this->valor_total_venta = $valor_total_venta;
        $this->nombre_pago = $nombre_pago;
        $this->detalle_venta = $detalle_venta;
        $this->id_venta_enca = $id_venta_enca;
        $this->id_prenda = $id_prenda;
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

    public function getFecha_venta(){
        return $this->fecha_venta;
    }

    public function setFecha_venta($fecha_venta){
        $this->fecha_venta = $fecha_venta;
    }

    public function getFecha_Creacion(){
        return $this->fecha_creacion;
    }

    public function setFecha_Creacion($fecha_creacion){
        $this->fecha_creacion = $fecha_creacion;
    }

    public function getId_tipo_docu(){
        return $this->id_tipo_docu;
    }

    public function setId_tipo_docu($id_tipo_docu){
        $this->id_tipo_docu = $id_tipo_docu;
    }

    public function getNom_almacen(){
        return $this->nombre_almacen;
    }

    public function setNom_almacen($nombre_almacen){
        $this->nombre_almacen = $nombre_almacen;
    }

    public function getNom_Prenda(){
        return $this->nom_prenda;
    }

    public function setNom_Prenda($nom_prenda){
        $this->nom_prenda = $nom_prenda;
    }

    public function getPrecio(){
        return $this->precio;
    }

    public function setPrecio($precio){
        $this->precio = $precio;
    }

    public function getTalla(){
        return $this->talla;
    }

    public function setTalla($talla){
        $this->talla = $talla;
    }

    public function getCantidad(){
        return $this->cantidad;
    }

    public function setCantidad($cantidad){
        $this->cantidad = $cantidad;
    }

    public function getValor_total_venta(){
        return $this->valor_total_venta;
    }

    public function setValor_total_venta($valor_total_venta){
        $this->valor_total_venta = $valor_total_venta;
    }

    public function getNom_Pago(){
        return $this->nombre_pago;
    }

    public function setNom_Pago($nombre_pago){
        $this->nombre_pago = $nombre_pago;
    }

    public function getDetalle_venta(){
        return $this->detalle_venta;
    }

    public function setDetalle_venta($detalle_venta){
        $this->detalle_venta = $detalle_venta;
    }

    public function getVenta_encabezado(){
        return $this->id_venta_enca;
    }

    public function setVenta_encabezado($id_venta_enca){
        $this->id_venta_enca = $id_venta_enca;
    }

    public function getId_prenda(){
        return $this->id_prenda;
    }

    public function setId_prenda($id_prenda){
        $this->id_prenda = $id_prenda;
    }

    public function getAllFactura(){
        try{
            $factura = [];
            $sql = 'SELECT venta_encabezado.id_venta_enca,fecha_venta,nombre_almacen,nom_prenda,precio,talla,cantidad,valor_total_venta, usuarios.documento ,nombres,apellidos ,
            nombre_pago
            FROM detalle_venta,venta_encabezado,usuarios,prendas,forma_pago,talla,almacen
            WHERE detalle_venta.id_prenda = prendas.id_prenda
            AND detalle_venta.id_venta_enca = venta_encabezado.id_venta_enca
            AND venta_encabezado.id_forma_pago = forma_pago.id_forma_pago
            AND venta_encabezado.documento = usuarios.documento
            AND prendas.id_almacen = almacen.id_almacen
            AND prendas.id_talla = talla.id_talla';
            $query = mysqli_prepare($this->connection, $sql);
            $ok = mysqli_stmt_execute($query);
            $ok = mysqli_stmt_bind_result($query,
            $this->id_venta_enca,
            $this->fecha_venta, 
            $this->nombre_almacen, 
            $this->nombres,
            $this->apellidos,
            $this->nom_prenda,  
            $this->precio,
            $this->talla,  
            $this->cantidad,
            $this->valor_total_venta,
            $this->nombre_pago,);
            while(mysqli_stmt_fetch($query)){
                array_push($factura,['id_venta_enca'=>$this->id_venta_enca, 'fecha_venta' =>$this->fecha_venta, 'nom_prenda' => $this->nom_prenda, 'precio' => $this->precio, 'talla' => $this->talla, 'cantidad' => $this->cantidad, 'valor_total_venta' => $this->valor_total_venta, 'documento' => $this->documento, 'nombres' => $this->nombres, 'apellidos' => $this->apellidos, 'nombre_pago' => $this->nombre_pago]);
            }
            mysqli_stmt_close($query);
            return $factura;
        }
        catch(Throwable $exe){
            echo $exe;
            return false;
        }
    }

    public function getAllFactura_fecha(){
        try{
            $factura_fecha = [];
            $sql = 'SELECT fecha_venta,nombre_almacen,nom_prenda,precio,talla,cantidad,valor_total_venta,nombres,apellidos,usuarios.documento, nombre_pago 
                    FROM detalle_venta,venta_encabezado,usuarios,prendas,forma_pago,talla,almacen 
                    WHERE detalle_venta.id_prenda = prendas.id_prenda 
                    AND detalle_venta.id_venta_enca = venta_encabezado.id_venta_enca 
                    AND venta_encabezado.id_forma_pago = forma_pago.id_forma_pago 
                    AND venta_encabezado.documento = usuarios.documento 
                    AND prendas.id_almacen = almacen.id_almacen 
                    AND prendas.id_talla = talla.id_talla 
                    AND fecha_venta BETWEEN 2021-03-15 AND curdate()';
            $query = mysqli_prepare($this->connection, $sql);
            $ok = mysqli_stmt_execute($query);
            $ok = mysqli_stmt_bind_result($query,
            $this->fecha_venta,
            $this->nombre_almacen, 
            $this->nom_prenda, 
            $this->precio,
            $this->talla,
            $this->cantidad,  
            $this->valor_total_venta,
            $this->nombres,  
            $this->apellidos,
            $this->documento,
            $this->nombre_pago);
            while(mysqli_stmt_fetch($query)){
                array_push($factura_fecha,['fecha_venta'=>$this->fecha_venta, 'nombre_almacen' =>$this->nombre_almacen, 'nom_prenda' => $this->nom_prenda, 'precio' => $this->precio, 'talla' => $this->talla, 'cantidad' => $this->cantidad, 'valor_total_venta' => $this->valor_total_venta, 'nombres' => $this->nombres, 'apellidos' => $this->apellidos, 'documento' =>$this->documento ,'nombre_pago' => $this->nombre_pago]);
            }
            mysqli_stmt_close($query);
            return $factura_fecha;
        }
        catch(Throwable $exe){
            echo $exe;
            return false;
        }
    }

    public function getCantidad_prendas_vendidas(){
        try{
            $Prendas_vendidas = [];
            $sql = 'SELECT prendas.id_prenda,nom_prenda, SUM(cantidad) AS cantidad_prendas_Vendidas
                    FROM prendas,detalle_venta WHERE detalle_venta.id_prenda = prendas.id_prenda
                    GROUP BY id_prenda
            ';
            $query = mysqli_prepare($this->connection, $sql);
            $ok = mysqli_stmt_execute($query);
            $ok = mysqli_stmt_bind_result($query,
            $this->id_prenda,
            $this->nom_prenda, 
            $this->cantidad, 
            );
            while(mysqli_stmt_fetch($query)){
                array_push($Prendas_vendidas,['id_prenda'=>$this->id_prenda, 'nom_prenda' =>$this->nom_prenda, 'cantidad' => $this->cantidad]);
            }
            mysqli_stmt_close($query);
            return $Prendas_vendidas;
        }
        catch(Throwable $exe){
            echo $exe;
            return false;
        }
    }
    public function  getDias_prendas_vendidas(){
        try{
            $Dias_Prendas_vendidas = [];
            $sql = 'SELECT nom_prenda, timestampdiff(DAY, fecha_creacion, fecha_venta) AS Dias_Ventas 
                    FROM prendas,detalle_venta,venta_encabezado 
                    WHERE detalle_venta.id_prenda = prendas.id_prenda 
                    AND detalle_venta.id_venta_enca = venta_encabezado.id_venta_enca 
            ';
            $query = mysqli_prepare($this->connection, $sql);
            $ok = mysqli_stmt_execute($query);
            $ok = mysqli_stmt_bind_result($query,
            $this->id_prenda,
            $this->nom_prenda, 
            $this->cantidad, 
            );
            while(mysqli_stmt_fetch($query)){
                array_push($Dias_Prendas_vendidas,['id_prenda'=>$this->id_prenda, 'nom_prenda' =>$this->nom_prenda, 'cantidad' => $this->cantidad]);
            }
            mysqli_stmt_close($query);
            return $Dias_Prendas_vendidas;
        }
        catch(Throwable $exe){
            echo $exe;
            return false;
        }
    }
}