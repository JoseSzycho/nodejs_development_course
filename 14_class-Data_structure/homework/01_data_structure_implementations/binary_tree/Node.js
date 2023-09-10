/**
 * Class that represents a node
 *
 * It contains:
 *
 * - #data property: stores validated data
 * 
 * - #right property: stores a new node with major data value
 * 
 * - #left property: stores a new node with minor data value
 */
class Node {
  #left;
  #right;
  #data;
  /**
   * Sets data of the new data after a validation.
   * @param {Number} data The data
   */
  constructor(data) {
    if (!(typeof data === "number" && Number.isNaN(data) === false)) {
      throw new Error("Invalid data type.");
    }
    this.#data = data;
    this.#left = null;
    this.#right = null;
  }

  /**
   * Returns node data
   * @returns {Number} The data
   */
  get data() {
    return this.#data;
  }
  /**
   * Returns left pointer
   * @returns {Node} The pointer
   */
  get left() {
    return this.#left;
  }
  /**
   * Returns the right pointer
   * @returns {Node} The pointer
   */
  get right() {
    return this.#right;
  }
  /**
   * Internal use. Check if a node if valid.
   * @param {*} node The node
   * @private
   */
  #checkIfValidNode(node) {
    if (!(node === null || node.constructor === Node)) {
      throw new Error("Node must be null or a Node");
    }
  }
  /**
   * Sets left pointer after a validation
   * @param {Node} node The node
   */
  set left(node) {
    this.#checkIfValidNode(node);
    this.#left = node;
  }
  /**
   * Sets right pointer after a validation
   * @param {Node} node The node
   */
  set right(node) {
    this.#checkIfValidNode(node);
    this.#right = node;
  }
}

module.exports = { Node };
