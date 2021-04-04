import ajax from './ajax.js';
import API from './api.js';
const authenticate = async ({documento , password }) => {
    const $load = document.querySelector(".load");
    $load.style.display = 'block';
    await ajax({
        url: `${API.USER}/?documento=${documento}&password=${password}`,
        method: 'GET',
        cbSuccess: ( user ) => {
            console.log(user);
            localStorage.setItem('user', JSON.stringify(user.data));
            if( user.data.length > 0 ){
                ( user.data[0].id_tip_usua == 1)
                ? location.hash = '#/admin'
                : location.hash = '#/usuario'

                console.log(user.data[0].id_tip_usua);
            }else {
                const $h1 = document.getElementById("h1");
                $h1.outerHTML = `<h1 id="h1"> inicio de sesion erroneo <h1>`;
            };
            return false; 
        }
    });
    $load.style.display = 'none';

}

export default authenticate;