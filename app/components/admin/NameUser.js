  

const NameUser = () => {
    const [ {apellidos , nombres} ] =  JSON.parse(localStorage.getItem('user'));
    const $datosUser = document.createElement('div');
    $datosUser.classList.add('datos-p');
    $datosUser.innerHTML = `${nombres} ${ apellidos}`;

    return $datosUser;
}

export default NameUser;