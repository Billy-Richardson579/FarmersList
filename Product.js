class Product{
    constructor(name,price,description){
        this.name = String(name);
        this.price = Number(price);
        this.description = String(description);
        this.inStock = true

    }
    display(){
        return `Name: ${this.name}, Price: $${this.price}, Description: ${this.description}`
    }
}
module.exports = Product;