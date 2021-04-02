import './../../../node_modules/chart.js/dist/Chart.js';
import ajax from '../../helpers/ajax.js';
import api from './../../helpers/api.js';

const DiasSinvender = async () =>{
    const $ctx = document.getElementById('mycanvas3');
    const datos = [];
    const labels = [];
    await ajax({
        url: `${api.ESTADISTICA}/?dias_no_ven`,
        method: 'GET',
        cbSuccess: ( { data } ) => {
            console.log(data);
            data.forEach( prenda => {
                datos.push( prenda.Dias_Sin_vender );
                labels.push( prenda.nom_prenda );
            }); 
        }
    }); 

    const myChart = new Chart($ctx , {
        type: 'bar',
    data: {
        labels,
        datasets: [{
            label: 'Dias que lleva sin vender ',
            data: datos,
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


export default DiasSinvender;