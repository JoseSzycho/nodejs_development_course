const { observedObject } = require("../tasks/task5/observedObject");
const { person } = require("../tasks/task1/person");

test("Expect called properties of task 1 object to be logged when accessed", () => {
  const logFunction = (prop, action) =>
    console.log(`Property "${prop}" performed a "${action}" action.`);

  const proxyPerson = observedObject(person, logFunction);
  proxyPerson.firstName = "Jose"; // => Property "name" performed a "set" action.
  proxyPerson.age; // =>  Property "age" performed a "get" action.
  proxyPerson.address = "Warsaw"; // =>  Property "address" performed a "set" action.
  const address = proxyPerson.address; // => Property "address" performed a "get" action.
});

test("Expect observedObject to store and give values correctly", () => {
  const student = {
    name: "Jose",
    age: 0,
  };

  const doNothing = () => {};

  const proxyStudent = observedObject(student, doNothing);

  proxyStudent.name = "Beth";
  proxyStudent.age = 25;

  expect(proxyStudent.name).toBe("Beth");
  expect(proxyStudent.age).toBe(25);
});
