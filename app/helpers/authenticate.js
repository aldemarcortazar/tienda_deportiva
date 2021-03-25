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
            if( user.data.length > 0 ){
                (user.data[0].id_tip_usua == 1)
                 ? location.hash = '#/usuario'
                 : location.hash = '#/admin'
                 console.log(user.data[0].id_tip_usua);
            };
            return false; 
        }
    });
    $load.style.display = 'none';

}

export default authenticate;