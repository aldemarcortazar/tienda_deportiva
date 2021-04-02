import CantidadPrendasvendidas from './CantidadPrendasVendidas.js';
import Canvas from './Canvas.js';
import DiasPrendasVestidas from './DiasPrendasVestidas.js';
import FacturaFecha from "./FacturaFecha.js";
import Factura from "./Facturas.js";
import FechaReport from "./FechaReport.js";
import Formularios from "./Formularios.js";
import UsersBuy from './UsersBuy.js';
import TitleUser from './TitleUser.js';
import TitleShop from './TitleShop.js';
import DiasSinvender from './DiasSinVender.js';


const RouterAdmin = () => {
    let { hash , search } = location;
    console.log(search);
    const $contenido = document.getElementById("cont");
    if( hash === "#/admin" || hash.includes('/?inicio') || hash.includes('/?compras')){
        $contenido.appendChild(TitleShop());
        $contenido.appendChild(Factura());
        $contenido.appendChild(FechaReport());
        console.log($contenido);
    }else if( hash.includes('/?prendas') ){
        $contenido.appendChild(Canvas("mycanvas"));
        CantidadPrendasvendidas();

        $contenido.appendChild(Canvas("mycanvas2"));
        DiasPrendasVestidas();
        $contenido.appendChild(Canvas("mycanvas3"));
        DiasSinvender();
    }else if (hash.includes('/?usuarios')){
        $contenido.appendChild(TitleUser());
        $contenido.appendChild(UsersBuy());
    }

    Formularios();
}
export default RouterAdmin;