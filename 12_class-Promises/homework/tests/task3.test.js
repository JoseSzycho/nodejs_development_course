const { chainPromises } = require("../tasks/task3");

test("Expect chainPromises to throw error",  () => {
  expect(() => chainPromises(4)).toThrow(
    "Only accepts array of function promises."
  );
});

test("Expect multiples promises chain to return chained values", () => {
  function asyncFunction1() {
    return Promise.resolve("Result from asyncFunction1");
  }
  function asyncFunction2(data) {
    return Promise.resolve(data + " - Result from asyncFunction2");
  }
  function asyncFunction3(data) {
    return Promise.resolve(data + " - Result from asyncFunction3");
  }

  const functionsArray = [asyncFunction1, asyncFunction2, asyncFunction3];

  chainPromises(functionsArray).then((result) => {
    expect(result).toBe(
      "Result from asyncFunction1 - Result from asyncFunction2 - Result from asyncFunction3"
    );
  });

  chainPromises([asyncFunction1]).then((result) => {
    expect(result).toBe("Result from asyncFunction1");
  });
});

test("Expect rejected promises chain to return first reject value", () => {
  function asyncFunction1() {
    return Promise.reject("first reject");
  }
  function asyncFunction2() {
    return Promise.reject("second reject");
  }
  function asyncFunction3() {
    return Promise.resolve(" - Result from asyncFunction3");
  }

  chainPromises([asyncFunction3, asyncFunction2])
    .then((el) => console.log(el))
    .catch((error) => expect(error).toBe("second reject"));

  chainPromises([
    asyncFunction3,
    asyncFunction3,
    asyncFunction1,
    asyncFunction2,
  ])
    .then((el) => console.log(el))
    .catch((error) => expect(error).toBe("first reject"));
});
