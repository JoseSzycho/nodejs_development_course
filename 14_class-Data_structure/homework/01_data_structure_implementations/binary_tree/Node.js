class Node {
  #left;
  #right;
  constructor(data) {
    if (!(typeof data === "number" && Number.isNaN(data) === false)) {
      throw new Error("Invalid data type.");
    }
    this.data = data;
    this.#left = null;
    this.#right = null;
  }

  get left() {
    return this.#left;
  }

  get right() {
    return this.#right;
  }

  #checkIfValidNode(node) {
    if (!(node === null || node.constructor === Node)) {
      throw new Error("Node must be null or a Node");
    }
  }

  set left(node) {
    this.#checkIfValidNode(node);
    this.#left = node;
  }

  set right(node) {
    this.#checkIfValidNode(node);
    this.#right = node;
  }
}

module.exports = { Node };
