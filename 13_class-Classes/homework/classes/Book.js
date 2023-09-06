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
    this.ISBN = ISBN;
    return this;
  }
  withPrice(price) {
    this.price = price;
    return this;
  }
  withAvailability(availability) {
    this.availability = availability;
    return this;
  }
}

module.exports = { Book };
