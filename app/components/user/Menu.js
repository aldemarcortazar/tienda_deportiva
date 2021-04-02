const Menu = () => {
    const $menu = document.createElement('nav');
    let { hash } = location;
    $menu.classList.add("menu");
    $menu.innerHTML = `
        <a href="#/admin/?inicio" class="item-p" > Inicio </a>
        <a href="#/admin/?prendasvendidas" class="item-p"> Datos </a>
            <a href="#/admin/?actualizar_d"> actualizar datos </a>
        <a href="#/admin/?sinvender" class="item-p"> Estadisticas </a>
            <a href="#/admin/?compras" > Compras </a>
            <a href="#/admin/?prendas" > prendas  </a>
            <a href="#/admin/?usuarios" > usuarios </a>
        <a href="#/admin/?estadisticas" class="item-p" > clientes </a>
            <a href="#/admin/?agg"> agregar </a>
            <a href="#/admin/?act"> actualizar </a>
            <a href="#/admin/?eliminar" > eliminar </a>
    `;
    return $menu;
}

export default Menu;