import header from "./templates/header.html"
import footer from "./templates/footer.html"
import menu from "./templates/menu.html";

import { omplirDB } from "./bd/omplir";
import { Llibre,LlibresList,AutorsList,EditorialsList,GeneresList } from "./classes/index";
import { creaHTMLlistaLlibres} from './js/componentes'
import { creaHTMLFormulariAfegir } from "./js/componentes";

import 'bootstrap/dist/css/bootstrap.min.css';

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

// inserim el llistat de llibres

// Creem els objectes que emmagatzemen les dades
let llista = new LlibresList();
let llista_autors = new AutorsList();
let llista_editorials = new EditorialsList();
let llista_generes = new GeneresList();
//omplirDB(llista,llista_autors,llista_editorials,llista_generes);

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



// Aquí hauriem d'inserir el nostre codi




// inserim el peu
let peu= document.createElement('div');
peu.innerHTML=footer
document.body.append(peu)
//-------------------


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


    // Visualitzar taula de llibres


})

