
export class LlibresList {

   
    constructor(llibres) {

        this.llibres=llibres

      
        console.log("INICI Llista des de del constructor")
        console.log(this.llibres);
        console.log("FI Llista des de del constructor")

    }

    darrer_element() {

        return this.llibres.at(-1).id_llibre
    }

    nouLlibre(llibre) {

        this.llibres.push(llibre);
        return this.darrer_element();
        //this.desarLocalStorage();


    }
    esborraLlibre(id) {
        this.llibres.foreach( (v,i) => {

            if (v.id==id)
            {
                delete this.llibres[i];
                console.log (this.llibres)
            }
        })
        
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

