class Node {
  #data;
  #nextNode;
  constructor(data) {
    this.#data = data;
    this.#nextNode = null;
  }
  get data() {
    return this.#data;
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
