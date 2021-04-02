import ajax from "../../helpers/ajax.js";
import api from "../../helpers/api.js";
import TitleShop from "./TitleShop.js"



const Factura = () => {
    const $fragment = document.createDocumentFragment();
    const $table = document.createElement("table");
    $table.classList.add('tabla1')
    $table.innerHTML = ` 
        <tr class="encabezado">
            <td> Id Venta </td> 
            <td> Fecha Venta </td>
            <td> Nombre almacen </td>
            <td> Nombre prenda </td>
            <td> Precio </td>
            <td> Talla </td>
            <td> Cantidad </td>
            <td> V total venta </td>
            <td> Documento </td>
            <td> Nombres </td>
            <td> Apellidos </td>
            <td> Forma Pago </td>
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