class Book {
  constructor() {
    this.book = {};
  }
  withTitle(title) {
    this.book.title = title;
    return this;
  }
  withAuthor(author) {
    this.book.author = author;
    return this;
  }
  withISBN(ISBN) {
    this.book.ISBN = ISBN;
    return this;
  }
  withPrice(price) {
    this.book.price = price;
    return this;
  }
  withAvailability(availability) {
    this.book.availability = availability;
    return this;
  }
  create() {
    return this.book;
  }
}

module.exports = {Book};