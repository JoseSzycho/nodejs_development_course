const {
  Node,
} = require("../../01_data_structure_implementations/linked_list/Node");

const hasCycle = (node) => {
  if (!(node == null || node.constructor == Node))
    throw new Error("Input must be a node.");

  if (node.next === null) return false;

  let slowPointer = node;
  let fastPointer = node.nextNode;
  do {
    try {
      slowPointer = slowPointer.nextNode;
      fastPointer = fastPointer.nextNode.nextNode;
    } catch (error) {
      return false;
    }
    if (slowPointer === fastPointer) return true;
  } while (fastPointer != null && fastPointer.nextNode != null);

  return false;
};

module.exports = { hasCycle };
