import ajax from './ajax.js';
import API from './api.js';
const authenticate = ({documento , password }) => {
    ajax({
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
}

export default authenticate;