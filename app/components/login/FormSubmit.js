

const FormSubmit = (e) => {
    e.preventDefault();
    const $username = document.getElementById("username").value;
    const $password = document.getElementById("password").value;
    console.log($username);
    console.log($password);
}

export default FormSubmit;