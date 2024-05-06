async function convertir(moneda1,moneda2,cantidad){

    if(isNaN(cantidad))
        return;

    let convertido = 0;

    let url = "https://min-api.cryptocompare.com/data/price";

    url = url + "?fsym="+moneda1 + "&tsyms="+ moneda2;



    try {
        const response = await fetch(url.toString());
        const res = await response.json();
        convertido = Object.values(res)[0];
   

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

const inputNumerico = document.getElementById('cantidad');

// Agrega un event listener para el evento keydown
inputNumerico.addEventListener('keydown', function(event) {
    // Obtiene el código de la tecla presionada
    const keyCode = event.keyCode;

    // Permite solo números (0-9) y teclas especiales (borrar, retroceso, flechas)
    if (!(keyCode >= 48 && keyCode <= 57) &&   // números del teclado principal
        !(keyCode >= 96 && keyCode <= 105) &&  // números del teclado numérico
        keyCode !== 8 &&                       // tecla de retroceso
        keyCode !== 9 &&                       // tecla de tabulación
        keyCode !== 37 && keyCode !== 39 &&    // teclas de flecha izquierda y derecha
        keyCode !== 46) {                      // tecla de suprimir
        event.preventDefault();  // Previene la acción predeterminada (escribir el carácter)
    }
});

muestratexto(monedaSeleccionada, monedaFiatSeleccionada);