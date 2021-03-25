import authenticate from './../../helpers/authenticate.js';
const FormSubmit = (e) => {
    e.preventDefault();
    const $documento = document.getElementById("username").value;
    const $password = document.getElementById("password").value;
    authenticate({
        documento: $documento,
        password: $password,
    });
}

export default FormSubmit;