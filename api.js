//var noticias = [];
async function getData(){
    const url = new URL("https://blockchain.info/ticker")
   // const url = new URL("https://blockchain.info/tobtc?currency=USD&value=500")


}

async function Noticias(){
    const url = new URL("https://min-api.cryptocompare.com/data/v2/news/?lang=ES");



    try {
        const response = await fetch(url.toString());
        const res = await response.json();
        let noticias = res.Data;
        
    }
    catch (error) {
        console.error(error);
    }
   

}

async function muestranoticias(){
    const url = new URL("https://min-api.cryptocompare.com/data/v2/news/?lang=ES");
    var noticias;
    
    try {
        const response = await fetch(url.toString());
        const res = await response.json();
       noticias = res.Data;
        
     
        

       
    }
    catch (error) {
        console.error(error);
    }

    
    
    const noticiasDiv = document.getElementById("contenedor");

    noticiasDiv.innerHTML="";

    let Listanoticias = document.createElement("ul");
    
    Listanoticias.appendChild(document.createElement("br"));

    let titulo = document.createElement("h1");

    titulo.innerText="N O T I C I A S";
    titulo.classList.add("fuente");
    Listanoticias.appendChild(titulo);

    
    for(var noticia of noticias) {
     


   titulo = document.createElement("h2");

       titulo.innerText=noticia.title;
       Listanoticias.appendChild(titulo);


       titulo = document.createElement("h3");
       titulo.innerText=noticia.body;
       Listanoticias.appendChild(titulo);

       titulo = document.createElement("h3");
       titulo.innerText="Link:";
       Listanoticias.appendChild(titulo);
   
       titulo = document.createElement("a");
       titulo.style.color="white";
       titulo.href=noticia.url;
       titulo.target="_blank";

      
       titulo.textContent = noticia.url ;
       titulo.classList.add("fuente2");
       Listanoticias.appendChild(titulo);
    
       

        Listanoticias.appendChild(document.createElement("br"));




        let linea = document.createElement("h3");
        linea.innerText="____________________________________________________"
        Listanoticias.appendChild(linea);


        }         
                
       
        noticiasDiv.appendChild(Listanoticias);

    };

muestranoticias();
  