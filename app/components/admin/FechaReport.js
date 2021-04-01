const FechaReport = () => {
    const $formulario  = document.createElement("form");
    $formulario.classList.add("formu-fecha");
    $formulario.innerHTML= `
        <p> por favor ingresa la fecha desde la cual quieres ver reportes </p>
        <input type="date" id="fecha" name="fecha">
        <input type="submit" value="enviar" >
    `;
    return $formulario;
}

export default FechaReport;