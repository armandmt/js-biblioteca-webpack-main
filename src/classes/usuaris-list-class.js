export class UsuarisList {


    usuaris;

    constructor() {

   
        this.usuaris = [];

    }
    async obtenirDades()
    {

        let data1 = await fetch('https://biblioteca-9f853-default-rtdb.europe-west1.firebasedatabase.app/llibres.json')
        data1 = await data1.json();
        
        console.log("hola2")
        return data1;
    }

}