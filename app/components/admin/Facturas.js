import ajax from "../../helpers/ajax.js";
import api from "../../helpers/api.js";


const Factura = () => {
    const $fragment = document.createDocumentFragment();
    const $table = document.createElement("table");
    $table.innerHTML = `
        <tr>
            <td> id_venta_enca </td> 
            <td> fecha venta </td>
            <td>  nombre almacen</td>
            <td> nombre prenda </td>
            <td> precio </td>
            <td> talla </td>
            <td> cantidad </td>
            <td> valor total venta </td>
            <td> documento </td>
            <td> nombres </td>
            <td> apellidos </td>
            <td> forma de pago </td>
        </tr>
    `;        
    ajax({
        url: `${api.ESTADISTICA}/?all_facture`,
        method: 'GET',
        cbSuccess: ( facturas ) => {
            const { data } = facturas;
            data.forEach(factura => {
               const $tr = document.createElement("tr");
               $tr.innerHTML = `
                    <td> ${factura.id_venta_enca} </td> 
                    <td> ${factura.fecha_venta} </td>
                     <td>  ${factura.nom_almacen} </td>
                     <td> ${factura.nom_prenda} </td>
                     <td> ${factura.precio} </td>
                     <td> ${factura.talla} </td>
                     <td> ${factura.cantidad} </td>
                     <td> ${factura.valor_total_venta} </td>
                     <td> ${factura.documento} </td>
                     <td> ${factura.nombres} </td>
                     <td> ${factura.apellidos} </td>
                     <td> ${factura.nombre_pago} </td>
               `;
               $fragment.appendChild($tr);
            });

            $table.appendChild($fragment);
            console.log(facturas);
        }
    });
    return $table;
}


export default Factura;