const { Node } = require("./Node");

class Tree {
  constructor() {
    this.root = null;
  }

  insertNode(value, node = this.root) {
    if (this.root === null) {
      this.root = new Node(value);
      console.log("Node added.");
      return;
    }

    if (node.data === value) {
      console.log("Node is already in the tree");
      return;
    }

    if (value > node.data && node.right === null) {
      node.right = new Node(value);
      console.log("Node added.");
      return;
    }

    if (value < node.data && node.left === null) {
      node.left = new Node(value);
      console.log("Node added.");
      return;
    }

    if (value > node.data) this.insertNode(value, node.right);
    if (value < node.data) this.insertNode(value, node.left);
  }

  findNode(value, node = this.root) {
    if (node === null) {
      console.log("Node not found.");
      return false;
    }

    if (value === node.data) {
      console.log("Node found.");
      return true;
    }

    if (value > node.data && node.right != null)
      return this.findNode(value, node.right);
    if (value < node.data && node.left != null)
      return this.findNode(value, node.left);

    console.log("Node not found.");
    return false;
  }

  inOrder(node = this.root, data = []) {
    if (node === null) return;
    this.inOrder(node.left, data);
    data.push(node.data);
    this.inOrder(node.right, data);
    console.log(data);
    return data;
  }
  preOrder(node = this.root, data = []) {
    if (node === null) return;
    data.push(node.data);
    this.preOrder(node.left, data);
    this.preOrder(node.right, data);
    return data;
  }
  postOrder(node = this.root, data = []) {
    if (node === null) return;
    this.postOrder(node.left, data);
    this.postOrder(node.right, data);
    data.push(node.data);
    return data;
  }
}

module.exports = { Tree };
