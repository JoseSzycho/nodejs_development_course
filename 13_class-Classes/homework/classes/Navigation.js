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
        // Invalid input
        console.log("Invalid option.");
        this.mainMenu();
      } else {
        // Valid input
        this.actualUser = this.users[option - 1];
        console.log(`\nYour selected user ID: ${this.actualUser.ID}`);
        this.mainMenu();
      }
    });
  }
  /**
   * // Shows the books that are for sale
   * @param {boolean} flag - If true, skips calling to mainMenu(), so it can
   * be used with others methods
   */
  booksOnSale(flag = false) {
    console.log("\nThe books on sale are: ");
    // Printing books
    for (let i = 0; i < this.books.length; i++) {
      console.log(`\nBook ${i + 1}`);
      this.showBook(this.books[i]);
    }
    if (flag === false) this.mainMenu();
  }
  /**
   * Search for a specific book by its exact title.
   */
  searchBook() {
    // User input for book title
    this.userInput.question("\nEnter book title: ", (bookTitle) => {
      // Searching if book is found
      const book = this.books.filter((book) => book.title === bookTitle);
      if (book[0] === undefined) {
        // If not found
        console.log("\nBook not found.");
      } else {
        // If found
        console.log("\nBook found");
        this.showBook(book[0]);
      }
      this.mainMenu();
    });
  }
  /**
   * Methods that adds a book to the cart
   */
  addBook() {
    console.log("\n Select the book number to add to cart");
    // Shows books on sale
    this.booksOnSale(true);

    // User input
    this.userInput.question("\nEnter option:", (option) => {
      console.log("");
      if (option < 1 || option > this.books.length) {
        // If book is not in sale
        console.log("Invalid option.");
        this.mainMenu();
      } else {
        // If book is in sale, we add it to the users cart.
        this.actualUser.cart.addBook(this.books[option - 1]);
        this.mainMenu();
      }
    });
  }
  /**
   * Removes a book from user cart
   */
  removeBook() {
    // Shorthand for getting user cart
    const actualUserCart = this.actualUser.cart;
    if (actualUserCart.booksList.length === 0) {
      // If cart is empty
      console.log("\n Cart is empty.");
      this.mainMenu();
      return;
    }

    // If cart is not empty

    console.log("\n Select the book number to remove from cart");
    // Showing users cart books
    for (let i = 0; i < actualUserCart.booksList.length; i++) {
      console.log(`\nBook ${i + 1}`);
      this.showBook(actualUserCart.booksList[i]);
    }
    // User input to decide which book to delete
    this.userInput.question("\nEnter option: ", (option) => {
      console.log("");
      if (option < 1 || option > actualUserCart.booksList.length) {
        // If it does not have the book
        console.log("Invalid option.");
        this.mainMenu();
      } else {
        // If it have the book
        const book = actualUserCart.booksList[option - 1];
        actualUserCart.removeBook(book);
        this.mainMenu();
      }
    });
  }
  /**
   * Shows the user cart and total amount. This is only
   * representative, that is why we create the order instance
   * for later deleting the reference
   */
  showOrder() {
    let order = new Order().withUser(this.actualUser);
    order.show();
    order = null; // Delete reference
    this.mainMenu();
  }
  /**
   * Shows the user cart and total amount and place the
   * order. This is only representative, that is why we
   * create the order instance for later deleting the reference
   */
  placeOrder() {
    let order = new Order().withUser(this.actualUser);
    order.show();
    order.place();
    order = null;
    this.mainMenu();
  }
  /**
   * Shows the user cart and total amount and place the
   * order with a discount in %. This is only representative,
   * that is why we create the order instance for later
   * deleting the reference
   */
  placeDiscountedOrder() {
    // Expecting user input for discount
    this.userInput.question("\nEnter discount in %: ", (discount) => {
      if (discount < 0 || discount > 100) {
        // If discount is out of range
        console.log("Invalid discount.");
        this.mainMenu();
      } else {
        // If discount is in range
        let order = new Order().withUser(this.actualUser);
        order.show(discount); // Shows order with the applied discount
        order.place();
        order = null;
        this.mainMenu();
      }
    });
  }
  /**
   * Cancel the user order. It removes the books from its
   * cart and returns the availability for each book.
   */
  cancelOrder() {
    let order = new Order().withUser(this.actualUser);
    order.cancel();
    order = null;
    this.mainMenu();
  }
  /**
   * Prints the book information. Used as an auxiliary
   * method for other methods.
   * @param {Book} book - The book to print.
   */
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
