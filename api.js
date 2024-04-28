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
        
        //console.log(data);
        

       
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

    console.log(noticias);
    
    const noticiasDiv = document.getElementById("contenedor");

    noticiasDiv.innerHTML="";

    let Listanoticias = document.createElement("ul");
    
    Listanoticias.appendChild(document.createElement("br"));

    let titulo = document.createElement("h1");

    titulo.innerText="NOTICIAS";
    Listanoticias.appendChild(titulo);

    
    for(var noticia of noticias) {
     


   titulo = document.createElement("h2");

       titulo.innerText=noticia.title;
       Listanoticias.appendChild(titulo);


       titulo = document.createElement("h3");
       titulo.innerText=noticia.body;
       Listanoticias.appendChild(titulo);
   
       titulo = document.createElement("a");
       titulo.style.color="white";
       titulo.href=noticia.url;
       titulo.textContent = noticia.url;
       Listanoticias.appendChild(titulo);
    
       /*  ListaEventos.appendChild(document.createElement("br")); */

/*         let title3 = document.createElement("h3");
        title3.innerText="Fecha de inicio del evento";
        title3.classList.add('titulo2');
        ListaEventos.appendChild(title3); */

        /* ListaEventos.appendChild(document.createElement("br")); */

/*         let li = document.createElement("li");
        li.innerText = evento.startTime.replace("T"," Hora: ");
        li.innerText = li.innerText.replace("Z","");
        li.style.fontSize = "30px";
        li.style.fontStyle = "bold";
        
        ListaEventos.appendChild(li); */

        /* ListaEventos.appendChild(document.createElement("br")); */


/*         let title2 = document.createElement("h3");
        title2.innerText="Fecha de Fin del evento";
        title2.classList.add('titulo2');
        ListaEventos.appendChild(title2);
        

        li = document.createElement("li");
        li.innerText = evento.endTime.replace("T"," Hora: ");
        li.innerText = li.innerText.replace("Z","");
        li.style.fontSize = "30px";
        li.style.fontStyle = "bold";
        ListaEventos.appendChild(li); */

        Listanoticias.appendChild(document.createElement("br"));



///BOTON
/*         let boton = document.createElement('button');
    boton.style.class = "animated-button";
    boton.textContent = 'VOLVER';
    boton.id = 'volver';
    boton.style.backgroundColor = 'red';
    boton.style.color = 'white';


    boton.addEventListener('click', function() {
        window.location.href = 'eventos.html';
    });

        ListaEventos.appendChild(boton); */

///BOTON





        let linea = document.createElement("h3");
        linea.innerText="____________________________________________________"
        Listanoticias.appendChild(linea);


        }         
                
       
        noticiasDiv.appendChild(Listanoticias);

    };

muestranoticias();
  