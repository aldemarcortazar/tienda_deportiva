import ajax from './ajax.js';
import API from './api.js';
const authenticate = ({username , password }) => {
    ajax({
        url: `${API.USER}/?username=${username}&password=${password}`,
        method: 'GET',
        cbSuccess: ( user ) => {
            console.log(user);
            if( user.length > 0 ) return user ;
            return false; 
        }
    });
}

export default authenticate;