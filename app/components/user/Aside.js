import Menu from './Menu.js';
const Aside = () => {
    const $aside = document.createElement("aside");
    $aside.appendChild(Menu());
    return $aside;
}

export default Aside;