

const Canvas = () => {
    const $canvas = document.createElement('canvas');
    $canvas.id = "mycanvas";
    $canvas.width = "1000";
    $canvas.height = "500";
    return $canvas;
}

export default Canvas;