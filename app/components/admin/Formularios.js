// import ajax from "../../helpers/ajax.js";
import FacturaFecha from "./FacturaFecha.js";


const Formularios = () => {
    const $contenido = document.getElementById("cont");
    document.addEventListener("submit" , (e) => {
        e.preventDefault();
        if(e.target.matches(".formu-fecha")){
            const tabla2 = document.querySelector(".tabla2");
            tabla2 != null && $contenido.removeChild(tabla2);
            const $formulario = document.querySelector(".formu-fecha");
            const data = new FormData($formulario);
            const fecha = data.get('fecha');
            $contenido.appendChild(FacturaFecha( fecha ));
        }
    });
}

export default Formularios;