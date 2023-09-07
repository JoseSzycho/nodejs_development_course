const { User } = require("../classes/User");

// Template thar represents an order
class Order {
  constructor() {
    this.user;
  }
  // Sets the user after a verification
  withUser(user) {
    // Checking if a valid user
    if (!(user.constructor === User))
      throw new Error("User input is not valid.");

    this.user = user;
    return this;
  }
  // Shows the user cart
  show() {
    // Short hand for access to user cart
    const userCart = this.user.cart;
    // Getting books titles from user cart
    const booksNames = userCart.booksList.map((book) => book.title);

    if (booksNames.length === 0) {
      // If there are not book names
      console.log("Cart is empty.");
    } else {
      // If there are book names
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

  // Cancels a order
  cancel() {
    // Short hand for access to user cart
    const userCart = this.user.cart;
    // Creating array with all books from user cart
    const booksList = [...userCart.booksList];
    // Removing the books from the user cart
    booksList.forEach((book) => userCart.removeBook(book));
    console.log("Order have been cancelled.");
  }

  // Place a order
  place() {
    // Short hand for access to user cart
    const userCart = this.user.cart;

    if (userCart.booksList.length === 0) {
      // If there are no books on the cart
      console.log("Order cannot been placed. Empty cart.");
    } else {
      // If there are books on the cart
      // Removing the books from the user cart
      userCart.cleanBookList();
      console.log("Your order has been placed.");
    }
  }
}

module.exports = { Order };
