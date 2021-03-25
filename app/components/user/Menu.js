const Menu = () => {
    const $menu = document.createElement('nav');
    $menu.classList.add("menu");
    $menu.innerHTML = `
        <a href="#/"> Inicio </a>
        <a href="#/Ropa"> Ropa </a>
        <a href="#/Agregar"> Comprar </a>
        <a href="#/Compras"> Compras </a>
        
    `;
    return $menu;
}

export default Menu;