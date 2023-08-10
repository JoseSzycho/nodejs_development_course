const isArray = (el) => Array.isArray(el); // returns true if el is an array
const isFunction = (el) => typeof el == "function"; // returns true if el is a function

const measureArrayPerformance = (array, callback) => {
  // checking for parameters type error
  if (!isArray(array)) throw new TypeError("Expect a array.");
  if (!isFunction(callback))
    throw new TypeError("Callback must be a function.");

  const startTime = Date.now();

  callback(array);

  const endTime = Date.now();

  return endTime - startTime;
};

module.exports = measureArrayPerformance;
