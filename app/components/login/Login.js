// require("./login.css");
// @import './login.css';

// import authenticate from "../../helpers/authenticate";
// import Loader from '../Loader.js';
import FormSubmit from './FormSubmit.js';

const Login = () => {
    const $divForm = document.createElement('div');
    $divForm.classList.add("div-form");
    const $formulario = document.createElement("form");
    $formulario.classList.add("formu-login");
    // $formulario.appendChild(Loader());
    $formulario.innerHTML = `
        <link rel="stylesheet" href="./app/components/login/login.css">
        <h1>Iniciar Sesion</h1>
            <label for="username">Username</label>
            <input type="number" name="username" id="username" class="username">
            <label for="password">Password</label>
            <input type="password" name="password" id="password" class="username">

            <input type="submit" value="Iniciar Sesion">

            <p>¿No tienes cuenta? <a href="<?php constant('URL') ;?>signup"> Registrate</a></p>
    `;
    $formulario.addEventListener("submit" , (e) => FormSubmit(e));
    $divForm.appendChild($formulario);
    return $divForm;
}

export default Login;