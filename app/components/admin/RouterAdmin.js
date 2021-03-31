import Factura from "./Facturas.js";


const RouterAdmin = () => {
    let { hash , search } = location;
    console.log(search);
    const $contenido = document.getElementById("contenido");
    if( hash === "#/admin" || hash.includes('/?inicio') || hash.includes('/?compras')){
        $contenido.appendChild(Factura());
        console.log($contenido);
    }
}
export default RouterAdmin;