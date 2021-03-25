// require("./login.css");
// @import './login.css';

// import authenticate from "../../helpers/authenticate";
import FormSubmit from './FormSubmit.js';

const Login = () => {
    
    const $formulario = document.createElement("form");
    $formulario.classList.add("formu-login");
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
    return $formulario;
}

export default Login;