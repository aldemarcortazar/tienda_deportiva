import ajax from "../../helpers/ajax.js";
import api from "../../helpers/api.js";


const UsersBuy = () => {
    const $fragment = document.createDocumentFragment();
    const $table = document.createElement("table");
    $table.classList.add('tabla3')
    $table.innerHTML = `
        <tr class="encabezado3">
            <td> Id Venta </td> 
            <td> Fecha Venta </td>
            <td> Tipo Documento </td>
            <td> Documento </td>
            <td> Nombres </td>
            <td> Apellidos </td>
        </tr>
    `;        
    ajax({
        url: `${api.ESTADISTICA}/?user_buy`,
        method: 'GET',
        cbSuccess: ( UserBuy ) => {
            const { data } = UserBuy;
            data.forEach(Buy => {
                const $tr = document.createElement("tr");
                $tr.innerHTML = `
                        <td> ${Buy.id_venta_enca} </td> 
                        <td> ${Buy.fecha_venta} </td>
                        <td> ${Buy.nom_tipo_docu} </td>
                        <td> ${Buy.documento} </td>
                        <td> ${Buy.nombres} </td>
                        <td> ${Buy.apellidos} </td>
                `;
                $fragment.appendChild($tr);
            });

            $table.appendChild($fragment);
            console.log(UserBuy);
        }
    });
    return $table;
}


export default UsersBuy;