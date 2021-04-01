import "../../../node_modules/chart.js/dist/Chart.js";
import ajax from './../../helpers/ajax.js';
import api from './../../helpers/api.js'
// Chart


const CantidadPrendasvendidas = async () => {
    const $ctx = document.getElementById('mycanvas');
    const arreglo = [];
    const labels = [];
    await ajax({
        url: `${api.ESTADISTICA}/?cantidad_prendas_vendidas`,
        method: 'GET',
        cbSuccess: ( { data } ) => {
            console.log(data);
            data.forEach( prenda => {
                arreglo.push( parseInt(prenda.cantidad));
                labels.push( prenda.nom_prenda );
            });

        }
    });
    console.log(arreglo);
    const myChart = new Chart($ctx , {
        type: 'bar',
    data: {
        labels,
        datasets: [{
            label: 'Prendas Vendidas',
            data: arreglo,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive:false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                }
            }]
        }
    }
    });
    return myChart;
}

export default CantidadPrendasvendidas;
