import Login from './login/Login.js';
import Principal from './admin/principal.js';
import PrincipalUser from './user/PrincipalUser.js';
import FormSigunp from './signup/FormSigunp.js';
import ValidateSigup from './signup/ValidateSigup.js';

const Router = () => {
    let { hash } = location;
    console.log(hash);
    const $main = document.getElementById("main");
    $main.innerHTML = null;
    const $loader = document.querySelector(".load");
    $loader.style.display = "block";
    if( !hash || hash === "#/" ){
        $main.appendChild(Login());
    }else if( hash === "#/registrate"){
        $main.appendChild(FormSigunp());
        ValidateSigup();
    }else if(hash.includes('#/admin')){
        ( localStorage.getItem('user') )
         ? $main.appendChild(Principal())
         : location.hash = '#/';
    }else if( hash === "#/usuario"){
        ( localStorage.getItem('user') )
         ? $main.appendChild(PrincipalUser())
         : location.hash = '#/';
    }
    $loader.style.display = "none";
}

export default Router;