const Customer = require('./Customer.js');
class Auth {
    constructor() {
      this.customers = []; 
    }
  
    register(name, email, shippingAddress) {
      const customer = new Customer(name, email, shippingAddress);
      this.customers.push(customer);
    }
  
    login(email) {
      return this.customers.find((customer) => customer.email === email)|| null;
    }
  }
  
  module.exports = Auth;