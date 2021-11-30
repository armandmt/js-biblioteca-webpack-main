import '../css/componentes.css';
//import { createForm } from './firebase'
// import webpacklogo from '../assets/img/webpack-logo.png';


export const isLogged = () => {
    
    console.log('Comprovant si està validat');

     let logged = sessionStorage.getItem('logged') 
    
     if (logged != undefined)
        return  logged
     else       
        return -1
    
    // Img
    // const img = document.createElement('img');
    // img.src = webpacklogo;
    // document.body.append( img );
}


// export const creaHTMLlistaLlibres = (llistallibres, llistaautors,llistaeditorials,llistageneres) =>{

//     let html=`<table class='table'>
//     <thead><tr><th>#Id</th><th>Llibres</th><th>Autors</th><th>Gènere</th>
//     <th>Editorials</th><th>Valoració</th>
//     <th class='esborrar invisible'><button id="esborraritems" type="button" class="btn btn-outline-danger btn-sm">Esborrar</button>
//     </th></tr></thead><tbody>`

    //for (let i of llistallibres.llibres)
    
    // for(index=0; index < llistallibres.lilibres.length; index++)
    // {
   
    //     let cad_autors= llistaautors.cercaAutors(i.id_autors)
    //     let cad_editorials = llistaeditorials.cercaEditorial(i.id_editorial)
    //     let cad_generes = llistageneres.cercaGenere(i.id_genere)
    //     html += `<tr ><td>${i.id_llibre}</td>
    //     <td>${i.titol}</td><td>${cad_autors}
    //     </td><td>${cad_generes} </td><td>${cad_editorials}
    //     </td><td>${i.valoracio}</td>
    //     <td><input class="esborrar form-check-input invisible" type="checkbox" value="" id="esb${i.id_llibre}""></td></tr>`
    //     console.log(i.titol)


    // }
    // html +=`</tbody></table>`
//     return html;


    
    

// }



    
    

