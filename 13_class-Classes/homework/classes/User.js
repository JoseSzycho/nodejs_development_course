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
    const namePattern = /^[A-Za-z\s'-]+$/;
    if (!namePattern.test(name))
      throw new Error("Name is not valid.");
    this.name = name;
    return this;
  }
  withEmail(email) {
    // Basic email pattern. rfc2822 stands for complete pattern.
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email))
      throw new Error("E-mail address is not valid.");
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
