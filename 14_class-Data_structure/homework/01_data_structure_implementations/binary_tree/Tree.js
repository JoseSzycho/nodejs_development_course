const { Node } = require("./Node");
/**
 * Class that handles a binary tree
 */
class Tree {
  constructor() {
    this.root = null;
  }
  /**
   * Inserts a tree to the binary tree
   *
   * It works by following the next steps.
   * - First step: If the tree is empty, sets the node as the tree root.
   * - Second step: Checks if the data is already in the tree, if so, it exits the method.
   * - Third step: checks if can add the values.
   *    - If value < node.data, adds new node to the left pointer
   *    - If value > node.data; adds new node to the right pointer
   * - Fourth step, if here, the node have not being added, we need to use recursion in order
   * to get to the next nodes.
   *    - If value < node.data, it gets into the left child
   *    - If vale > node.data, it gets into the right child
   *
   *
   * @param {Number} value The value
   * @param {Node} node For internal use
   * @returns {nothing}
   */
  insertNode(value, node = this.root) {
    // First step
    if (this.root === null) {
      this.root = new Node(value);
      console.log("Node added.");
      return;
    }

    // Second step
    if (node.data === value) {
      console.log("Node is already in the tree");
      return;
    }

    // Third step
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

    // Fourth step
    if (value > node.data) this.insertNode(value, node.right);
    if (value < node.data) this.insertNode(value, node.left);
  }

  /**
   * Find if a node with a certain value is in the binary try, if found, returns true, if not, false.
   *
   * It works by following the next steps:
   * - First step: if binary tree is empty, returns false.
   * - Second step: if the actual node.data is the value, returns true.
   * - Third step: if here, the node have not be found. So we use recursion
   * to go to the next nodes.
   *    - If value > actual node.data, we visit the right node pointer
   *    - If value < actual node.data, we visit the left node pointer
   * - Fourth step: if here, the node have not being found, returns false
   * @param {Number} value The value
   * @param {Node} node For internal use
   * @returns {Boolean} - The result. <true> if found, <false> if not.
   */
  findNode(value, node = this.root) {
    // First step
    if (node === null) {
      console.log("Node not found.");
      return false;
    }

    // Second step
    if (value === node.data) {
      console.log("Node found.");
      return true;
    }

    // Third step
    if (value > node.data && node.right != null)
      return this.findNode(value, node.right);
    if (value < node.data && node.left != null)
      return this.findNode(value, node.left);

    // Fourth step
    console.log("Node not found.");
    return false;
  }
  /**
   * Returns an array containing all the nodes data traversing the binary 
   * tree in order.
   * 
   * It works by following the next steps:
   * - First step: checks for exit condition, we reached an empty leave.
   * - Second step: visit the left branch recursively till we reach an empty leave.
   * - Third step: store the node data in the array
   * - Fourth step: visit the right pointer and repeats from step 1.
   * - Fifth step: returns the data
   * 
   * @param {Node} node Internal use 
   * @param {Array} data Internal use
   * @returns {Array} The data
   */
  inOrder(node = this.root, data = []) {
    // First step
    if (node === null) return;

    // Second step
    this.inOrder(node.left, data);
    // Third step
    data.push(node.data);
    // Fourth step
    this.inOrder(node.right, data);
    // Fifth step
    return data;
  }
  /**
   * Returns an array containing all the nodes data traversing the binary 
   * tree in pre order.
   * 
   * It works by following the next steps:
   * - First step: checks for exit condition, we reached an empty leave.
   * - Second step: store the node data in the array
   * - Third step: visit the left pointer and repeat step 1.
   * - Fourth step: visit the right pointer and repeats step 1.
   * - Fifth step: returns the data
   * 
   * @param {Node} node Internal use 
   * @param {Array} data Internal use
   * @returns {Array} The data
   */
  preOrder(node = this.root, data = []) {
    // First step
    if (node === null) return;
    // Second step
    data.push(node.data);
    // Third step
    this.preOrder(node.left, data);
    // Fourth step
    this.preOrder(node.right, data);
    // Fifth step
    return data;
  }
  /**
   * Returns an array containing all the nodes data traversing the binary 
   * tree in post order.
   * 
   * It works by following the next steps:
   * - First step: checks for exit condition, we reached an empty leave.
   * - Second step: visit the left branch recursively till we reach an empty leave.
   * - Third step: visit the right branch recursively till we reach an empty leave.
   * - Fourth step: store the node data in the array. Repeat from step 1.
   * - Fifth step: returns the data
   * 
   * @param {Node} node Internal use 
   * @param {Array} data Internal use
   * @returns {Array} The data
   */
  postOrder(node = this.root, data = []) {
    // First step
    if (node === null) return;
    // Second step
    this.postOrder(node.left, data);
    // Third step
    this.postOrder(node.right, data);
    // Fourth step
    data.push(node.data);
    // Fifth tep
    return data;
  }
}

module.exports = { Tree };
