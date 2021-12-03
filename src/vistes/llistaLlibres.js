
export const creaHTMLlistaLlibres = (llistallibres, llistaautors,llistaeditorials,llistageneres) =>{

    let html=`<table class='table'>
    <thead><tr><th>#Id</th><th>Llibres</th><th>Autors</th><th>Gènere</th>
    <th>Editorials</th><th>Valoració</th>
    <th class='esborrar invisible'><button id="esborraritems" type="button" class="btn btn-outline-danger btn-sm">Esborrar</button>
    </th></tr></thead><tbody>`

    
    llistallibres.llibres.forEach( (v,i,array) => {
        
        let cad_autors= llistaautors.cercaAutors(v.id_autors)
        let cad_editorials = llistaeditorials.cercaEditorial(v.id_editorial)
        let cad_generes = llistageneres.cercaGenere(v.id_genere)
        html += `<tr ><td>${v.id_llibre}</td>
        <td><a href="">${v.titol}</a></td><td>${cad_autors}
        </td><td>${cad_generes} </td><td>${cad_editorials}
        </td><td>${v.valoracio}</td>
        <td><input class="esborrar form-check-input invisible" type="checkbox" value="" id="esb${v.id_llibre}""></td></tr>`
        //console.log(v.titol)
        
    });
    
   

    

       


    
    html +=`</tbody></table>`
    return html;


}


export const veureLlibre = (llibre) => {



    console.log(llibre);


}