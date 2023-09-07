const { User } = require("../classes/User");

/**
 * Class that represents an order
 */
class Order {
  constructor() {
    this.user;
  }
  /**
   * Sets the user
   * @param {User} user - The user
   * @returns {this} - Reference to the order class
   */
  withUser(user) {
    // Checking if a valid user
    if (!(user.constructor === User))
      throw new Error("User input is not valid.");

    this.user = user;
    return this;
  }
  /**
   * Shows the cart list with total price and
   * apply discount to total price if there is.
   * @param {number} discount - The discount
   */
  show(discount = null) {
    // Short hand for access to user cart
    const userCart = this.user.cart;
    // Getting books titles from user cart
    const booksNames = userCart.booksList.map((book) => book.title);

    if (booksNames.length === 0) {
      // If there are not book names
      console.log("Cart is empty.");
    } else {
      // If there are book names
      const totalPrice = userCart.calculateTotalPrice();
      console.log(`
      User information:
          - name: ${this.user.name}
          - email: ${this.user.email}
          - ID: ${this.user.ID}

      Book/s to purchase: 
          - ${booksNames.join(`
          - `)}
          
      Total price:
          - PLN ${totalPrice}   
          `);

      if (discount > 0 && discount <= 100) {
        console.log(`
      Total price with discount:
          - PLN ${totalPrice - totalPrice * (discount / 100)}
          `);
      }
    }
  }

  /**
   * Remove all books from user cart and recovery the
   * availability of the books.
   */
  cancel() {
    // Short hand for access to user cart
    const userCart = this.user.cart;
    // Creating array with all books from user cart
    const booksList = [...userCart.booksList];
    // Removing the books from the user cart
    booksList.forEach((book) => userCart.removeBook(book));
    console.log("Order have been cancelled.");
  }

  /**
   * Place order in a representative way, then it
   * removes the books from user cart.
   */
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
