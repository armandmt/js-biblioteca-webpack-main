
export const ocultaLlistaLlibres = () => {


    

}

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
        html += `<tr id="${v.id_llibre}" ><td>${v.id_llibre}</td>
        <td>${v.titol}</td><td>${cad_autors}
        </td><td>${cad_generes} </td><td>${cad_editorials}
        </td><td>${v.valoracio}</td>
        <td>
        <a href=""><img class="vide" width=22 src="./assets/img/veure.png"></a> 
        <a href=""><img class="mutare" width=22 src="./assets/img/modificar.png"></a>
        <a href=""><img class="delere" width=22 src="./assets/img/esborrar.png"></a>
        <input class="esborrar form-check-input invisible" type="checkbox" value="" id="esb${v.id_llibre}""></td></tr>`
        //console.log(v.titol)
        
    });

    
    html +=`</tbody></table>`
    return html;


}


export const veureLlibre = (llibre) => {



    console.log(llibre);


}