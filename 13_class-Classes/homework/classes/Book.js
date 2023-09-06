// Template that represents a book
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

  withTitle(title) {
    this.title = title;
    return this;
  }
  withAuthor(author) {
    this.author = author;
    return this;
  }
  withISBN(ISBN) {
    /* We could add ISBN verification, but there are two
    different ISBN identification and it will complicate
    the tests if we add this. */
    this.ISBN = ISBN;
    return this;
  }
  withPrice(price) {
    if (price < 0 || typeof price != "number")
      throw new Error("Invalid book price.");
    this.price = price;
    return this;
  }
  withAvailability(availability) {
    this.availability = availability;
    return this;
  }
}

module.exports = { Book };
