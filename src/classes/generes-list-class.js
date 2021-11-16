
export class GeneresList {

    constructor() {

        this.carregarLocalStorage();
        console.log(this.generes);
    }

    nouGenere(genere) {

        this.generes.push(genere);
        this.desarLocalStorage();


    }
    cercaGenere(id) {

        for (let i of this.generes)
        {
            if (i.id_genere == id)
                return i.genere
        }
        return "Genere Desconegut"
    }
    cercaGeneres(id_array) {
       // No s'utiitza aquí 
        let retorn='';

        for (let i of id_array)
        {
            retorn += this.cercaGenere(i)+"-"
        }
        return retorn.slice(0,-1); // Elimina el darrer '-'
    }

    desarLocalStorage() {

        localStorage.setItem('generes',JSON.stringify(this.generes));
    }
    carregarLocalStorage() {


        this.generes = ( localStorage.getItem('generes') )
                        ? JSON.parse( localStorage.getItem('generes') )
                        : [];

    }


}

