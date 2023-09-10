const { Node } = require("../Node");

describe("Testing set Data()", () => {
  test("Expect invalid data type to throw data error", () => {
    expect(() => {
      const node = new Node("a");
    }).toThrow("Invalid data type.");
    expect(() => {
      const node = new Node(NaN);
    }).toThrow("Invalid data type.");
  });

  test("Expect valid data type to be set.", () => {
    const node = new Node(1);
    expect(node.data).toBe(1);
  });
});

describe("Testing adding set Left and set right methods", () => {
  test("Expect to throw error if not null or Node type", () => {
    const node = new Node(1);

    expect(() => (node.right = 2)).toThrow("Node must be null or a Node");
    expect(() => (node.left = {})).toThrow("Node must be null or a Node");
  });

  test("Expect to set the right and left node", () => {
    const node = new Node(100);

    node.left = node;
    node.right = node;
    expect(node.left.constructor === Node).toBe(true);
    expect(node.right.constructor === Node).toBe(true);

    node.left = null;
    node.right = null;
    expect(node.left === null).toBe(true);
    expect(node.right === null).toBe(true);
  });
});
