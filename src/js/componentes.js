import '../css/componentes.css';
import { createForm } from './form'
// import webpacklogo from '../assets/img/webpack-logo.png';


export const saludar = () => {
    console.log('Afegint formulari');

    createForm();
    
    // Img
    // const img = document.createElement('img');
    // img.src = webpacklogo;
    // document.body.append( img );
}

export const creaHTMLFormulariAfegir = (llistaautors,llistaeditorials, llistageneres) => {

    let opcions='';
    let opcionsed='';
    let opcionsge='';

    // Creem les opcions del select, a partir de les dades
    for (let i of llistaautors.autors)  {
   
        opcions += "<option value='" + i.id_autor + "'>"+i.nom+" "+i.cognoms +"</option>"
    }

    for (let i of llistaeditorials.editorials)  {
   
        opcionsed += "<option value='" + i.id_editorial + "'>"+i.nom+"</option>"
    }

    for (let i of llistageneres.generes)  {
   
        opcionsge += "<option value='" + i.id_genere + "'>"+i.genere+"</option>"
    }

    let html=`

     <form class="row g-0">    
        <div class="col-md-12 mb-3" >
            <label for="titolllibre" class="form-label">Titol del llibre</label>
            <input type="text" class="form-control" id="titolllibre" placeholder="Títol del llibre">          
        </div>
        <div class="col-md-4" mb-3>
            <label for="autorllibre" class="form-label">Autor</label>
            <select id="autorllibre" class="form-select" name="autorllibre">
            
            ${ opcions }
            
            </select>
        </div>
        <div class="col-md-4 mb-3">
            <label for="editorialllibre" class="form-label">Editorial</label>
            <select id="editorialllibre" class="form-select" name="editorialllibre">
            
            ${ opcionsed }
            
            </select>
        </div>

        <div class="col-md-4 mb-3">
            <label for="generellibre" class="form-label">Gènere</label>
            <select id="generellibre" class="form-select" name="generellibre">
            
            ${ opcionsge }
            
            </select>
        </div>

        <div class="col-md-8 mb-3">
            <label for="sinopsillibre" class="form-label">Sinopsi</label>
            <textarea class="form-control" id="sinopsillibre" rows="3"></textarea>
        </div>

        <div class="col-md-4 mb-3">
            <label for="imatgellibre" class="form-label">Imatge Portada</label>
            <input class="form-control" type="file" id="imatgellibre">
        </div>

        <div class="col-md-3 mb-3">
            <button id="enviarllibre" type="button" class="btn btn-warning">Enviar</button>
        </div>


    </form>
    `
    




    return html
}
export const creaHTMLlistaLlibres = (llistallibres, llistaautors,llistaeditorials,llistageneres) =>{

    let html=`<table class='table'>
    <thead><tr><th>#Id</th><th>Llibres</th><th>Autors</th><th>Gènere</th><th>Editorials</th><th class='esborrar'>Esborrar</th></tr></thead><tbody>`

    for (let i of llistallibres.llibres)  {
   
        let cad_autors= llistaautors.cercaAutors(i.id_autors)
        let cad_editorials = llistaeditorials.cercaEditorial(i.id_editorial)
        let cad_generes = llistageneres.cercaGenere(i.id_genere)
        html += `<tr ><td>${i.id_llibre}</td><td>${i.titol}</td><td>${cad_autors}</td><td>${cad_generes}</td><td>${cad_editorials}</td><td class='esborrar'>Au</td></tr>`
        console.log(i.titol)


    }
    html +=`</tbody></table>`
    return html;


}



    
    

