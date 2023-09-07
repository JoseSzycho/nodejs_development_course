const fs = require("fs");

/** Class that allows to load pre-created data. The returned data
 * is an array where is each element is an object with the
 * desired data.
 */
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
    // Basic validation
    if (typeof path != "string") throw new Error("Invalid path type.");

    this.#path = path;
    return this;
  }
  /**
   * Load desired data from data base and transform it into array
   * @private
   * @param {string} desiredData - The desired data to obtain from data base
   * @returns {Array} - The desired data
   */
  #loadData(desiredData) {
    try {
      // Reading database file
      const data = fs.readFileSync(this.#path, "utf-8");
      // Returns parsed data, filtered by desired data and converted to array.
      return JSON.parse(data)[desiredData].map((el) => el);
    } catch (error) {
      throw new Error(error.message);
    }
  }
  /**
   * Gets users from data base
   * @returns {Array} - The users data
   */
  getUsers() {
    return this.#loadData("users");
  }
  /**
   * Gets books from data base
   * @returns {Array} - The books data
   */
  getBooks() {
    return this.#loadData("books");
  }
}

module.exports = { DataBase };
