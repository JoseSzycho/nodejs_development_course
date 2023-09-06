const { Cart } = require("../classes/Cart");

class User {
  #ID;
  #cart;
  static #IDList = new Set();
  constructor() {
    this.name;
    this.email;
    this.#ID;
    this.#cart = new Cart();
  }

  get ID() {
    return this.#ID;
  }

  get cart() {
    return this.#cart;
  }

  withName(name) {
    this.name = name;
    return this;
  }
  withEmail(email) {
    this.email = email;
    return this;
  }
  withID(ID) {
    if (User.#IDList.has(ID)) throw new Error("User ID already used.");
    User.#IDList.add(ID);
    this.#ID = ID;
    return this;
  }
}

module.exports = { User };
