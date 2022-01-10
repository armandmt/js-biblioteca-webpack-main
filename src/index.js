import 'bootstrap/dist/css/bootstrap.min.css';

// vistes
import { header,footer,menu } from "./vistes/headerfootermenu"
import { creaHTMLFormulariAfegir } from "./vistes/afegirLllibre"
import { creaHTMLlistaLlibres, veureLlibre} from './vistes/llistaLlibres'

import { formulariLogin,hideLogin } from "./vistes/loginView";

import { omplirDB } from "./bd/omplir";
import { obtenirDades, setLlibres,delLlibre} from "./js/firebase"

import { Llibre,LlibresList,AutorsList,EditorialsList,GeneresList,UsuarisList } from "./classes/index";
import { isLogged } from './js/componentes';
import { AssetsList } from './classes/assets-list-class';
import { crearFormulariFiltrar } from './vistes/filtraLlibres';
//import { creaHTMLFormulariAfegir } from "./js/componentes";



// Aquest objecte ja llegeix de la base de dades quan el creem des del constructor
let use = new UsuarisList();
let asssets = new AssetsList();
header();

console.log(use)
//Login




// console.log(header)

// inserim la capçalera

//-------------------
// Inserim menu app

menu();



// if (isLogged() == -1)
// {
//     formulariLogin();
// }
// else
// {
    
// }





export let llista,llista_autors,llista_editorials,llista_generes;

// Lectura de dades del servidor
console.log("Abans d'obtenir dades")
//console.log(llista);




obtenirDades().then((data) => {


   
    console.log("Dins del then d'obtenir dades")

    
    console.log(data)   
    llista_autors = new AutorsList(data[1]);
    // Neteja 
    const myArrClean = data[0].filter(Boolean)
    llista = new LlibresList(myArrClean)
    llista_editorials = new EditorialsList(data[2]);
    llista_generes = new GeneresList(data[3]);

    let cos= document.createElement('div');
    cos.id="divllistar"
    cos.style.display="none"
    cos.className="container w-75"
    cos.innerHTML=creaHTMLlistaLlibres(llista.llibres,llista_autors,llista_editorials,llista_generes);
    document.body.append(cos)

    cos= document.createElement('div');
    cos.id="divafegir"
    cos.style.display="none"
    cos.className="container w-50"
    cos.innerHTML=creaHTMLFormulariAfegir(llista_autors, llista_editorials,llista_generes)
    document.body.append(cos)


    // Component de filtratge
    let divfiltrar = document.createElement("div")
    divfiltrar.id="divfiltrar"
    divfiltrar.className="container w-75"
    divfiltrar.innerHTML = crearFormulariFiltrar() 
    divfiltrar.style.display="none"
    document.body.insertBefore(divfiltrar,document.querySelector("#divllistar"))

    // Filtratge
    document.querySelector("#ferfiltre").addEventListener('click',(event) => {

        const ele = document.querySelector("#filtraautor").value
        // console.log("Valor filtre",ele)
        // obté array filtrant autors
        const v = llista_autors.filtraAutorsPerText(ele)
        // obtenim array amb només els id dels autors filtrats
        console.log(v)
        const dv = v.map(ele => ele.id_autor)
        console.log(dv)
        // obté llibres filtrant per llibres
        const l = llista.filtraPerAutors(dv)
        console.log(l)
        let cos = document.querySelector("#divllistar")
        
        cos.innerHTML=creaHTMLlistaLlibres(l,llista_autors,llista_editorials,llista_generes);
        

    })


    footer();



    document.querySelector("#divllistar").addEventListener('click',(event) => {


        event.preventDefault();
        let index=-1;

        console.log(event.target.className)
        if (event.target.className == "delere")
        {
            index=event.target.parentNode.parentNode.parentNode.id    
            console.log("Esborrar",event.target.src,index)
            llista.esborraLlibre(parseInt(index));
           
            document.querySelector("#divllistar").innerHTML=creaHTMLlistaLlibres(llista.llibres,llista_autors,llista_editorials,llista_generes);
            delLlibre(index)
           

        }
        else if (event.target.className == "vide")
        {
            index=event.target.parentNode.parentNode.parentNode.id    
            console.log("Veure",event.target.src,index)
        }
        else if (event.target.className == "mutare")
        {
            index=event.target.parentNode.parentNode.parentNode.id    
            console.log("Modificar",event.target.src,index)
        }


        //let index=event.target.parentNode.previousElementSibling.innerHTML
        //console.log(index)

        //veureLlibre(llista.llibres[index])
        


    })
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
    
    
        console.warn("Darrer element",llista.darrer_element()) 
        let nouindex = parseInt(llista.darrer_element())+1;
    
        let ll = new Llibre(nouindex,autorllibre,titolllibre,editorialllibre,isbnllibre,sinopsillibre,valoraciollibre,generellibre,imatgellibre)
        llista.nouLlibre(ll);
        setLlibres(ll,nouindex)

        //let ll = new Llibre()
        //constructor(id_llibre,id_autors,titol,id_editorial,isbn,sinopsi,valoracio,id_genere,imatge_portada)
    
    
    
        let cos = document.querySelector("#divllistar")
        // let cos= document.createElement('div');
        // cos.id="divllistar"
        // cos.className="container w-75"
        // cos.style.display="none"
    
        // crea HTML
        cos.innerHTML=creaHTMLlistaLlibres(llista.llibres,llista_autors,llista_editorials,llista_generes);
        // document.body.append(cos)
        // crea esdeveniments
    
    

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
    
    document.querySelector("#filtrar").addEventListener('click',(event) => {
       
        // Comprovo l'estat dels bloxk llistar i filtrar
        const estat = document.querySelector("#divfiltrar").style.display;
        const estatl = document.querySelector("#divllistar").style.display;
        

        if (estat == "none" && estatl == "block")
            document.querySelector("#divfiltrar").style.display = "block";
        else
            document.querySelector("#divfiltrar").style.display = "none";

        // let existeixdiv = document.querySelector("#divfiltrar")
        // // Comprovem si el div de filtrar existeix
        // // Si no existeix, es crea
        // if (existeixdiv == undefined)
        // {
        //     let divfiltrar = document.createElement("div")
        //     divfiltrar.id="divfiltrar"
        //     divfiltrar.className="container w-75"
        //     divfiltrar.innerHTML = crearFormulariFiltrar() 
        //     document.body.insertBefore(divfiltrar,document.querySelector("#divllistar"))


        // }
        // else  // Si existeix s'esborra
        // {
        //     existeixdiv.remove();
        // }
        
        // //document.querySelector(#divllistar).
            
    
    
    })

    document.querySelector("#esborraritems").addEventListener('click',(event) =>
    {

            let clicked= document.querySelectorAll(".esborrar")

            for (let i of clicked) 
            {
                
                if (i.checked == true){

                    llista.esborraLlibre()
                    console.log(i.parentNode.parentNode.firstChild.innerHTML)   


                }


            }

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



