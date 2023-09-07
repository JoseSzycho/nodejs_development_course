// Imports
const readline = require("readline");
const { Order } = require("./Order");

/**
 * Class that provides and interactive menu for
 * simulating the book store and the interaction
 * between different classes.
 */
class Navigation {
  constructor() {
    this.users; // list of all users
    this.books; // list of all books
    this.actualUser; // selected user
    // User input for using menu
    this.userInput = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }
  /**
   * Sets the users
   * @param {Array} users - The array that contain users
   * @returns {this} - Reference to the class
   */
  withUsers(users) {
    this.users = users;
    return this;
  }
  /**
   * Sets the users
   * @param {Array} books - The array that contain books
   * @returns {this} - Reference to the class
   */
  withBooks(books) {
    this.books = books;
    return this;
  }
  /**
   * Sets and user for creating instance of class
   * @param {User} actualUser - The user
   * @returns {this} - The class reference
   */
  withActualUser(actualUser) {
    this.actualUser = actualUser;
    return this;
  }
  /**
   * Shows an interactive menu
   */
  mainMenu() {
    console.log(`
    --------MAIN MENU--------
      1. Change user
      2. Show books on sale
      3. Search book
      4. Add book to cart
      5. Remove book from cart
      6. Show order
      7. Place order
      8. Place order with discount
      9. Cancel order
      
    Press any not valid key for 
    exiting from this menu or sub menu.`);

    this.userInput.question("\nEnter option: ", (option) => {
      switch (option) {
        case "1":
          this.changeUser();
          break;
        case "2":
          this.booksOnSale();
          break;
        case "3":
          this.searchBook();
          break;
        case "4":
          this.addBook();
          break;
        case "5":
          this.removeBook();
          break;
        case "6":
          this.showOrder();
          break;
        case "7":
          this.placeOrder();
          break;
        case "8":
          this.placeDiscountedOrder();
          break;
        case "9":
          this.cancelOrder();
          break;
        default:
          this.userInput.close();
      }
    });
  }

  /**
   * Logic for changing user
   */
  changeUser() {
    console.log("\nSelect an user.");
    // Printing all users
    for (let i = 0; i < this.users.length; i++) {
      console.log(`${i + 1} - User ID: ${this.users[i].ID}`);
    }

    // Selecting the user
    this.userInput.question("\nEnter option: ", (option) => {
      // user input validation
      if (option < 1 || option > this.users.length) {
        console.log("Invalid option.");
        this.mainMenu();
      } else {
        this.actualUser = this.users[option - 1];
        console.log(`\nYour selected user ID: ${this.actualUser.ID}`);
        this.mainMenu();
      }
    });
  }

  booksOnSale(flag = false) {
    console.log("\nThe books on sale are: ");
    for (let i = 0; i < this.books.length; i++) {
      console.log(`\nBook ${i + 1}`);
      this.showBook(this.books[i]);
    }
    if (flag === false) this.mainMenu();
  }
  searchBook() {
    this.userInput.question("\nEnter book title: ", (bookTitle) => {
      const book = this.books.filter((book) => book.title === bookTitle);
      if (book[0] === undefined) {
        console.log("\nBook not found.");
      } else {
        console.log("\nBook found");
        this.showBook(book[0]);
      }
      this.mainMenu();
    });
  }
  addBook() {
    console.log("\n Select the book number to add to cart");
    this.booksOnSale(true);

    this.userInput.question("\nEnter option:", (option) => {
      console.log("");
      if (option < 1 || option > this.books.length) {
        console.log("Invalid option.");
        this.mainMenu();
      } else {
        this.actualUser.cart.addBook(this.books[option - 1]);
        this.mainMenu();
      }
    });
  }
  removeBook() {
    const actualUserCart = this.actualUser.cart;
    if (actualUserCart.booksList.length === 0) {
      console.log("\n Cart is empty.");
      this.mainMenu();
      return;
    }

    console.log("\n Select the book number to remove from cart");

    for (let i = 0; i < actualUserCart.booksList.length; i++) {
      console.log(`\nBook ${i + 1}`);
      this.showBook(actualUserCart.booksList[i]);
    }

    this.userInput.question("\nEnter option: ", (option) => {
      console.log("");
      if (option < 1 || option > actualUserCart.booksList.length) {
        console.log("Invalid option.");
        this.mainMenu();
      } else {
        const book = actualUserCart.booksList[option - 1];
        actualUserCart.removeBook(book);
        this.mainMenu();
      }
    });
  }

  showOrder() {
    let order = new Order().withUser(this.actualUser);
    order.show();
    order = null;
    this.mainMenu();
  }
  placeOrder() {
    let order = new Order().withUser(this.actualUser);
    order.show();
    order.place();
    order = null;
    this.mainMenu();
  }
  placeDiscountedOrder() {
    this.userInput.question("\nEnter discount in %: ", (discount) => {
      if (discount < 0 || discount > 100) {
        console.log("Invalid discount.");
        this.mainMenu();
      } else {
        let order = new Order().withUser(this.actualUser);
        order.show(discount);
        order.place();
        order = null;
        this.mainMenu();
      }
    });
  }
  cancelOrder() {
    let order = new Order().withUser(this.actualUser);
    order.cancel();
    order = null;
    this.mainMenu();
  }

  showBook(book) {
    console.log(`
      Title: ${book.title}
      Author: ${book.author}
      ISBN: ${book.ISBN}
      Price: ${book.price}
      Availability: ${book.availability}`);
  }
}

module.exports = { Navigation };
