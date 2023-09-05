class Cart {
  constructor() {
    this.user;
    this.booksList = [];
  }

  addBook(book) {
    if (book.availability > 0) {
      book.availability -= 1;
      this.booksList.push(book);
      console.log("Book added to the cart.");
    } else {
      console.log("Book is not available.");
    }
  }

  removeBook(book) {
    const index = this.booksList.indexOf(book);
    if (index === -1) {
      console.log("Book is not present in the cart.");
    } else {
      book.availability += 1;
      this.booksList.splice(index, 1);
      console.log("Book removed from the cart.");
    }
  }

  calculateTotalPrice() {
    const totalPrice = this.booksList.reduce(
      (acc, book) => acc + book.price,
      0
    );

    return totalPrice;
  }
}

module.exports = { Cart };
