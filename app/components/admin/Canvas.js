

const Canvas = ( id ) => {
    const $canvas = document.createElement('canvas');
    $canvas.id = id ;
    $canvas.width = "1000";
    $canvas.height = "500";
    return $canvas;
}

export default Canvas;