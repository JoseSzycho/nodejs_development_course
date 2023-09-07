const fs = require("fs");

class DataBase {
  #path;
  constructor() {
    this.#path;
  }
  /**
   * Sets data base path
   * @param {string} path - The database path
   * @returns {this} - The reference to the data base object
   */
  withPath(path) {
    console.log(path);
    if (typeof path != "string") throw new Error("Invalid path type.");
    this.#path = path;
    return this;
  }
  #loadData(desiredData) {
    try {
      const data = fs.readFileSync(this.#path, "utf-8");
      return JSON.parse(data)[desiredData].map(el => el);
    } catch (error) {
      throw new Error(error.message);
    }
  }
  getUsers() {
    return this.#loadData("users");
  }
  getBooks() {
    return this.#loadData("books");
  }
}

module.exports = { DataBase };
