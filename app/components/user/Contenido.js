import Aside from "./Aside.js";


const Contenido = () => {
    const $contenido = document.createElement('section');
    $contenido.classList.add("contenido");
    $contenido.id = "contenido";
    $contenido.appendChild(Aside());
    const $div  = document.createElement("div");
    $div.classList.add("cont");
    $div.id = "cont";
    $contenido.appendChild($div);
    return $contenido;
}


export default Contenido;