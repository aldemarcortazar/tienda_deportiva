import ajax from './../../helpers/ajax.js';
import api from './../../helpers/api.js';
const DiasPrendasVestidas = async () => {
    const $ctx  = document.getElementById("mycanvas2");
    const numeros = [];
    const labels = [];
    await ajax({
        url: `${api.ESTADISTICA}/?dias_prendas_vendidas`,
        method: 'GET',
        cbSuccess: ( { data } ) => {
            console.log( data );
            data.forEach( prenda =>{
                labels.push( prenda.nom_prenda );
                numeros.push( prenda.Dias_Ventas );
            } );
        }
    });
    console.log(numeros);
    const myChart = new Chart($ctx , {
        type: 'bar',
    data: {
        labels,
        datasets: [{
            label: 'dias de prendas vestidas',
            data: numeros,
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

export default DiasPrendasVestidas;