const { promisify } = require("../tasks/task4");

function callbackStyleFunction(value, callback) {
  setTimeout(() => {
    if (value > 0) {
      callback(null, value * 2);
    } else {
      callback("Invalid value", null);
    }
  }, 1000);
}

const promisedFunction = promisify(callbackStyleFunction);

test("Expect for input error", () => {
  expect(() => promisify(1)).toThrow(
    "Input must be a function with two arguments."
  );

  expect(() => promisify((el) => console.log(el))).toThrow(
    "Input must be a function with two arguments."
  );
});

test("Expect promisify to resolve", async () => {
  const result = await promisedFunction(3);

  expect(result).toBe(6);
});

test("Expect promisify to reject", async () => {
  try {
    await promisedFunction(0);
  } catch (error) {
    expect(error.message).toBe("Invalid value");
  }
});
