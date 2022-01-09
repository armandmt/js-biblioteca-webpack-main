
export class LlibresList {

   
    constructor(llibres) {

        this.llibres=llibres

      
        console.log("INICI Llista des de del constructor")
        console.log(this.llibres);
        console.log("FI Llista des de del constructor")

    }

    darrer_element() {

        console.log("Dagger element, dins",this.llibres.slice(-1))
        //console.log("Dagger id element, dins",this.llibres.slice(-1).id_llibre)

        return this.llibres.slice(-1)[0].id_llibre
    }

    nouLlibre(llibre) {

        this.llibres.push(llibre);
        return this.darrer_element();
        //this.desarLocalStorage();


    }
    esborraLlibre(id) {
        console.log(id)
        
        const trobat = this.llibres.find (element => element.id_llibre === id)
        console.log("trobat",trobat)
        const trobatindex = this.llibres.findIndex (element => element.id_llibre === id)
        console.log("trobat",trobatindex)
        this.llibres.splice(trobatindex,1)
        console.log(this.llibres)

        //;
        //this.llibres.foreach( (v,i) => {

            // console.log (typeof v.id)
            // if (v.id==id)
            // {
            //     delete this.llibres[i];
            //     console.log (this.llibres)
            // }
        //})
        
    }
    filtraPerAutors(autors) {

        // Primer filter recorre tots els llibres
        // Segon map recorre l'array d'autors filtrats
        // i comprova si els autors dels llibres que recorrem el contenen
        const d =this.llibres.filter((element) => 
            autors.map(ele => element.id_autors.includes(ele)).includes(true)
            
             )
        
        return d;
        // autor serà una cadena, amb un text
        // autorlist l'bojecte que conté la llista d'autors
        // retornarà un array amb tots els id coincidents



        // let filtrat = this.llibres.filter( element => element. )

    }

    desarLocalStorage() {

        localStorage.setItem('llibres',JSON.stringify(this.llibres));
    }
    carregarLocalStorage() {

        //console.log("Aqui no entro")
        //this.llibres = ( localStorage.getItem('llibres') )
        //                ? JSON.parse( localStorage.getItem('llibres') )
        //                : [];

    }


}

