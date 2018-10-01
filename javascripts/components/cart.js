
import {books} from './store.js'
import {bookString, printToDom} from '../helpers/util.js';

let addCart = (numbers) => { //imoprts from main.js buttons
    let newerString = bookString(numbers)
    console.log(`"button function ${numbers} works"`)
    printToDom(newerString, 'cartItem' );
};

export {addCart}