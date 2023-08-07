// For setting Writable descriptor property to true or false
const setWritableDescriptor = (obj, key, value) => {
  Object.defineProperty(obj, key, {
    writable: value,
  });
};

const isWritable = (obj, key) => {
  if (Object.getOwnPropertyDescriptor(obj, key).writable == true) return true;
  return false;
};

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  email: "john.doe@example.com",
  updateInfo: (newInfo) => {
    const keys = Object.getOwnPropertyNames(person); // this way I cant get non enumerable properties
    keys.forEach((key) => {
      if (Object.keys(newInfo).includes(key)) {
        // If a newFinfo property is not in person, we ignore it
        if (!isWritable(person, key))
          // if property is onlyRead, throws error
          throw new Error("Cannot update read only properties.");
        person[key] = newInfo[key];
      }
    });
  },
};

// Setting properties as no-writable (only read)
Object.keys(person).forEach((key) => setWritableDescriptor(person, key, false));

// Creating new property
Object.defineProperty(person, "address", {
  value: {},
  writable: true,
  enumerable: false,
  configurable: false,
});

module.exports = {
  person,
};
