const measureArrayPerformance = require("../tasks/task5/measureArrayPerformance");

test("Expect error for not sending array as argument", () => {
  const array = "i am not an array";
  const callback = (arr) =>
    arr.forEach((el) => {
      el * 2;
    });

  expect(() => measureArrayPerformance(array, callback)).toThrow(
    "Expect a array."
  );
});

test("Expect error for not sending function as argument", () => {
  const array = [1, 2, 3, 4];
  const callback = "hi";

  expect(() => measureArrayPerformance(array, callback)).toThrow(
    "Callback must be a function."
  );
});

test("Expect to show execution time for a some functions", () => {
  const array = [];
  const forEachFunction = (arr) => {
    let sum = 0;
    arr.forEach((el) => {
      sum += el;
    });
  };
  const forLoopFunction = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
  };

  const reduceFunction = (arr) => {
    arr.reduce((acc, el) => el + acc, 0);
  };

  const whileFunction = (arr) => {
    let sum = 0;
    let i = 0;
    while (i < arr.length) {
      sum += arr[i];
      i++;
    }
  };

  const mapMunction = (arr) => {
    const newArr = arr.map((el) => el + el);
  };

  const filterFunction = (arr) => {
    const newArr = arr.filter((el) => el % 2);
  };

  const everyFunction = (arr) => {
    const newArr = arr.every((el) => typeof el == "number");
  };

  const iterations = 10000000;
  for (let i = 0; i < iterations; i++) array.push(i);

  const executionTime1 = measureArrayPerformance(array, forEachFunction);
  const executionTime2 = measureArrayPerformance(array, forLoopFunction);
  const executionTime3 = measureArrayPerformance(array, reduceFunction);
  const executionTime4 = measureArrayPerformance(array, whileFunction);
  const executionTime5 = measureArrayPerformance(array, mapMunction);
  const executionTime6 = measureArrayPerformance(array, filterFunction);
  const executionTime7 = measureArrayPerformance(array, everyFunction);

  console.log(
    `Execution time is ${executionTime1} ms using a forEach for ${iterations} iterations.`
  );
  console.log(
    `Execution time is ${executionTime2} ms using a forLoop for ${iterations} iterations.`
  );
  console.log(
    `Execution time is ${executionTime3} ms using a reduceMethod for ${iterations} iterations.`
  );
  console.log(
    `Execution time is ${executionTime4} ms using a whileFunction for ${iterations} iterations.`
  );
  console.log(
    `Execution time is ${executionTime5} ms using a mapFunction for ${iterations} iterations.`
  );
  console.log(
    `Execution time is ${executionTime6} ms using a filterFunction for ${iterations} iterations.`
  );
  console.log(
    `Execution time is ${executionTime7} ms using a everyFunction for ${iterations} iterations.`
  );
  expect(typeof executionTime1).toBe("number");
});
