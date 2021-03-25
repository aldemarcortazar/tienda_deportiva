const Banner = () => {
    const $Banner = document.createElement('banner');
    $Banner.classList.add("banner");
    $Banner.innerHTML = `
    <div class="img-header">
            <div class="welcome">
                <img src="app/assets/ropader.jpg">
            </div>
    </div>       
    `;
    return $Banner;
}

export default Banner;

