const { Stack } = require("./Stack");

let stack;
beforeEach(() => {
  stack = new Stack();
});

test("Expect empty stack to return 'undefined'", () => {
  expect(stack.pop()).toBe(undefined);
  expect(stack.pop()).toBe(undefined);
  stack.push(1);
  stack.push(2);
  stack.pop();
  stack.pop();
  expect(stack.pop()).toBe(undefined);
  stack.push(3);
  stack.pop();
  expect(stack.pop()).toBe(undefined);
  expect(stack.pop()).toBe(undefined);
});

test("Expect stack to push and pop elements in correct order.", () => {
  for (let i = 0; i < 5; i++) {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    expect(stack.pop()).toBe(4);
    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack.pop()).toBe(undefined);
    expect(stack.pop()).toBe(undefined);
  }
});

test("Expect stack to peek last element", () => {
  for (let i = 0; i < 3; i++) {
    expect(stack.peek()).toBe(undefined);
    stack.push(1);
    expect(stack.peek()).toBe(1);
    stack.push(2);
    expect(stack.peek()).toBe(2);
    stack.push(3);
    expect(stack.peek()).toBe(3);
    stack.pop();
    expect(stack.peek()).toBe(2);
    stack.pop();
    expect(stack.peek()).toBe(1);
    stack.pop();
    expect(stack.peek()).toBe(undefined);
  }
});

test("Expect stack to push and pop an object", () => {
  const testObj = { name: "Homer" };
  stack.push(testObj);
  const el = stack.pop();
  expect(el).toEqual(testObj);
});
