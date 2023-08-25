
// Returns the average sort time given an array, sort algorithm
// and number of iterations for calculating the average time
const averageSortTime = (array, sortAlgorithm, iterations) => {
    const startTime = Date.now();
  
    for (let i = 0; i < iterations; i++) {
      const sortedArray = sortAlgorithm([...array]);
    }
  
    // Calculating average time
    const averageExecutionTime = (Date.now() - startTime) / iterations;
    return averageExecutionTime;
  };

  module.exports = {averageSortTime};