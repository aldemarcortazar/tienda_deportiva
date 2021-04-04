

const FormSigunp = () => {
    const $divForm = document.createElement('div');
    $divForm.classList.add("div-form");
    const $form = document.createElement("form");
    $form.id = "formulario";
    $form.innerHTML = `
    <link rel="stylesheet" href="./app/components/signup/signup.css">
    <!-- Grupo: tip docu -->
    <div class="formulario__grupo" >
        <label for="tip_usua" class="formulario__label">  Tipo de documento </label>
        <div class="formulario__grupo-input">
            <select id="tip_usua" name="tip_docu">
                <option value="1"> CC </option>
                <option value="2"> TI </option>
            </select>
            <i class="formulario__validacion-estado fas fa-times-circle"></i>
        </div>
    </div>
    <!-- Grupo: Usuario -->
    <div class="formulario__grupo" id="grupo__documento">
        <label for="usuario" class="formulario__label">Documento</label>
        <div class="formulario__grupo-input">
            <input type="text" class="formulario__input" name="documento" id="documento" placeholder="1104934897">
            <i class="formulario__validacion-estado fas fa-times-circle"></i>
        </div>
        <p class="formulario__input-error">El usuario solo puede contener numeros minimo 7 y maximo 12</p>
    </div>

    <!-- Grupo: Nombre -->
    <div class="formulario__grupo" id="grupo__nombre">
        <label for="nombre" class="formulario__label">Nombre</label>
        <div class="formulario__grupo-input">
            <input type="text" class="formulario__input" name="nombre" id="nombre" placeholder="John Doe">
            <i class="formulario__validacion-estado fas fa-times-circle"></i>
        </div>
        <p class="formulario__input-error">El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo.</p>
    </div>
    <!-- Grupo: apellidos -->
    <div class="formulario__grupo" id="grupo__nombre">
        <label for="nombre" class="formulario__label">Apellidos</label>
        <div class="formulario__grupo-input">
            <input type="text" class="formulario__input" name="apellidos" id="apellidos" placeholder="John Doe">
            <i class="formulario__validacion-estado fas fa-times-circle"></i>
        </div>
        <p class="formulario__input-error">loa apellidos solo pueden conteneer letras.</p>
    </div>

    <!-- Grupo: Contraseña -->
    <div class="formulario__grupo" id="grupo__password">
        <label for="password" class="formulario__label">Contraseña</label>
        <div class="formulario__grupo-input">
            <input type="password" class="formulario__input" name="password" id="password">
            <i class="formulario__validacion-estado fas fa-times-circle"></i>
        </div>
        <p class="formulario__input-error">La contraseña tiene que ser de 4 a 12 dígitos.</p>
    </div>

    <!-- Grupo: Contraseña 2 -->
    <div class="formulario__grupo" id="grupo__password2">
        <label for="password2" class="formulario__label">Repetir Contraseña</label>
        <div class="formulario__grupo-input">
            <input type="password" class="formulario__input" name="password2" id="password2">
            <i class="formulario__validacion-estado fas fa-times-circle"></i>
        </div>
        <p class="formulario__input-error">Ambas contraseñas deben ser iguales.</p>
    </div>

    <!-- Grupo: Correo Electronico -->
    <div class="formulario__grupo" id="grupo__correo">
        <label for="correo" class="formulario__label">Correo Electrónico</label>
        <div class="formulario__grupo-input">
            <input type="email" class="formulario__input" name="correo" id="correo" placeholder="correo@correo.com">
            <i class="formulario__validacion-estado fas fa-times-circle"></i>
        </div>
        <p class="formulario__input-error">El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.</p>
    </div>

    <!-- Grupo: Teléfono -->
    <div class="formulario__grupo" id="grupo__telefono">
        <label for="telefono" class="formulario__label">Teléfono</label>
        <div class="formulario__grupo-input">
            <input type="text" class="formulario__input" name="telefono" id="telefono" placeholder="4491234567">
            <i class="formulario__validacion-estado fas fa-times-circle"></i>
        </div>
        <p class="formulario__input-error">El telefono solo puede contener numeros y el maximo son 14 dígitos.</p>
    </div>

    <!-- Grupo: Terminos y Condiciones -->
    <div class="formulario__grupo" id="grupo__terminos">
        <label class="formulario__label">
            <input class="formulario__checkbox" type="checkbox" name="terminos" id="terminos">
            Acepto los Terminos y Condiciones
        </label>
    </div>
    <a href="#/"> Iniciar Sesion </a>
    <div class="formulario__mensaje" id="formulario__mensaje">
        <p><i class="fas fa-exclamation-triangle"></i> <b>Error:</b> Por favor rellena el formulario correctamente. </p>
    </div>

    <div class="formulario__grupo formulario__grupo-btn-enviar">
        <button type="submit" class="formulario__btn">Enviar</button>
        <p class="formulario__mensaje-exito" id="formulario__mensaje-exito">Formulario enviado exitosamente!</p>
    </div>
    `;
    $divForm.appendChild($form);
    return $divForm;
    
}
export default FormSigunp;
