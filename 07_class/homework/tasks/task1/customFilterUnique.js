// Task 1.2 is in the beginning of test file

const isArray = (el) => Array.isArray(el); // returns true if el is an array
const isFunction = (el) => typeof el == "function"; // returns true if el is a function

const customFilterUnique = (array, callback) => {
  // checking for parameters type error
  if (!isArray(array)) throw new TypeError("Expect a array.");
  if (!isFunction(callback))
    throw new TypeError("Callback must be a function.");

  const filteredArray = array.filter(callback); // filtering array with callback
  const uniqueArray = [...new Set(filteredArray)]; // gettin unique array elements

  return uniqueArray;
};

module.exports = customFilterUnique;
