/**
 * Class that creates a node structure with any kind of data.
 * This structure is needed as #nextNode can be used to point
 * to another node, so a linked list can be created.
 */
class Node {
  #nextNode;

  /**
   *Initialize the node with certain data.
   * @param {*} data The data
   */
  constructor(data) {
    this.data = data;
    this.#nextNode = null;
  }

  /**
   * Returns the #nextNode property
   */
  get nextNode() {
    return this.#nextNode;
  }

  /**
   * Sets #nextNode with a new Node / null after a a input check
   *@param {Node} - The Node
   */
  set nextNode(node) {
    // Checking input data
    if (node === null || node.constructor === Node) {
      this.#nextNode = node;
      return;
    }
    throw new Error("nextNode must be null or a Node");
  }
}

module.exports = { Node };
