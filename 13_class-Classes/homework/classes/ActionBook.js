const { Book } = require("./Book");
/**
 * Class that represents an action book
 * @extends Book
 */
class ActionBook extends Book {
  constructor() {
    super();
    this.category = "action";
  }
  /**
   * Returns an advice for the book
   * @returns {string} The Advice
   */
  advice() {
    return "Beware, the facts presented in the book are purely fabricated and the actions should not be recreated.";
  }
}

module.exports = { ActionBook };
