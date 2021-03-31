import Aside from "./aside.js";

const Contenido = () => {

    const $contenido = document.createElement('section');
    $contenido.classList.add("contenido");
    $contenido.id = "contenido";
    $contenido.appendChild(Aside());

    return $contenido;
}

export default Contenido;