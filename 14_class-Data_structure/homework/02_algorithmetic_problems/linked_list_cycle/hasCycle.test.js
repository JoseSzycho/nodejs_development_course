const {
  Node,
} = require("../../01_data_structure_implementations/linked_list/Node");
const { hasCycle } = require("./hasCycle");

test("Expect to have a cycle with one node.", () => {
  const node = new Node(1);
  node.nextNode = node;

  expect(hasCycle(node)).toBe(true);
});

test("Expect to have a cycle with two nodes.", () => {
  const node = new Node(1);
  node.nextNode = new Node(2);
  node.nextNode.nextNode = node;

  expect(hasCycle(node)).toBe(true);
});

test("Expect to have a cycle with three nodes.", () => {
  const node = new Node(1);
  node.nextNode = new Node(2);
  node.nextNode.nextNode = new Node(3);
  node.nextNode.nextNode.nextNode = node;

  expect(hasCycle(node)).toBe(true);
});

test("Expect to not have a cycle with one node", () => {
  const node = new Node(1);
  expect(hasCycle(node)).toBe(false);
});

test("Expect to not have a cycle with several cases", () => {
  const node = new Node(1);
  node.nextNode = new Node(2);
  expect(hasCycle(node)).toBe(false);
  node.nextNode.nextNode = new Node(3);
  expect(hasCycle(node)).toBe(false);
  node.nextNode.nextNode.nextNode = new Node(4);
  expect(hasCycle(node)).toBe(false);
  node.nextNode.nextNode.nextNode.nextNode = new Node(5);
  expect(hasCycle(node)).toBe(false);
});
