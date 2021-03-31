import Login from './login/Login.js';
import Principal from './admin/principal.js';

const Router = () => {
    let { hash } = location;
    console.log(hash);
    const $main = document.getElementById("main");
    $main.innerHTML = null;
    const $loader = document.querySelector(".load");
    $loader.style.display = "block";
    if( !hash || hash === "#/" ){
        $main.appendChild(Login());
    }else if(hash.includes('#/admin')){
        ( localStorage.getItem('user') )
         ? $main.appendChild(Principal())
         : location.hash = '#/';
    }else if( hash === "#/user"){

    }
    $loader.style.display = "none";
}

export default Router;