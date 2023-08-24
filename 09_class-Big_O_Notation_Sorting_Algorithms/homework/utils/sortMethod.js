// Object function constructor, stores information for
// the computations time
function sortMethod(title, sort) {
  this.title = title; // Stores sort method name
  this.sortMethod = sort; // Calculates average sort time
  this.ascendingTimes = []; // Stores exectution time for each array length
  this.descendingTimes = []; // Stores exectution time for each array length
  this.randomTimes = []; // Stores exectution time for each array length
}

module.exports = { sortMethod };
