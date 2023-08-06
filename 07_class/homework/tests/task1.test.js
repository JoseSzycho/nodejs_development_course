const customFilterUnique = require("../tasks/task1/customFilterUnique");

// Task 1.2
test("Expect to filter an array of object and return unique objects", () => {
  // Objects for testing

  const personsArray = [
    // Testing array
    5,
    "hi",
    { name: "Bob", age: 25 },
    { name: "Anna", age: 29 },
    { name: "John", age: 61 },
    { name: "Laura", age: 20 },
    { name: "Anna", age: 29 },
    { name: "Laura", age: 20 },
    { name: "John", age: 61 },
    { name: "Bob", age: 25 },
    { name: "Michael", age: 20 },
    { name: "Laura", age: 20 },
    { name: "Michael", age: 20 },
    ["some garbage"],
    { notName: "car" },
    { notName: "car", age: 12 },
  ];
  const isUnder30 = (el) => el.age < 30; // Testing callback

  const personsUnder30 = customFilterUnique(personsArray, isUnder30);

  expect(personsUnder30).toEqual([
    { name: "Bob", age: 25 },
    { name: "Anna", age: 29 },
    { name: "Laura", age: 20 },
    { name: "Michael", age: 20 },
    { notName: "car", age: 12 },
  ]);
});

test("Expect error if array argument is not a array", () => {
  const array = 1;
  const callback = (el) => el * 2;
  expect(() => customFilterUnique(array, callback)).toThrow("Expect a array.");
});

test("Expect error if callback argument is not a function", () => {
  const array = [1, 1, 3];
  const callback = 4;
  expect(() => customFilterUnique(array, callback)).toThrow(
    "Callback must be a function."
  );
});

test("Expect error if triying to filter an element that have nestef objects", () => {
  const array = [{ a: 5, b: {a:1} }, 1, 2, 3, 4, "hi", 1, undefined, 2, 3, 4, 8];
  const callback = (el) => el != null;

  expect(() => customFilterUnique(array, callback)).toThrow("Cannot handle nested objects.");
});

test("Expect filtered arrays to be unique", () => {
  const array = [{ a: 5 }, 1, 2, 3, 4, "hi", 1, undefined, 2, 3, 4, 8];
  const callback = (el) => el % 2 == 0;

  const filteredArray = customFilterUnique(array, callback);

  expect(filteredArray).toEqual([2, 4, 8]);
});
