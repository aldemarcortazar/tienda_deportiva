

const FormCompra = () => {
    const $divForm = document.createElement('div');
    $divForm.classList.add("div-form");
    const $form = document.createElement("form");
    $form.id = "formulario";
    $form.innerHTML = `
    <link rel="stylesheet" href="./app/components/compras/compras.css">
    <!-- Grupo: tip docu -->
    <div class="formulario__compra" >
        <label for="tip_usua" class="formulario__label">  Almacen </label>
        <div class="formulario__compra-input">
            <select id="tip_almacen" name="tip_almacen">
                <option value="1"> Futbol Sport </option>
                <option value="2"> Planeta Sport </option>
            </select>
            <i class="formulario__validacion-estado fas fa-times-circle"></i>
        </div>
    </div>


    <div class="formulario__compra" >
        <label for="tip_usua" class="formulario__label">  Tipo Prenda </label>
        <div class="formulario__compra-input">
            <select id="tip_prenda" name="tip_prenda">
                <option value="1"> Sujetador </option>
                <option value="2"> Sudadera </option>
                <option value="3"> Leggins </option>
                <option value="4"> Camiseta </option>
                <option value="5"> Chaleco </option>
                <option value="6"> Pantalones </option>
                <option value="7"> Zapatillas </option>
                <option value="8"> Pantalonetas </option>
                <option value="9"> Polo </option>
                <option value="10"> Esqueleto </option>
            </select>
            <i class="formulario__validacion-estado fas fa-times-circle"></i>
        </div>
    </div>

    <div class="formulario__compra" >
        <label for="tip_usua" class="formulario__label">  Genero </label>
        <div class="formulario__compra-input">
            <select id="tip_gene" name="tip_gene">
                <option value="1"> Hombre </option>
                <option value="2"> Mujer </option>
                <option value="3"> Niños </option>
            </select>
            <i class="formulario__validacion-estado fas fa-times-circle"></i>
        </div>
    </div>

    <div class="formulario__compra" >
        <label for="tip_usua" class="formulario__label">  Talla </label>
        <div class="formulario__compra-input">
            <select id="talla" name="talla">
                <option value="1"> S </option>
                <option value="2"> XL </option>
                <option value="3"> M </option>
                <option value="4"> XS </option>
                <option value="5"> L </option>
            </select>
            <i class="formulario__validacion-estado fas fa-times-circle"></i>
        </div>
    </div>

    <div class="formulario__compra" >
        <label for="tip_usua" class="formulario__label">  Tipo Deporte </label>
        <div class="formulario__compra-input">
            <select id="tip_depor" name="tip_depor">
                <option value="1"> Ciclismo </option>
                <option value="2"> Futbol </option>
                <option value="3"> Tennis </option>
                <option value="4"> Voleibol </option>
                <option value="5"> Baloncesto </option>
                <option value="6"> Beisbol </option>
            </select>
            <i class="formulario__validacion-estado fas fa-times-circle"></i>
        </div>
    </div>


    
    <div class="formulario__compra" id="grupo__prenda">
        <label for="correo" class="formulario__label">Nombre Prenda</label>
        <div class="formulario__compra-input">
            <input type="text" class="formulario__input" name="nom_prenda" id="prenda">
            <i class="formulario__validacion-estado fas fa-times-circle"></i>
        </div>
    </div>

    <div class="formulario__compra" id="grupo__color">
        <label for="correo" class="formulario__label">Color</label>
        <div class="formulario__compra-input">
            <input type="text" class="formulario__input" name="color" id="color">
            <i class="formulario__validacion-estado fas fa-times-circle"></i>
        </div>
    </div>

    <div class="formulario__compra" id="grupo__precio">
        <label for="correo" class="formulario__label">Precio</label>
        <div class="formulario__compra-input">
            <input type="number" class="formulario__input" name="precio" id="precio">
            <i class="formulario__validacion-estado fas fa-times-circle"></i>
        </div>
    </div>

    <div class="formulario__grupo formulario__grupo-btn-enviar">
        <button type="submit" class="formulario__btn">Enviar</button>
        <p class="formulario__mensaje-exito" id="formulario__mensaje-exito">Formulario enviado exitosamente!</p>
    </div>
    `;
    $divForm.appendChild($form);
    return $divForm;
    
}
export default FormCompra;
