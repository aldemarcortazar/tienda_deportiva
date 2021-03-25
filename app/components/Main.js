import Loader from "./Loader.js";


const Main = () => {
    const $main = document.createElement("main");
    $main.id = "main";
    $main.appendChild(Loader());
    return $main;
}

export default Main;