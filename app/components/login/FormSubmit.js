import authenticate from './../../helpers/authenticate.js';
const FormSubmit = (e) => {
    e.preventDefault();
    const $username = document.getElementById("username").value;
    const $password = document.getElementById("password").value;
    authenticate({
        username: $username,
        password: $password,
    });
}

export default FormSubmit;