import {addCart} from '../components/cart.js'
import {books} from '../components/store.js'

const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
};

const bookString = (bookNum) => {
    let i = 0;
    let newString = '';
    for(i=0;i<books.length;i++){
        if(bookNum === i){
            newString += `<div id="person${[i]}" class="personAll ">`;
            newString +=    `<img src="${books[i].image}" class="img-fluid " alt="...">`
            newString +=    `<h8>${books[i].title}</h8>`
            newString +=    `<h8>${books[i].price}</h8>`
            newString +=  `</div>`
        };
    };
    return newString;
};


export {printToDom, bookString}
