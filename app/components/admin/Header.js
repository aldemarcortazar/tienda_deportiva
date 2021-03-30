// import Menu from './Menu.js';
// import Logo from './Logo.js';
import NameUser from './NameUser.js';
import Title from './Title.js';

const Header = () => {
    const $header = document.createElement('header');
    $header.classList.add("header");    
    $header.appendChild(Title());
    // $header.appendChild(Logo());}
    $header.appendChild(NameUser());
    // $header.appendChild(Menu());
    return $header;
}

export default Header;