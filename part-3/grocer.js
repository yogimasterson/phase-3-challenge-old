let shoppingCart = []
const cart_item_count = document.getElementById('cart-item-count')
const cart_button = document.getElementById("cart-button")
const onion_button = document.getElementById("onion-button")
const tomato_button = document.getElementById("tomato-button")
const carrot_button = document.getElementById("carrot-button")
const cold_cut_button = document.getElementById("cold-cut-button")
const orange_juice_button = document.getElementById("orange-juice-button")
const ice_cream_button = document.getElementById("ice-cream-button")
const pizza_button = document.getElementById("pizza-button")
const clear_button = document.getElementById("clear-button")

clear_button.addEventListener("click", function() {
    cart_item_count.innerHTML = '0'
    shoppingCart = []
})

if (!shoppingCart) {
	cart_item_count.innerHTML = '0'
} else {
	cart_item_count.innerHTML = shoppingCart.length
}

cart_button.addEventListener("click", function() {
	console.log(shoppingCart)
})

onion_button.addEventListener("click", function() {
  shoppingCart.push(["Onion", "$1.11"])
	document.getElementById('cart-item-count').innerHTML = shoppingCart.length
})

tomato_button.addEventListener("click", function() {
  shoppingCart.push(["Tomato", "$1.56"])
	document.getElementById('cart-item-count').innerHTML = shoppingCart.length
})

carrot_button.addEventListener("click", function() {
  shoppingCart.push(["Carrots", "$2.88"])
	document.getElementById('cart-item-count').innerHTML = shoppingCart.length
})

cold_cut_button.addEventListener("click", function() {
  shoppingCart.push(["Cold Cuts", "$1.47"])
	document.getElementById('cart-item-count').innerHTML = shoppingCart.length
})

orange_juice_button.addEventListener("click", function() {
  shoppingCart.push(["Orange Juice", "$2.52"])
	document.getElementById('cart-item-count').innerHTML = shoppingCart.length
})

ice_cream_button.addEventListener("click", function() {
  shoppingCart.push(["Ice Cream", "$14.08"])
	document.getElementById('cart-item-count').innerHTML = shoppingCart.length
})

pizza_button.addEventListener("click", function() {
  shoppingCart.push(["Pizza", "$16.61"])
	document.getElementById('cart-item-count').innerHTML = shoppingCart.length
})

function createShoppingList(array) {
  let div = document.getElementById('myList');
  let ul = document.createElement('ul');

  for (let i = 0; i < array.length; i++) {
    let li = document.createElement('li');
      
    li.appendChild(document.createTextNode(array[i]));
    console.log(ul.appendChild(li));
    
    div.appendChild(ul);
  }
}

createShoppingList(shoppingCart);

// Modal Code
var modal = document.getElementById('myModal')
var btn = document.getElementById("cart-button")
var span = document.getElementsByClassName("close")[0]

btn.onclick = function() {
    modal.style.display = "block"
}

span.onclick = function() {
    modal.style.display = "none"
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none"
    }
}