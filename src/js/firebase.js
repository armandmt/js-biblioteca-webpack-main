
export async function obtenirDades()  {

    let data1,data2,data3,data4;
    

    try {

        data1 = await fetch('https://biblioteca-9f853-default-rtdb.europe-west1.firebasedatabase.app/llibres.json')
        data1 = await data1.json();
        
        data2 = await fetch('https://biblioteca-9f853-default-rtdb.europe-west1.firebasedatabase.app/autors.json')
        data2 = await data2.json();

        data3 = await fetch('https://biblioteca-9f853-default-rtdb.europe-west1.firebasedatabase.app/editorials.json')
        data3 = await data3.json();

        data4 = await fetch('https://biblioteca-9f853-default-rtdb.europe-west1.firebasedatabase.app/generes.json')
        data4 = await data4.json();


        
        return ([data1,data2,data3,data4]);



    }
    catch {

        console.log("... la hemos")
        return "null"
    }
   





}

export async function setLlibres(llibre,id) {

    try {


        const res= await  fetch('https://biblioteca-9f853-default-rtdb.europe-west1.firebasedatabase.app/llibres/'+ id+'.json',
        {
             method: 'PUT',
             headers: {
                 'Content-Type': 'application/json'
             },
             body: JSON.stringify(llibre)
        })
     

    }
    catch (error) {


    }


}


export async function delLlibre(id)
{

        try {

            const res= await  fetch('https://biblioteca-9f853-default-rtdb.europe-west1.firebasedatabase.app/llibres/'+ id+'.json',
        {
             method: 'DELETE',
                          
        })

        }
        catch (error) {

        }


}