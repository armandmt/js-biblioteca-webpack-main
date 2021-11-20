import header from "./templates/header.html"
import footer from "./templates/footer.html"
import menu from "./templates/menu.html";

import { omplirDB } from "./bd/omplir";
import { obtenirDades, setLlibres} from "./js/firebase"

import { Llibre,LlibresList,AutorsList,EditorialsList,GeneresList } from "./classes/index";
import { creaHTMLlistaLlibres} from './js/componentes'
import { creaHTMLFormulariAfegir } from "./js/componentes";


import 'bootstrap/dist/css/bootstrap.min.css';

// Import the functions you need from the SDKs you need




// console.log(header)

// inserim la capçalera
let cap= document.createElement('div');
cap.innerHTML=header
document.body.append(cap)
//-------------------
// Inserim menu app
let men= document.createElement('div');
men.innerHTML=menu
document.body.append(men)

var llista,llista_autors,llista_editorials,llista_generes;

// Lectura de dades del servidor
console.log("Abans d'obtenir dades")
console.log(llista);

obtenirDades().then((data) => {


    console.log("Dins del then d'obtenir dades")

    console.log(data)
    llista_autors = new AutorsList(data[1]);
    llista = new LlibresList(data[0])
    llista_editorials = new EditorialsList(data[2]);
    llista_generes = new GeneresList(data[3]);

    console.log(llista)
    let cos= document.createElement('div');
    cos.id="divllistar"
    cos.className="container w-75"
    cos.innerHTML=creaHTMLlistaLlibres(llista,llista_autors,llista_editorials,llista_generes);
    document.body.append(cos)

    cos= document.createElement('div');
    cos.id="divafegir"
    cos.style.display="none"
    cos.className="container w-50"
    cos.innerHTML=creaHTMLFormulariAfegir(llista_autors, llista_editorials,llista_generes)
    document.body.append(cos)



    let peu= document.createElement('div');
    peu.innerHTML=footer
    document.body.append(peu)


    document.querySelector("#enviarllibre").addEventListener('click', (event) => {


        let autorllibre=[];
    
        let titolllibre=document.querySelector("#titolllibre").value;
        autorllibre[0]=document.querySelector("#autorllibre").value
        let editorialllibre = document.querySelector("#editorialllibre").value;
        let generellibre = document.querySelector("#generellibre").value;
        let sinopsillibre = document.querySelector("#sinopsillibre").value;
        let valoraciollibre= document.querySelector('#valoraciollibre').value
        let isbnllibre= document.querySelector('#isbnllibre').value
        let imatgellibre= document.querySelector('#imatgellibre').value
    
    
    
        let nouindex = parseInt(llista.darrer_element())+1;
    
        let ll = new Llibre(nouindex,autorllibre,titolllibre,editorialllibre,isbnllibre,sinopsillibre,valoraciollibre,generellibre,imatgellibre)
        llista.nouLlibre(ll);
        setLlibres(ll,nouindex)

        //let ll = new Llibre()
        //constructor(id_llibre,id_autors,titol,id_editorial,isbn,sinopsi,valoracio,id_genere,imatge_portada)
    
    
    
        document.querySelector("#divllistar").remove();
        let cos= document.createElement('div');
        cos.id="divllistar"
        cos.className="container w-75"
        cos.style.display="none"
    
        cos.innerHTML=creaHTMLlistaLlibres(llista,llista_autors,llista_editorials,llista_generes);
        document.body.append(cos)
    
    
    
        alert (titolllibre+ " " + nouindex)
    
    })
    
    
    document.querySelector("#afegir").addEventListener('click',(event) => {
    
    
        // Visualitzar taula de llibres
    
        document.querySelector("#divafegir").style.display="block"
        document.querySelector("#divllistar").style.display="none"
    
    
    })
    
    document.querySelector("#llistar").addEventListener('click',(event) => {
    
    
    
        document.querySelector("#divafegir").style.display="none"
        document.querySelector("#divllistar").style.display="block"
        // Visualitzar taula de llibres
    
    
    })
    
    document.querySelector("#esborrar").addEventListener('click',(event) => {
    
    
        let esborrables = document.querySelectorAll(".esborrar");

        for (let i of esborrables)
        {


            i.classList.toggle('invisible')
            console.log(i.innerHTML)
        }
        // Visualitzar taula de llibres
    
    
    })
    

    

})
            // data.map((tot,i)=>{
            // tnouLlibre(tot)
            // console.log(tot.titol)





  
//this.carregarLocalStorage()


// inserim el llistat de llibres
// Creem els objectes que emmagatzemen les dades
// let llista = new LlibresList();

//omplirDB(llista,llista_autors,llista_editorials,llista_generes);


// Aquí hauriem d'inserir el nostre codi




// inserim el peu

//-------------------



