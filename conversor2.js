async function convertir(moneda1,moneda2,cantidad){

    let convertido = 0;

    let url = "https://min-api.cryptocompare.com/data/price";

    url = url + "?fsym="+moneda2 + "&tsyms="+ moneda1;


    try {
        const response = await fetch(url.toString());
        const res = await response.json();
        convertido = Object.values(res)[0];
        console.log(convertido);
        //{"USD":63719.7}

        convertido = (convertido*cantidad).toFixed(6);
        

       
    }
    catch (error) {
        console.error(error);
    }



    contenedor = document.getElementById("contenedor");

contenedor.innerHTML="";

let titulo = document.createElement("h3");

titulo.style.marginLeft="20px";

titulo.innerText=cantidad + " " + moneda2.toString().toUpperCase() + " equivale a " + convertido + " " + moneda1.toString().toUpperCase(); 

contenedor.appendChild(titulo);


}




function muestratexto(moneda1,moneda2){


contenedor = document.getElementById("contenedor");

contenedor.innerHTML="";


let titulo = document.createElement("h3");

titulo.style.marginLeft="20px";

titulo.innerText="CONVERTIR " + moneda2.toString().toUpperCase() + " A " + moneda1.toString().toUpperCase(); 

contenedor.appendChild(titulo);


}

muestratexto(monedaSeleccionada, monedaFiatSeleccionada);