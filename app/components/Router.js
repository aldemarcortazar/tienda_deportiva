import Login from './login/Login.js';
import Principal from './user/principal.js';

const Router = () => {
    let { hash } = location;
    console.log(hash);
    const $main = document.getElementById("main");
    $main.innerHTML = null;

    if( !hash || hash === "#/" ){
        $main.appendChild(Login());
    }else if(hash == '#/usuario'){
        $main.appendChild(Principal());
    }
}

export default Router;