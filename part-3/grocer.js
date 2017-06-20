const shoppingCart = []
const cart_button = document.getElementById("cart-button")
const onion_button = document.getElementById("onion-button")
const tomato_button = document.getElementById("tomato-button")
const carrot_button = document.getElementById("carrot-button")
const cold_cut_button = document.getElementById("cold-cut-button")
const orange_juice_button = document.getElementById("orange-juice-button")
const ice_cream_button = document.getElementById("ice-cream-button")
const pizza_button = document.getElementById("pizza-button")

if (!shoppingCart) {
	document.getElementById('cart-item-count').innerHTML = '0'
} else {
	document.getElementById('cart-item-count').innerHTML = shoppingCart.length
}

cart_button.addEventListener("click", function() {
	console.log(shoppingCart);
})

onion_button.addEventListener("click", function() {
  shoppingCart.push("Onion");
	document.getElementById('cart-item-count').innerHTML = shoppingCart.length
});

tomato_button.addEventListener("click", function() {
  shoppingCart.push("Tomato");
	document.getElementById('cart-item-count').innerHTML = shoppingCart.length
});

carrot_button.addEventListener("click", function() {
  shoppingCart.push("Carrots");
	document.getElementById('cart-item-count').innerHTML = shoppingCart.length
});

cold_cut_button.addEventListener("click", function() {
  shoppingCart.push("Cold Cuts");
	document.getElementById('cart-item-count').innerHTML = shoppingCart.length
});

orange_juice_button.addEventListener("click", function() {
  shoppingCart.push("Orange Juice");
	document.getElementById('cart-item-count').innerHTML = shoppingCart.length
});

ice_cream_button.addEventListener("click", function() {
  shoppingCart.push("Ice Cream");
	document.getElementById('cart-item-count').innerHTML = shoppingCart.length
});

pizza_button.addEventListener("click", function() {
  shoppingCart.push("Pizza");
	document.getElementById('cart-item-count').innerHTML = shoppingCart.length
});