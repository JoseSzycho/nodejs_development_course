const {
  Node,
} = require("../../01_data_structure_implementations/binary_tree/Node");

const { isBinarySearchTree } = require("./isBinarySearchTree");

test("Expect tree to not be BST", () => {
  const node = new Node(20);
  node.left = new Node(10);
  node.left.right = new Node(15);
  node.left.right.left = new Node(14);
  node.left.right.right = new Node(16);
  node.left.left = new Node(5);
  node.left.left.left = new Node(4);
  node.left.left.right = new Node(6);

  expect(isBinarySearchTree(node)).toBe(true);
});

test("Expect tree to not be BST", () => {
  const node = new Node(20);
  node.left = new Node(10);
  node.left.right = new Node(15);
  node.left.right.left = new Node(14);
  node.left.right.right = new Node(16);
  node.left.left = new Node(5);
  node.left.left.left = new Node(4);
  node.left.left.right = new Node(5);

  expect(isBinarySearchTree(node)).toBe(false);
});
