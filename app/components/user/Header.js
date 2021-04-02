import NameUser from "../admin/NameUser.js";
import Title from "../admin/Title.js";


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