async function convertir(moneda1,moneda2,cantidad){

    let convertido = 0;

    let url = "https://min-api.cryptocompare.com/data/price";

    url = url + "?fsym="+moneda1 + "&tsyms="+ moneda2;

    console.log(url);

    try {
        const response = await fetch(url.toString());
        const res = await response.json();
        convertido = Object.values(res)[0];
        //{"USD":63719.7}

        convertido = (convertido*cantidad).toFixed(2);
        

       
    }
    catch (error) {
        console.error(error);
    }



    contenedor = document.getElementById("contenedor");

contenedor.innerHTML="";

let titulo = document.createElement("h3");

titulo.style.marginLeft="20px";

titulo.innerText=cantidad + " " + moneda1.toString().toUpperCase() + " equivale a " + convertido + " " + moneda2.toString().toUpperCase(); 

contenedor.appendChild(titulo);


}




function muestratexto(moneda1,moneda2){


contenedor = document.getElementById("contenedor");

contenedor.innerHTML="";


let titulo = document.createElement("h3");

titulo.style.marginLeft="20px";

titulo.innerText="CONVERTIR " + moneda1.toString().toUpperCase() + " A " + moneda2.toString().toUpperCase(); 

contenedor.appendChild(titulo);


}

muestratexto(monedaSeleccionada, monedaFiatSeleccionada);