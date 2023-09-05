class Order {
  constructor() {
    this.user;
  }
  withUser(user) {
    this.user = user;
    return this;
  }
  show() {
    const userCart = this.user.cart;
    const booksNames = userCart.booksList.map((book) => book.title);
    console.log(`
        User information:
            - name: ${this.user.name}
            - email: ${this.user.email}
            - ID: ${this.user.ID}

        Book/s to purchase: 
            - ${booksNames.join(`
            - `)}
            
        Total price:
            - PLN ${userCart.calculateTotalPrice()}   
            `);
  }
  #cleanUserCart() {
    const userCart = this.user.cart;
    const booksList = [...userCart.booksList];
    booksList.forEach((book) => userCart.removeBook(book));
  }

  cancel() {
    this.#cleanUserCart();
    console.log("Order have been cancelled.");
  }

  execute() {
    this.#cleanUserCart();
    console.log("Your order has been placed.");
  }
}

module.exports = { Order };
