// Import Classes Here
const Product = require('./Product');
const Cart = require('./Cart');



const cart = new Cart();

const p1 = new Product('Widget', 19.99, 'A useful gadget');
const p2 = new Product('Gizmo', 9.99, 'Another useful gadget');

cart.addProduct(p1);
cart.addProduct(p2);

console.log(cart.total); // 29.98

cart.removeProduct(0);

console.log(cart.total);


// DO NOT EDIT BELOW THIS LINE
try {
    module.exports = {
        Product,
    }
} catch(e){

}

try {
    module.exports = {
        Product,
        Cart
    }
} catch(e){

}

try {
    module.exports = {
        Product,
        Cart,
        Customer
    }
} catch(e){

}

try {
    module.exports = {
        Product,
        Cart,
        Customer,
        Auth
    }
} catch(e){

}