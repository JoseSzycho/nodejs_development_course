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
    let currentNode = this.firstNode;
    const newNode = new Node(data);

    while (currentNode.nextNode != null) {
      currentNode = currentNode.nextNode;
    }
    currentNode.nextNode = newNode;
  }
  insertAfter(targetNode, dataToAdd) {
    const previousNode = this.searchNode(targetNode);

    const newNode = new Node(dataToAdd);
    newNode.nextNode = previousNode.nextNode;
    previousNode.nextNode = newNode;
  }
  searchNode(data) {
    let currentNode = this.firstNode;

    while (currentNode != null) {
      if (currentNode.data === data) return currentNode;
      currentNode = currentNode.nextNode;
    }

    throw new Error("Node with this data is not present in the linked list.");
  }
  getData() {
    let currentNode = this.firstNode;
    const data = [];
    while (currentNode != null) {
      data.push(currentNode.data);
      currentNode = currentNode.nextNode;
    }
    return [...data];
  }
  deleteFront() {
    if (this.firstNode === null) return;
    if (this.firstNode.nextNode === null) {
      this.firstNode = null;
      return;
    }

    this.firstNode = this.firstNode.nextNode;
  }
  deleteRear() {
    if (this.firstNode === null) return;
    if (this.firstNode.nextNode === null) {
      this.firstNode = null;
      return;
    }
    let actualNode = this.firstNode;
    let nextNode = this.firstNode.nextNode;

    while (nextNode.nextNode != null) {
      actualNode = nextNode;
      nextNode = nextNode.nextNode;
    }

    actualNode.nextNode = null;
  }
  deleteNode(data) {
    if (this.firstNode === null) return;

    let actualNode = this.firstNode;
    let nextNode = this.firstNode.nextNode;

    if (actualNode.data === data) {
      this.deleteFront();
      return;
    }

    do {
      if (nextNode.data === data) {
        actualNode.nextNode = nextNode.nextNode;
        return;
      }
      actualNode = nextNode;
      nextNode = nextNode.nextNode;
    } while (nextNode != null);
  }
}

module.exports = { LinkedList };
