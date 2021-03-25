import Banner from './Banner.js';

const Body = () => {
    const $Body = document.createElement('body');
    $Body.classList.add("body"); 
    $Body.appendChild(Banner());
    //$Body.appendChild(Conteni()); 
    return $Body;
}

export default Body;