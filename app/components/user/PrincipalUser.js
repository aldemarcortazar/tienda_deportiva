import Contenido from "./Contenido.js";
import Header from './Header.js';

const PrincipalUser = () => {
    const $contenedor = document.createElement('div');
    $contenedor.innerHTML = '<link rel="stylesheet" href="./app/components/admin/user.css">'
    $contenedor.appendChild(Header());
    $contenedor.appendChild(Contenido());
    return $contenedor;
}

export default PrincipalUser;