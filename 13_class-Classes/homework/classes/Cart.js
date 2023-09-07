/**Class that represents a cart */
class Cart {
  #booksList;
  constructor() {
    this.#booksList = [];
  }

  /**
   * Gets the book list
   * @returns {Array} - The book list
   */
  get booksList() {
    return this.#booksList;
  }

  /**
   * Adds a book to the cart
   * @param {Book} book - The book
   */
  addBook(book) {
    if (book.availability > 0) {
      // If the book is available
      book.availability -= 1; // Decrease book count
      this.booksList.push(book); // Store book in the cart
      console.log(`Book "${book.title}" added to the cart.`);
    } else {
      // If the book is not available
      console.log("Book is not available.");
    }
  }

  /**
   * Removes a book from the cart
   * @param {Book} book - The book
   */
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
      console.log(`Book "${book.title}" removed from the cart.`);
    }
  }

  /**
   * Calculates the total price of all the books in the cart
   * @returns {number} - The total price
   */
  calculateTotalPrice() {
    const totalPrice = this.booksList.reduce(
      (acc, book) => acc + book.price,
      0
    );

    return totalPrice;
  }
}

module.exports = { Cart };
