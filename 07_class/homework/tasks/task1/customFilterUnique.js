// customFilterUnique does not handle nested objects or arrays. Lodash have good methdos for this.
// Task 1.2 is in the beginning of test file

const isArray = (el) => Array.isArray(el); // returns true if el is an array
const isFunction = (el) => typeof el == "function"; // returns true if el is a function
const haveNestedObject = (el) => { // throws error if there is a nest object inside array element
  if (typeof el == "object") {
    const keys = Object.getOwnPropertyNames(el);
    for (let key of keys) {
      if (typeof el[key] == "object") return true;
    }
  }
  return false;
};

const customFilterUnique = (array, callback) => {
  // checking for parameters type error
  if (!isArray(array)) throw new TypeError("Expect a array.");
  if (!isFunction(callback))
    throw new TypeError("Callback must be a function.");

  const filteredArray = array.filter(callback); // filtering array with callback

  // Stringifying so it can handle Objects for getting unique ones
  for (let i = 0; i < filteredArray.length; i++) {
    if (haveNestedObject(filteredArray[i]))
      throw new TypeError("Cannot handle nested objects.");
    filteredArray[i] = JSON.stringify(filteredArray[i]);
  }

  // getting unique elements
  const uniqueArray = [...new Set(filteredArray)];

  // parsing all unique elements
  for (let i = 0; i < uniqueArray.length; i++) {
    uniqueArray[i] = JSON.parse(uniqueArray[i]);
  }

  return uniqueArray; // returning unique array elements
};

module.exports = customFilterUnique;
