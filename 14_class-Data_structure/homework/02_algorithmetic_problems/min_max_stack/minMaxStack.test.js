const { MinMaxStack } = require("./MinMaxStack");

let stack;
beforeEach(() => {
  stack = new MinMaxStack();
  const data = [1, 4, 3, 5, 2, 10, 15];
  data.forEach((el) => stack.push(el));
});

test("Expect to add and pop values in order", () => {
  expect(stack.pop()).toBe(15);
  expect(stack.pop()).toBe(10);
  expect(stack.pop()).toBe(2);
  expect(stack.pop()).toBe(5);
  expect(stack.pop()).toBe(3);
  expect(stack.pop()).toBe(4);
  expect(stack.pop()).toBe(1);
});

test("Expect to return correct max value after a pop()", () => {
  expect(stack.maxValue()).toBe(15);
  stack.pop(); // [1, 4, 3, 5, 2, 10]
  expect(stack.maxValue()).toBe(10);
  stack.pop(); // [1, 4, 3, 5, 2]
  expect(stack.maxValue()).toBe(5);
  stack.pop(); // [1, 4, 3, 5]
  expect(stack.maxValue()).toBe(5);
  stack.pop(); // [1, 4, 3]
  expect(stack.maxValue()).toBe(4);
  stack.pop(); // [1, 4]
  expect(stack.maxValue()).toBe(4);
  stack.pop(); // [1]
  expect(stack.maxValue()).toBe(1);
  stack.pop(); // []
  expect(stack.maxValue()).toBe(undefined);
});

test("Expect to return correct min value after a pop()", () => {
  const stack2 = new MinMaxStack();
  const data2 = [15, 13, 12, 6, 7, 8, 5, 7, 8];
  data2.forEach((el) => stack2.push(el));

  expect(stack2.minValue()).toBe(5); // [15, 13, 12, 6, 7, 8, 5, 7, 8]
  stack2.pop();
  expect(stack2.minValue()).toBe(5); // [15, 13, 12, 6, 7, 8, 5, 7]
  stack2.pop();
  expect(stack2.minValue()).toBe(5); // [15, 13, 12, 6, 7, 8, 5]
  stack2.pop();
  expect(stack2.minValue()).toBe(6); // [15, 13, 12, 6, 7, 8]
  stack2.pop();
  expect(stack2.minValue()).toBe(6); // [15, 13, 12, 6, 7]
  stack2.pop();
  expect(stack2.minValue()).toBe(6); // [15, 13, 12, 6]
  stack2.pop();
  expect(stack2.minValue()).toBe(12); // [15, 13, 12]
  stack2.pop();
  expect(stack2.minValue()).toBe(13); // [15, 13]
  stack2.pop();
  expect(stack2.minValue()).toBe(15); // [15]
  stack2.pop();
  expect(stack2.minValue()).toBe(undefined); // []
});
