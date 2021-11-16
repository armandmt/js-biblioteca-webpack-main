import { Llibre, Autor, Editorial,Genere } from "../classes/index";

export const omplirDB = (llista,llista_autors, llista_editorials, llista_generes) => {


    let ll = new Autor(0,"Frank","Herbert");
    llista_autors.nouAutor(ll)
   
    ll = new Autor(1,"Isaac","Asimov");
    llista_autors.nouAutor(ll)

    ll = new Autor(2,"Manuel","de Pedrolo");
    llista_autors.nouAutor(ll)

    ll = new Autor(3,"Neil","Gaiman");
    llista_autors.nouAutor(ll)

    ll = new Autor(4,"Terry","Pratchett");
    llista_autors.nouAutor(ll)


    ll = new Editorial(0,"Edicions B");
    llista_editorials.nouEditorial(ll)

    ll = new Editorial(1,"Plaza&Janes");
    llista_editorials.nouEditorial(ll)
    
    ll = new Editorial(2,"Raig Verd");
    llista_editorials.nouEditorial(ll)
    

    ll = new Genere(0,"Ciencia Ficció");
    llista_generes.nouGenere(ll)

    ll = new Genere(1,"Històrica");
    llista_generes.nouGenere(ll)

    ll = new Genere(2,"Policiaca");
    llista_generes.nouGenere(ll)
    

    ll = new Llibre(0,[0],"Dune",0,"123456789","bla bla bla",10,0,"")
    llista.nouLlibre(ll);

    ll = new Llibre(1,[1],"Fundacio",1,"123456789","bla bla bla",10,0,"")
    llista.nouLlibre(ll);

    ll = new Llibre(2,[2],"Mecanoscrit del segon origen",2,"123456789","bla bla bla",10,1,"")
    llista.nouLlibre(ll);

    ll = new Llibre(3,[3,4],"Buenos Presagios",1,"123456789","ble ble ble",10,2,"")
    llista.nouLlibre(ll);

    
    


    console.log("Crido a omplir")
    




}