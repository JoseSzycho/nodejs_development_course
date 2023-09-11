const {
  Node,
} = require("../../01_data_structure_implementations/binary_tree/Node");
/**
 * Checks if a binary tree fulfill the BST condition given a tree root.
 *
 * __Returns true if it fulfills, false if not.__
 *
 * It works be traversing the tree using recursion and comparing the actual
 * node.data with the node.left.data and the node.right.data.
 *
 * If the node.left.data or the node.left.right data do not full fill the
 * BST property, we returns false, else we continue traversing the tree
 * till we reach a null node, this mean that till this moment the BST
 * condition was fulfilled, so a true is returned.
 *
 * @param {Node} node The tree root
 * @returns {Boolean} __true__ if is BST, __false__ if not BST
 */
const isBinarySearchTree = (node) => {
  // Checking for input error
  if (!(node == null || node.constructor === Node))
    throw new Error("Input must be a node.");

  // If node is null, it reached the end, so previous
  // nodes were in order. Return true;
  if (node === null) return true;

  // If node.left is null, there is no next data to check
  if (node.left != null) {
    // If it have data, we check is fulfill BST condition
    if (node.left.data >= node.data) return false;
  }

  // If node.right is null, there is no next data to check
  if (node.right != null) {
    // If it have data, we check is fulfill BST condition
    if (node.right.data <= node.data) return false;
  }

  // Traversing both sides of the tree with recursion
  const leftTree = isBinarySearchTree(node.left);
  const rightTree = isBinarySearchTree(node.right);
  return leftTree && rightTree;
};

module.exports = { isBinarySearchTree };


