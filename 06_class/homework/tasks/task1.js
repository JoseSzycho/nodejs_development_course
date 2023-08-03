const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  email: "john.doe@example.com",
};

for (let key in person) {
  Object.defineProperty(person, key, {
    writable: false,
  });
}

module.exports = {
  person,
};
