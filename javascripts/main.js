// import {printToDom} from './helpers/util.js'
import {addCart} from './components/cart.js'

const cartButton1 = document.getElementById("cartButton1")
const cartButton2 = document.getElementById("cartButton2")

cartButton1.addEventListener("click", function (){addCart(0)}); // from here goes to cart.js
cartButton2.addEventListener("click", function (){addCart(1)});


