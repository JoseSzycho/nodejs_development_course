const readline = require("readline");
const { Order } = require("./Order");
class Navigation {
  constructor() {
    this.users;
    this.books;
    this.actualUser;
    this.userInput = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  withUsers(users) {
    this.users = users;
    return this;
  }
  withBooks(books) {
    this.books = books;
    return this;
  }
  withActualUser(actualUser) {
    this.actualUser = actualUser;
    return this;
  }
  mainMenu() {
    console.log(`
      1. Change user
      2. Show books on sale
      3. Add book to cart
      4. Remove book from cart
      5. Show order
      6. Place order
      7. Cancel order`);

    this.userInput.question("\nEnter option: ", (option) => {
      switch (option) {
        case "1":
          this.changeUser();
          break;
        case "2":
          this.booksOnSale();
          break;
        case "3":
          this.addBook();
          break;
        case "4":
          this.removeBook();
          break;
        case "5":
          this.showOrder();
      }
    });
  }

  changeUser() {
    console.log("\nSelect an user.");
    for (let i = 0; i < this.users.length; i++) {
      console.log(`${i + 1} - User ID: ${this.users[i].ID}`);
    }
    this.userInput.question("Enter option: ", (option) => {
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
      console.log(`Book ${i + 1}
      Title: ${this.books[i].title}
      Author: ${this.books[i].author}
      ISBN: ${this.books[i].ISBN}
      Price: ${this.books[i].price}
      Availability: ${this.books[i].availability}`);
    }
    if (flag === false) this.mainMenu();
  }
  addBook() {
    console.log("\n Select the book number to add to cart");
    this.booksOnSale(true);

    this.userInput.question("\nEnter option: ", (option) => {
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
      console.log(`Book ${i + 1}
        Title: ${actualUserCart.booksList[i].title}
        Author: ${actualUserCart.booksList[i].author}
        ISBN: ${actualUserCart.booksList[i].ISBN}
        Price: ${actualUserCart.booksList[i].price}`);
    }

    this.userInput.question("\nEnter option: ", (option) => {
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
}

module.exports = { Navigation };
