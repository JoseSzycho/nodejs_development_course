const createCounter = require("../task3/createCounter");

describe("createCounter function tests", () => {
  test("Create counter, call 2 times and expet result to be 2", () => {
    const counter = createCounter();
    let count;
    count = counter();
    count = counter();
    expect(count).toBe(2);
  });

  test("Create to counters, call counter1 3 times, call counter2 1 time, and expect results to be 3 and 1.", () => {
    const counter1 = createCounter();
    const counter2 = createCounter();
    let count1;
    let count2;

    count1 = counter1(); // 1
    count1 = counter1(); // 2
    count1 = counter1(); // 3

    count2 = counter2(); // 1

    expect(count1).toBe(3);
    expect(count2).toBe(1);
  });
});
