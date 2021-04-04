import ajax from "../../helpers/ajax.js";
import api from "../../helpers/api.js";


const FormSubmitCreate = async ( datos ) => {
    const $loadd = document.querySelector(".load");
    $loadd.style.display = 'block';
    await ajax({
        url: `${api.USER}`,
        method: 'POST',
        cbSuccess: ( resp ) => {
            console.log("usuario creado con exito");
            location.hash = "#/";
        },
        data: datos
    });

    $loadd.style.display = 'none';
}

export default FormSubmitCreate ;