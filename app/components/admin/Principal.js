// import Body from "./body.js";
import Contenido from "./Contenido.js";
import Header from "./Header.js";

const Principal= () => {
    const $contenedor = document.createElement('div');
    $contenedor.innerHTML = '<link rel="stylesheet" href="./app/components/admin/user.css">'
    $contenedor.appendChild(Header());
    // $contenedor.appendChild(Body());
    $contenedor.appendChild(Contenido());

    return $contenedor;
}
export default Principal;