const { Cart } = require("../classes/Cart");

/**
 * Class representing an user
 * */
class User {
  #ID;
  #cart;
  static #IDList = new Set(); // Stores ID to prevent duplicated users */
  constructor() {
    this.name;
    this.email;
    this.#ID;
    this.#cart = new Cart();
  }

  /**
   * Gets the user ID
   * @returns {string} The user ID
   */
  get ID() {
    return this.#ID;
  }

  /**
   * Gets the user cart
   * @returns {Cart} The user cart
   */
  get cart() {
    return this.#cart;
  }

  /**
   * Sets the user name
   * @param {string} name The user name
   * @returns {this} The class reference
   */
  withName(name) {
    /* Basic pattern for names. It can cause problems for
    some languages */
    const namePattern = /^[A-Za-z\s'-]+$/;

    // Checking for valid input name
    if (!namePattern.test(name)) throw new Error("Name is not valid.");

    this.name = name;
    return this;
  }

  /**
   * Sets the user email address
   * @param {string} email The user email
   * @returns The class reference
   */
  withEmail(email) {
    // Basic email pattern. rfc2822 stands for complete pattern.
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Checking for valid email input
    if (!emailPattern.test(email))
      throw new Error("E-mail address is not valid.");

    this.email = email;
    return this;
  }
  /**
   * Sets the users ID
   * @param {string} ID The user ID
   * @returns The class reference
   */
  withID(ID) {
    // Checking for valid input ID
    if (typeof ID != "string") throw new Error("ID is not valid.");
    // Checking for repeated ID
    if (User.#IDList.has(ID)) throw new Error("User ID already used.");

    // Adding ID to users ID list
    User.#IDList.add(ID);

    this.#ID = ID;
    return this;
  }
}

module.exports = { User };
