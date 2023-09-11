const {
  Node,
} = require("../../01_data_structure_implementations/linked_list/Node");

/**
 * Functions checks if a linked list has a cycle.
 *
 * It works by using Floyd's Cycle Detection Algorithm.
 *
 * @param {Node} node The node
 * @returns {Boolean} __true__ if it has a cycle, __false__ if not.
 */
const hasCycle = (node) => {
  // Checking for input data
  if (!(node == null || node.constructor == Node))
    throw new Error("Input must be a node.");

  // If there is not next node, there is not cycle
  if (node.next === null) return false;

  // Setting the pointers
  let slowPointer = node;
  let fastPointer = node.nextNode;

  do {
    try {
      // Setting pointers for next cycle
      slowPointer = slowPointer.nextNode;
      fastPointer = fastPointer.nextNode.nextNode;
    } catch (error) {
      // If there is a error, is because we reached the end of
      // the linked list and the pointers cannot store the nextNode
      return false;
    }
    // Checking if the pointers are the same
    if (slowPointer === fastPointer) return true;

    //Looping till there are more nextNodes
  } while (fastPointer != null && fastPointer.nextNode != null);

  return false;
};

module.exports = { hasCycle };
