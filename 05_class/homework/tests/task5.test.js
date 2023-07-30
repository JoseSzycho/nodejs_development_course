const lazyMap = require("../task5/lazyMap");

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

