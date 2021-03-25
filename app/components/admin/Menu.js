const Menu = () => {
    const $menu = document.createElement('nav');
    $menu.classList.add("menu");
    $menu.innerHTML = `
        <a href="#/"> Inicio </a>
        <a href="#/prendasvendidas"> Prendas Mas Vendidas </a>
        <a href="#/sinvender"> Sin vender </a>
        <a href="#/estadisticas"> Estadisticas ventas </a>
        <a href ="#/compras"> compras </a>
        
    `;
    return $menu;
}

export default Menu;