const { Tree } = require("../Tree");

let tree;
const data = [5, 10, 7, 12, 8, 2, 1, 3, 4, 9];
const originalConsoleLog = console.log;
beforeEach(() => {
  console.log = () => {};
  tree = new Tree();
  data.forEach((el) => tree.insertNode(el));
});
afterEach(() => {
  console.log = originalConsoleLog;
});
describe("Testing insertNode() method", () => {
  test("Expect nodes to be inserted in correct position", () => {
    expect(tree.root.data).toBe(5);
    expect(tree.root.left.data).toBe(2);
    expect(tree.root.right.data).toBe(10);
    expect(tree.root.left.left.data).toBe(1);
    expect(tree.root.left.right.data).toBe(3);
    expect(tree.root.right.left.data).toBe(7);
    expect(tree.root.right.right.data).toBe(12);
    expect(tree.root.left.right.right.data).toBe(4);
    expect(tree.root.right.left.right.data).toBe(8);
    expect(tree.root.right.left.right.data).toBe(8);
    expect(tree.root.right.left.right.right.data).toBe(9);
  });
});

describe("Testing findNode() method", () => {
  test("Expect all nodes to be found", () => {
    data.forEach((el) => expect(tree.findNode(el)).toBe(true));
    expect(tree.findNode(5)).toBe(true);
    expect(tree.findNode(9)).toBe(true);
  });
  test("Expect node to not be found", () => {
    expect(tree.findNode(99)).toBe(false);
    expect(tree.findNode(0)).toBe(false);
  });
});

describe("Testing traversing tree methods", () => {
  test("Expect data to be returned in in-order", () => {
    const inOrderData = [1, 2, 3, 4, 5, 7, 8, 9, 10, 12];
    expect(tree.inOrder()).toEqual(inOrderData);
  });
  test("Expect data to be returned in pre-order", () => {
    const preOrderData = [5, 2, 1, 3, 4, 10, 7, 8, 9, 12];
    expect(tree.preOrder()).toEqual(preOrderData);
  });
  test("Expect data to be returned in post-order", () => {
    const postOrderData = [1, 4, 3, 2, 9, 8, 7, 12, 10, 5];
    expect(tree.postOrder()).toEqual(postOrderData);
  });
});
