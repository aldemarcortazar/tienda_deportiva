import Aside from "./aside.js";

const Contenido = () => {

    const $contenido = document.createElement('section');
    $contenido.appendChild(Aside());

    return $contenido;
}

export default Contenido;