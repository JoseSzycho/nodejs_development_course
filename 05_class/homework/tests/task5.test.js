const fibonacciGenerator = require("../task5/fibonacciGenerator.js");
const lazyMap = require("../task5/lazyMap.js");

describe("lazyMap function test", () => {
  test("Expect [1, 2, 3] to return 2 4 6", () => {
    const doubleFn = (el) => 2 * el;
    const elements = [1, 2, 3];
    let lazyDouble = lazyMap(elements, doubleFn);

    expect(lazyDouble()).toBe(2);
    expect(lazyDouble()).toBe(4);
    expect(lazyDouble()).toBe(6);
  });

  test("Expect error if calling lazy map but all elements have been already maped", () => {
    const doubleFn = (el) => 2 * el;
    const elements = [1, 2, 3];
    let lazyDouble = lazyMap(elements, doubleFn);
    lazyDouble(); // 2
    lazyDouble(); // 4
    lazyDouble(); // 6

    //Expect error on next call
    expect(() => lazyDouble()).toThrow("No element left to lazy map.");
  });

  test("Expect to work two different generators with no interference.", () => {
    const double = (el) => el * 2;
    const triple = (el) => el * 3;
    const elements = [1, 2, 3];

    const lazyDouble = lazyMap(elements, double);
    const lazyTriple = lazyMap(elements, triple);

    expect(lazyDouble()).toBe(2);
    expect(lazyTriple()).toBe(3);
    expect(lazyDouble()).toBe(4);
    expect(lazyTriple()).toBe(6);
    expect(lazyDouble()).toBe(6);
    expect(lazyTriple()).toBe(9);
  });
});

// finacciGenerator test starts here
const nextFibonacciNumber = fibonacciGenerator(); // global declaration for working in all tests
describe("fibonacciGenerator function test", () => {
  test("Expect call 1 to be 1", () => {
    expect(nextFibonacciNumber()).toBe(1);
  });

  test("Expect call 2 to be 1", () => {
    expect(nextFibonacciNumber()).toBe(1);
  });

  test("Expect call 3 to be 2", () => {
    expect(nextFibonacciNumber()).toBe(2);
  });

  test("Expect call 4 to be 3", () => {
    expect(nextFibonacciNumber()).toBe(3);
  });

  test("Expect call 5 to be 5", () => {
    expect(nextFibonacciNumber()).toBe(5);
  });

  test("Expect call 6 to be 8", () => {
    expect(nextFibonacciNumber()).toBe(8);
  });

  test("Expect call 7 to be 13", () => {
    expect(nextFibonacciNumber()).toBe(13);
  });

  test("Expect call 8 to be 21", () => {
    expect(nextFibonacciNumber()).toBe(21);
  });

  test("Expect call 9 to be 34", () => {
    expect(nextFibonacciNumber()).toBe(34);
  });

  test("Expect call 50 to be 12586269025", () => {
    const fibonacciNumber = fibonacciGenerator();

    for (let i = 0; i < 49; i++) fibonacciNumber();

    expect(fibonacciNumber()).toBe(12586269025);
  });
});
