const calculateFactorial = require("../task4/calculateFactorial");

describe("calculateFactorial function tests", () => {
  test("Expect factorial of negative number to be 1", () => {
    expect(calculateFactorial(-5)).toBe(1);
  });

  test("Expect factorial of 0 to be 1", () => {
    expect(calculateFactorial(0)).toBe(1);
  });

  test("Expect factorial of 1 to be 1", () => {
    expect(calculateFactorial(1)).toBe(1);
  });

  test("Expect factorial of 2 to be 2", () => {
    expect(calculateFactorial(2)).toBe(2);
  });

  test("Expect factorial of 3 to be 6", () => {
    expect(calculateFactorial(3)).toBe(6);
  });

  test("Expect factorial of 10 to be 3628800", () => {
    expect(calculateFactorial(10)).toBe(3628800);
  });
});
