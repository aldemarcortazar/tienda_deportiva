import Body from "./body.js";
import Header from "./Header.js";
import Title from "./Title.js";

const Principal= () => {
    const $contenedor = document.createElement('div');
    $contenedor.innerHTML = '<link rel="stylesheet" href="./app/components/admin/user.css">'
    $contenedor.appendChild(Title());
    $contenedor.appendChild(Header());
    $contenedor.appendChild(Body());
    

    return $contenedor;
}
export default Principal;