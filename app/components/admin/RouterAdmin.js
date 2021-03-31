import FacturaFecha from "./FacturaFecha.js";
import Factura from "./Facturas.js";


const RouterAdmin = () => {
    let { hash , search } = location;
    console.log(search);
    const $contenido = document.getElementById("contenido");
    if( hash === "#/admin" || hash.includes('/?inicio') || hash.includes('/?compras')){
        $contenido.appendChild(Factura());
        $contenido.appendChild(FacturaFecha());
        console.log($contenido);
    }
}
export default RouterAdmin;