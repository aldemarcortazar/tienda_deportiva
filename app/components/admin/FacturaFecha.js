import ajax from "../../helpers/ajax.js";
import api from "../../helpers/api.js";


const FacturaFecha = ( fecha ) => {

    const $fragment = document.createDocumentFragment();
    const $table = document.createElement("table");
    $table.classList.add("tabla2");
    const $div = document.createElement("div");
    $div.classList.add("tabla2")
    $table.innerHTML =`
        <tr class="encabezado1">
            <td> Fecha Venta</td> 
            <td> Nombre Almacen </td>
            <td> Nombre Prenda </td>
            <td> Precio </td>
            <td> Talla </td>
            <td> Cantidad </td>
            <td> V total venta </td>
            <td> Nombres </td>
            <td> Apellidos </td>
            <td> Documento </td>
            <td> Forma Pago </td>
        </tr>
    `;        
    ajax({
        url: `${api.ESTADISTICA}/?facturas_fechas=${fecha}`,
        method: 'GET',
        cbSuccess: ( facturasFecha ) => {
            const { data } = facturasFecha;
            if( data.length == 0 ) $table.innerHTML = "no se encontraron ventas";
            data.forEach(facturaF => {
                const $tr = document.createElement("tr");
                $tr.innerHTML = `
                    <td> ${facturaF.fecha_venta} </td>
                    <td> ${facturaF.nombre_almacen} </td>
                    <td> ${facturaF.nom_prenda} </td>
                    <td> ${facturaF.precio} </td>
                    <td> ${facturaF.talla} </td>
                    <td> ${facturaF.cantidad} </td>
                    <td> ${facturaF.valor_total_venta} </td>
                    <td> ${facturaF.nombres} </td>
                    <td> ${facturaF.apellidos} </td>
                    <td> ${facturaF.documento} </td>
                    <td> ${facturaF.nombre_pago} </td>
                `;
                $fragment.appendChild($tr);
            });

            $table.appendChild($fragment);
            console.log(facturasFecha);
        },
    });
    $div.appendChild($table);
    return $div;
}


export default FacturaFecha;