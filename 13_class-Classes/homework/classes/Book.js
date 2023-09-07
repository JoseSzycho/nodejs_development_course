/** Class that represents a book */
class Book {
  constructor() {
    this.title;
    this.author;
    this.ISBN;
    this.price;
    this.availability;
  }
  /* All the methods bellow are used for setting the 
  class properties. This pattern is used for getting 
  better code readability and a better verbose syntax
  */

  /**
   * Sets the book title
   * @param {string} title - The title
   * @returns {this} - The class reference
   */
  withTitle(title) {
    // Checking if a valid title
    if (typeof title != "string") throw new Error("Invalid book title.");

    this.title = title;
    return this;
  }

  /**
   * Sets the book author
   * @param {string} author - The author
   * @returns {this} - The class reference
   */
  withAuthor(author) {
    /* Basic pattern for names. It can cause problems for
    some languages */
    const authorPattern = /^[A-Za-z\s'-]+$/;

    // Checking for valid author name
    if (!authorPattern.test(author)) throw new Error("Author is not valid.");

    this.author = author;
    return this;
  }

  /**
   * Sets the book ISBN with no verification, for easier implementation.
   * @param {string} ISBN - The ISBN
   * @returns {this} - The class reference
   */
  withISBN(ISBN) {
    /* We could add ISBN verification, but there are two
    different ISBN identification and it will complicate
    the tests if we add this. */
    if(typeof ISBN != "string") throw new Error("ISBN is not valid.")
    this.ISBN = ISBN;
    return this;
  }

  /**
   * Sets the book price
   * @param {number} price - The price
   * @returns {this} - The class reference
   */
  withPrice(price) {
    // Checking for valid price
    if (price < 0 || typeof price != "number")
      throw new Error("Invalid book price.");

    this.price = price;
    return this;
  }

  /**
   * Sets the availability of the book
   * @param {number} availability - The availability
   * @returns {this} - The class reference
   */
  withAvailability(availability) {
    // Checking for valid availability
    if (availability < 0 || typeof availability != "number")
      throw new Error("Invalid book availability.");

    this.availability = availability;
    return this;
  }
}

module.exports = { Book };
