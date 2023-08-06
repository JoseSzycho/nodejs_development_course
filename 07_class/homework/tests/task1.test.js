const customFilterUnique = require("../tasks/task1/customFilterUnique");

// Task 1.2
test("Expect to filter an array of object and return unique objects", () => {
  // Function object creator for testing
  function person(name, age) {
    this.name = name;
    this.age = age;
  }

  // Objects for testing
  const person1 = new person("Bob", 25);
  const person2 = new person("Anna", 29);
  const person3 = new person("John", 61);
  const person4 = new person("Laura", 20);

  const personsArray = [
    // Testing array
    person1,
    person2,
    person3,
    person4,
    person2,
    person4,
    person3,
    person1,
  ];
  const isUnder30 = (el) => el.age < 30; // Testing callback

  const personsUnder30 = customFilterUnique(personsArray, isUnder30);

  expect(personsUnder30).toEqual([person1, person2, person4]);
});

test("Expect error if array argument is not a array", () => {
  const array = 1;
  const callback = (el) => el * 2;
  expect(() => customFilterUnique(array, callback)).toThrow("Expect a array.");
});

test("Expect error if callback argument is not a function", () => {
  const array = [1, 2, 3];
  const callback = 4;
  expect(() => customFilterUnique(array, callback)).toThrow(
    "Callback must be a function."
  );
});

test("Expect filtered arrays to be unique", () => {
  const array = [1, 2, 3, 4, 1, 2, 3, 4, 8];
  const callback = (el) => el % 2 == 0;

  const filteredArray = customFilterUnique(array, callback);

  expect(filteredArray).toEqual([2, 4, 8]);
});
