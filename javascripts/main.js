import {printToDom} from './helpers/util.js'
import {addCart} from './components/cart.js'


const cartButton1 = document.getElementById("cartButton1")
const cartButton2 = document.getElementById("cartButton2")

document.getElementById("cartButton1").addEventListener("click", addCart);
document.getElementById("cartButton2").addEventListener("click", addCart);


