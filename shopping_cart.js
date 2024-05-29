// Sample list of products
const products = [
  { id: 1, name: 'Product 1', price: 10 },
  { id: 2, name: 'Product 2', price: 20 },
  { id: 3, name: 'Product 3', price: 30 }
];

// Initialize an empty cart
let cart = [];

// Function to add a product to the cart
function addToCart(productId) {
  const product = products.find(item => item.id === productId);
  if (product) {
    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
      cartItem.quantity++;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    console.log('Product added to cart:', product.name);
    displayCart();
  } else {
    console.log('Product not found!');
  }
}

// Function to remove a product from the cart
function removeFromCart(productId) {
  const index = cart.findIndex(item => item.id === productId);
  if (index !== -1) {
    cart.splice(index, 1);
    console.log('Product removed from cart');
    displayCart();
  } else {
    console.log('Product not found in cart');
  }
}

// Function to display the cart
function displayCart() {
  console.log('Cart:');
  cart.forEach(item => {
    console.log(`${item.name} - Quantity: ${item.quantity} - Price: $${item.price * item.quantity}`);
  });
  const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  console.log('Total Price:', totalPrice);
}

// Add some products to the cart
addToCart(1);
addToCart(2);
addToCart(1);
addToCart(3);

// Remove a product from the cart
removeFromCart(1);
