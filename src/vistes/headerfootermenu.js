import headerHtml from "../templates/header.html"
import footerHtml from "../templates/footer.html"
import menuHtml from "../templates/menu.html";

export const header = () => {


    let cap= document.createElement('div');
    cap.innerHTML=headerHtml
    document.body.append(cap)



}

export const footer = () => {


    let cap= document.createElement('div');
    cap.innerHTML=footerHtml
    document.body.append(cap)


}


export const menu = () => {


    let cap= document.createElement('div');
    cap.innerHTML=menuHtml
    document.body.append(cap)


}



