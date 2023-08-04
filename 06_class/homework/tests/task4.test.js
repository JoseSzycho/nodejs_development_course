const {
  createImmutableObject,
} = require("../tasks/task4/createImmutableObject");

test("Expect function call to not modify original object properties descriptors", () => {
  const person = {
    name: "Bob",
    surname: "Bobby",
  };

  const newPerson = createImmutableObject(person);

  expect(Object.getOwnPropertyDescriptor(person, "name").configurable).toBe(
    true
  );
  expect(Object.getOwnPropertyDescriptor(person, "name").writable).toBe(true);
});

test("Expect properties descriptors of object to be only read", () => {
  const objectTest = {
    a: "a1",
    b: "b2",
    c: ["c1", "c2", ["c3", "c4", { c5: "c55", c6: "c66" }]],
    d: "end",
  };

  const newObject = createImmutableObject(objectTest);

  expect(Object.getOwnPropertyDescriptor(newObject, "a").configurable).toBe(
    false
  );
  expect(Object.getOwnPropertyDescriptor(newObject, "a").writable).toBe(false);

  expect(Object.getOwnPropertyDescriptor(newObject, "c").configurable).toBe(
    false
  );
  expect(Object.getOwnPropertyDescriptor(newObject, "c").writable).toBe(false);

  expect(Object.getOwnPropertyDescriptors(newObject.c)[2].writable).toBe(false);

  expect(Object.getOwnPropertyDescriptors(newObject.c)[2].configurable).toBe(
    false
  );

  expect(Object.getOwnPropertyDescriptors(newObject.c[2])[2].writable).toBe(
    false
  );

  expect(Object.getOwnPropertyDescriptors(newObject.c[2])[2].configurable).toBe(
    false
  );

  expect(
    Object.getOwnPropertyDescriptors(newObject.c[2][2])["c5"].writable
  ).toBe(false);

  expect(
    Object.getOwnPropertyDescriptors(newObject.c[2][2])["c5"].configurable
  ).toBe(false);
});
