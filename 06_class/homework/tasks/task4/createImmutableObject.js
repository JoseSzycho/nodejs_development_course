// Sets a property descriptor to be only read
const setPropOnlyRead = (obj, key) =>
  Object.defineProperty(obj, key, {
    writable: false,
    configurable: false,
  });

// Recursive function for making all properties descriptors only read
const setPropertiesDescriptors = (obj) => {
  for (let key in obj) {
    if (typeof obj[key] == "object") {
      // If property is an array / object
      setPropOnlyRead(obj, key); // Set the "object" property to only read
      setPropertiesDescriptors(obj[key]); // call recursive fuction to make this object properties also only read
    }
    setPropOnlyRead(obj, key); // setting property of an object to only read
  }
};

const createImmutableObject = (obj) => {
  const newObj = JSON.parse(JSON.stringify(obj)); // Create a deep copy of object
  setPropertiesDescriptors(newObj); //calling recusrive function for making ALL properties only read
  return newObj; //
};

// Creating immutable version of person from task 1
const person = require("../task1/person");
const immutablePerson = createImmutableObject(person);

// console.log(Object.getOwnPropertyDescriptors(immutablePerson)); => {
 /* person: {
    value: {
      firstName: 'John',
      lastName: 'Doe',
      age: 30,
      email: 'john.doe@example.com'
    },
    writable: false,
    enumerable: true,
    configurable: false
  }
}
*/
module.exports = { createImmutableObject };
