
export class EditorialsList {

    constructor(editorials) {

        this.editorials = editorials;
        //this.carregarLocalStorage();
        console.log(this.editorials);
    }


    nouEditorial(editorial) {

        this.editorials.push(editorial);
        this.desarLocalStorage();

    }
    cercaEditorial(id) {

        for (let i of this.editorials)
        {
            if (i.id_editorial == id)
                return i.nom
        }
        return "Editorial Desconeguda"
    }
    

    desarLocalStorage() {

        localStorage.setItem('editorials',JSON.stringify(this.editorials));
    }
    carregarLocalStorage() {


        this.editorials = ( localStorage.getItem('editorials') )
                        ? JSON.parse( localStorage.getItem('editorials') )
                        : [];

    }


}

