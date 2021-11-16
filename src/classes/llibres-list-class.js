import Llibres from './llibres-class';

export class LlibresList {

    llibres;
    
    constructor() {

        this.carregarLocalStorage();
        console.log(this.llibres);
    }

    darrer_element() {

        return this.llibres.at(-1).id_llibre
    }

    nouLlibre(llibre) {

        this.llibres.push(llibre);
        this.desarLocalStorage();


    }

    desarLocalStorage() {

        localStorage.setItem('llibres',JSON.stringify(this.llibres));
    }
    carregarLocalStorage() {


        this.llibres = ( localStorage.getItem('llibres') )
                        ? JSON.parse( localStorage.getItem('llibres') )
                        : [];

    }


}

