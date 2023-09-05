class Book {
  constructor() {
    this.title;
    this.author;
    this.ISBN;
    this.price;
    this.availability;
  }
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
