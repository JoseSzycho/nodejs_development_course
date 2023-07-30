const calculateFactorial = require("../task4/calculateFactorial");
const power = require("../task4/power");

describe("calculateFactorial function tests", () => {
  test("Expect factorial of negative number to be 1", () => {
    expect(() => calculateFactorial(-5)).toThrowError(
      "Cannot calculate factorial of negative numbers"
    );
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

describe("power function tests", () => {
  test("Expect negative exponent to throw error", () => {
    expect(() => power(5, -1)).toThrowError("Exponent cannot be negative.");
  });

  test("Expect 0^0 to be indeterminate error", () => {
    expect(() => power(0, 0)).toThrowError("Indeterminate result.");
  });

  test("Expect any number ^ 0 to be 1", () => {
    expect(power(-5, 0)).toBe(1);
    expect(power(9, 0)).toBe(1);
  });

  test("Expect 9 ^ 2 to be 81", () => {
    expect(power(9, 2)).toBe(81);
  });

  test("Expect 9 ^ 3 to be 81", () => {
    expect(power(9, 3)).toBe(729);
  });

  test("Expect many escenarios to pass", () => {
    expect(power(1, 1)).toBe(1);
    expect(power(1, 5)).toBe(1);
    expect(power(5, 1)).toBe(5);
    expect(power(-8, 7)).toBe(-2097152);
  });
});
