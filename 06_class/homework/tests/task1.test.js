test("Expect properties to not be changed", () => {
  const { person } = require("../tasks/task1/person");
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

test("Expect error if try to modify a readOnly property", () => {
  const { person } = require("../tasks/task1/person");

  const newInfo1 = {
    firstName: "Jane",
  };
  const newInfo2 = {
    lastName: "Mary",
  };
  const newInfo3 = {
    age: 35,
  };

  expect(() => person.updateInfo(newInfo1)).toThrow(
    "Cannot update read only properties."
  );
  expect(() => person.updateInfo(newInfo2)).toThrow(
    "Cannot update read only properties."
  );
  expect(() => person.updateInfo(newInfo3)).toThrow(
    "Cannot update read only properties."
  );
});

test("Expect person address property to {}, non enumerable and non configurable", () => {
  const { person } = require("../tasks/task1/person");

  const personAddressDescriptors =
    Object.getOwnPropertyDescriptors(person).address;
  expect(personAddressDescriptors.value).toEqual({});
  expect(personAddressDescriptors.writable).toBe(true);
  expect(personAddressDescriptors.configurable).toBe(false);
  expect(personAddressDescriptors.enumerable).toBe(false);
});

test("Expect person addres to be updated", () => {
  const { person } = require("../tasks/task1/person");
  const newInfo = { address: "Fake Street 123" };

  person.updateInfo(newInfo);

  expect(person.address).toBe("Fake Street 123");
});
