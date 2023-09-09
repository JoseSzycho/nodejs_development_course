class Node {
  #nextNode;
  constructor(data) {
    this.data = data;
    this.#nextNode = null;
  }

  get nextNode() {
    return this.#nextNode;
  }

  set nextNode(node) {
    if (node === null || node.constructor === Node) {
      this.#nextNode = node;
      return;
    }
    throw new Error("nextNode must be null or a Node");
  }
}

module.exports = { Node };
