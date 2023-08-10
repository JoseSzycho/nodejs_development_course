const createCounter = require("../task3/createCounter");
const repeatFunction = require("../task3/repeatFunction");

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

describe("repeatFunction function tests", () => {
  test("Expect to call the function 5 times", () => {
    const fn = jest.fn(); // creates jest mock function
    const timesToRepeat = 5;
    const repeat5times = repeatFunction(fn, timesToRepeat);
    repeat5times();
    expect(fn).toHaveBeenCalledTimes(timesToRepeat);
  });

  test("Expect to call the function 29 times", () => {
    const fn = jest.fn(); // creates jest mock function
    const timesToRepeat = 29;
    const repeat5times = repeatFunction(fn, timesToRepeat);
    repeat5times();
    expect(fn).toHaveBeenCalledTimes(timesToRepeat);
  });

  test("Expect to call the function 0 times", () => {
    // found this way to test using chatGPT
    const fn = jest.fn(); // creates jest mock function
    const timesToRepeat = 0;
    const repeat5times = repeatFunction(fn, timesToRepeat);
    repeat5times();
    expect(fn).toHaveBeenCalledTimes(timesToRepeat);
  });

  test.skip("Expect to call the function indefinetely", () => {
    // Remove skip and terminal should throug "Aborted"
    const fn = jest.fn(); // creates jest mock function
    const timesToRepeat = -1;
    const repeat5times = repeatFunction(fn, timesToRepeat);
    for (let i = 0; i < 5; i++) {}
    repeat5times();
    expect(fn).toHaveBeenCalledTimes(timesToRepeat);
  });
});
