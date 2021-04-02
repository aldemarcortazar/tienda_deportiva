import Router from './components/Router.js';
import Main from './components/Main.js';
import Loader from './components/Loader.js';
import RouterAdmin from './components/admin/RouterAdmin.js';
import RouterUser from './components/user/RouterUser.js';

const App = () => {
    const $root = document.getElementById("root");
    // console.log("holi");
    $root.innerHTML = null;
    $root.appendChild(Loader());
    $root.appendChild(Main());
    Router();
    RouterAdmin();
    RouterUser();
};


export default App;