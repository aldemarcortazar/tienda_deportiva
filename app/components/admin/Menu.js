const Menu = () => {
    const $menu = document.createElement('nav');
    $menu.classList.add("menu");
    $menu.innerHTML = `
        <a href="#/"  class="item-p" > Inicio </a>
        <a href="#/prendasvendidas" class="item-p"> Datos </a>
            <a href="#/actualizar_d"> actualizar datos </a>
        <a href="#/sinvender" class="item-p"> Estadisticas </a>
            <a href="#/compras" > Compras </a>
            <a href="#/prendas" > prendas  </a>
            <a href="#/usuarios" > usuarios </a>
        <a href="#/estadisticas" class="item-p" > clientes </a>
            <a href="#/agg"> agregar </a>
            <a href="#/act"> actualizar </a>
            <a href="#/eliminar" > eliminar </a>
    `;
    return $menu;
}

export default Menu;