// Objects data type are not acceptable inside array as there is
// no easy way to compare object for object equailty for returning
// unique elements.
// A simple way could be using Lodash _. isEqual() method with a loop
// for looking for the unique elements

const errorIfNotArray = () => {
  return (el) => {
    if (!Array.isArray(el)) throw new TypeError("Expect a array.");
  };
};

const errorIfContainsObject = () => {
  return (el) => {
    if (typeof el == "object")
      throw new TypeError("Cannot compare object data type.");
  };
};

const gettArrayIntersection = (array1, array2) => {
  // Checking for input type
  [array1, array2].forEach(errorIfNotArray());
  [...array1, ...array2].forEach(errorIfContainsObject());

  // getting intersection
  const intersectionArray = array1.filter((el) => array2.includes(el));

  return [...new Set(intersectionArray)]; // returns unique elements
};

module.exports = gettArrayIntersection;
