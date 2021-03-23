import Login from './login/Login.js';

const Router = () => {
    let { hash } = location;
    console.log(hash);
    const $main = document.getElementById("main");
    $main.innerHTML = null;

    if( !hash || hash === "#/" ){
        $main.appendChild(Login());
    }else if(true){

    }
}

export default Router;