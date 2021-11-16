import formulari from '../templates/formu1.html'

export const createForm = () => {

    let formu = document.createElement('div');
    formu.innerHTML=formulari
    document.body.append(formu)

}