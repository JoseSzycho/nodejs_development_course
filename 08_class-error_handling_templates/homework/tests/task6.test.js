const curry = require("../tasks/task6/task6");

test("Expect errors function is not send", () => {
  expect(() => curry(5, 3)).toThrow("Not a valid function.");
});

test("Expect errors arity is not valid", () => {
  expect(() => curry((a, b) => a + b, 0)).toThrow("Not a valid arity.");
  expect(() => curry((a, b) => a + b, -1)).toThrow("Not a valid arity.");
  expect(() => curry((a, b) => a + b, NaN)).toThrow("Not a valid arity.");
});

test("Expect curried multiplication to work", () => {
  function multiply(a, b, c) {
    return a * b * c;
  }

  const curriedMultiply = curry(multiply, 3);

  const step1 = curriedMultiply(2); // Returns a curried function
  const step2 = step1(3); // Returns a curried function
  const result = step2(4); // Returns the final result: 2 * 3 * 4 = 24

  expect(result).toBe(24);
});

test("Expect curried sum to work", () => {
  function sum(a, b) {
    return a + b;
  }

  const curriedSum = curry(sum, 2);

  const step1 = curriedSum(2); // Returns a curried function
  const result = step1(3); // Returns a curried function

  expect(result).toBe(5);
});
