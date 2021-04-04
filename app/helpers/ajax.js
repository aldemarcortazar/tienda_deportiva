

const ajax = async({url, method, cbSuccess, data}) => {
    await fetch(url , {
        method,
        headers: {
            'Content-type': 'application/json'
        },
        body:JSON.stringify(data),
    })
        .then( res => res.ok ? res.json() : Promise.reject(res))
        .then( data => cbSuccess(data) )
        .catch( err => {
        let messague = err.statusText || "ocurrio un error";
        document.getElementById('main').innerHTML = 
        `
            <div class="error">
                <p> ${err.status} -- ${messague} </p>
            </div>
        `;

        // document.querySelector('.Loader').style.display = "none";
        console.log(err);
        });
}

export default ajax;