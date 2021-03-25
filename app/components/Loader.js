

const Loader = () => {
    const $div = document.createElement("div");
    $div.classList.add("load");
    $div.style.display = "none";
    const $loader = document.createElement("img")
    $loader.src = './app/assets/loader.svg';
    $loader.classList.add('loader');
    // $loader.style.display = "none";
    $div.appendChild($loader);
    return $div;
}

export default Loader;