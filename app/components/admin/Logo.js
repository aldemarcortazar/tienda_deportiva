const Logo = () => {
    const $logo = document.createElement("img");
    $logo.src = "app/assets/login.jpg";
    $logo.title = "LUAL";
    $logo.classList.add("logo");
    return $logo;
}

export default Logo;

