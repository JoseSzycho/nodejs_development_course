class Order {
  constructor() {
    this.user;
  }
  withUser(user) {
    this.user = user;
    return this;
  }
  show() {
    const booksNames = this.user.cart.booksList.map((book) => book.title);
    console.log(`
        User information:
            - name: ${this.user.name}
            - email: ${this.user.email}
            - ID: ${this.user.ID}

        Book/s to purchase: 
            - ${booksNames.join(`
            - `)}`);
  }
}

module.exports = { Order };
