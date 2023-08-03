test("Expect properties to not be changed.", () => {
  const { person } = require("../tasks/task1");
  //Attempting to modify newPerson propertires
  person.firstName = "Homero";
  person.lastName = "Simpson";
  person.age = 35;
  person.email = "newEmail@gmail.com";

  expect(person.firstName).toBe("John");
  expect(person.lastName).toBe("Doe");
  expect(person.age).toBe(30);
  expect(person.email).toBe("john.doe@example.com");
});
