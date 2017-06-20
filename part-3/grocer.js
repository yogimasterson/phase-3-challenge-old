const cart = []

if (!cart) {
	document.getElementById('cart-item-count').innerHTML = '0'
} else {
	document.getElementById('cart-item-count').innerHTML = cart.length
}

document.getElementById("cart-button").addEventListener("click", function() {
	console.log(cart);
})

document.getElementById("onion").addEventListener("click", function() {
  cart.push("Onion");
	document.getElementById('cart-item-count').innerHTML = cart.length
});

document.getElementById("tomato").addEventListener("click", function() {
  cart.push("Tomato");
	document.getElementById('cart-item-count').innerHTML = cart.length
});

document.getElementById("carrot").addEventListener("click", function() {
  cart.push("Carrots");
	document.getElementById('cart-item-count').innerHTML = cart.length
});

document.getElementById("coldCuts").addEventListener("click", function() {
  cart.push("Cold Cuts");
	document.getElementById('cart-item-count').innerHTML = cart.length
});

document.getElementById("orangeJuice").addEventListener("click", function() {
  cart.push("Orange Juice");
	document.getElementById('cart-item-count').innerHTML = cart.length
});

document.getElementById("iceCream").addEventListener("click", function() {
  cart.push("Ice Cream");
	document.getElementById('cart-item-count').innerHTML = cart.length
});

document.getElementById("pizza").addEventListener("click", function() {
  cart.push("Pizza");
	document.getElementById('cart-item-count').innerHTML = cart.length
});