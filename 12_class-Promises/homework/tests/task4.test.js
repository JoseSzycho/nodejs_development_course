const { promisify } = require("../tasks/task4");

test("Expect for input error", () => {
  expect(() => promisify(1)).toThrow(
    "Input must be a function with two arguments."
  );

  expect(() => promisify((el) => console.log(el))).toThrow(
    "Input must be a function with two arguments."
  );
});
