const { Book } = require("./Book");

/**
 * Class that represents a thriller book
 * @extends Book
 */
class ThrillerBook extends Book {
  constructor() {
    super();
    this.category = "thriller";
  }
  /**
   * Returns an advice for the book
   * @returns {string} The advice
   */
  advice() {
    return "The situations in the books are designed for touching your heart. Do not feel sad if this does not happen to you.";
  }
}

module.exports = { ThrillerBook };
