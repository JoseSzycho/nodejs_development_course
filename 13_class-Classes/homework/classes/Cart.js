// Template that represents a shopping cart
class Cart {
  #booksList;
  constructor() {
    this.#booksList = [];
  }

  // Returns booksList
  get booksList() {
    return this.#booksList;
  }

  // Adds a book after a verification
  addBook(book) {
    if (book.availability > 0) {
      // If the book is available
      book.availability -= 1; // Decrease book count
      this.booksList.push(book); // Store book in the cart
      console.log("Book added to the cart.");
    } else {
      // If the book is not available
      console.log("Book is not available.");
    }
  }

  // Removes a book after a verification
  removeBook(book) {
    // Searching for the book index in the list
    const index = this.booksList.indexOf(book);

    if (index === -1) {
      // If the book is not found
      console.log("Book is not present in the cart.");
    } else {
      // If the book is found
      book.availability += 1; // Increase book count
      this.booksList.splice(index, 1); // Remove book from the cart
      console.log("Book removed from the cart.");
    }
  }

  // Calculates the total price of the cart
  calculateTotalPrice() {
    const totalPrice = this.booksList.reduce(
      (acc, book) => acc + book.price,
      0
    );

    return totalPrice;
  }
}

module.exports = { Cart };
