const { User } = require("../classes/User");

class Order {
  constructor() {
    this.user;
  }
  withUser(user) {
    if (!(user.constructor === User))
      throw new Error("User input is not valid.");
    this.user = user;
    return this;
  }
  show() {
    const userCart = this.user.cart;
    const booksNames = userCart.booksList.map((book) => book.title);
    if (booksNames.length === 0) {
      console.log("Cart is empty.");
    } else {
      console.log(`
      User information:
          - name: ${this.user.name}
          - email: ${this.user.email}
          - ID: ${this.user.ID}

      Book/s to purchase: 
          - ${booksNames.join(`
          - `)}
          
      Total price:
          - PLN ${userCart.calculateTotalPrice()}   
          `);
    }
  }
  #cleanUserCart() {
    const userCart = this.user.cart;
    const booksList = [...userCart.booksList];
    booksList.forEach((book) => userCart.removeBook(book));
  }

  cancel() {
    this.#cleanUserCart();
    console.log("Order have been cancelled.");
  }

  place() {
    const userCart = this.user.cart;
    if (userCart.booksList === [])
      throw new Error("Cannot place and empty order.");
    this.#cleanUserCart();
    console.log("Your order has been placed.");
  }
}

module.exports = { Order };
