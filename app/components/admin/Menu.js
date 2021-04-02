const Menu = () => {
    const $menu = document.createElement('nav');
    let { hash } = location;
    $menu.classList.add("menu");
    $menu.innerHTML = `
        <a href="#/admin/?inicio"  class="item-p" > Inicio </a>
        <a href="#/admin/?prendasvendidas" class="item-p"> Datos </a>
            <a href="#/admin/?actualizar_d"> Actualizar datos </a>
        <a href="#/admin/?sinvender" class="item-p"> Estadisticas </a>
            <a href="#/admin/?compras" > Compras </a>
            <a href="#/admin/?prendas" > Prendas  </a>
            <a href="#/admin/?usuarios" > Usuarios </a>
        <a href="#/admin/?estadisticas" class="item-p" > Clientes </a>
            <a href="#/admin/?agg"> Agregar </a>
            <a href="#/admin/?act"> Actualizar </a>
            <a href="#/admin/?eliminar" > Eliminar </a>
    `;
    return $menu;
}

export default Menu;