const { Node } = require("./Node");

class LinkedList {
  constructor() {
    this.firstNode = null;
  }
  insertFront(data) {
    if (this.firstNode === null) {
      this.firstNode = new Node(data);
      return;
    }

    const newNode = new Node(data);
    newNode.nextNode = this.firstNode;
    this.firstNode = newNode;
  }
  insertRear(data) {
    if (this.firstNode === null) {
      this.firstNode = new Node(data);
      return;
    }
    const currentNode = this.firstNode;
    const newNode = new Node(data);
    
    while (currentNode.nextNode != null) {
      currentNode = currentNode.nextNode;
    }
    currentNode.nextNode = newNode;
  }
  searchData(data) {
    let currentNode = this.firstNode;
    do {
      if (currentNode.data === data) return true;
      currentNode = currentNode.nextNode;
    } while (currentNode.nextNode != null);

    return false;
  }
}

module.exports = { LinkedList };
