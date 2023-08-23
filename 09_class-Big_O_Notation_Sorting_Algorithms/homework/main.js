const { bubbleSort } = require("./utils/bubbleSort");
const { mergeSort } = require("./utils/mergeSort");
const { quickSort } = require("./utils/quickSort");
const { generateSortedArray } = require("./utils/generateSortedArray");
const { generateRandomArray } = require("./utils/generateRandomArray");

// Returns the average sort time given an array, sort algorithm
// and number of iterations for calculating the average time
const averageSortTime = (array, sortAlgorithm, iterations) => {
  const startTime = Date.now();

  for (let i = 0; i < iterations; i++) {
    const sortedArray = sortAlgorithm([...array]);
  }

  const averageExecutionTime = (Date.now() - startTime) / iterations;
  return averageExecutionTime;
};

const maxArrayLength = 100;
const iterationsForAverage = 1;

// 1. Stores average execution time for each method when
// ascending ordered array is sorted
const bubbleAscendingExecutionTime = [];
const mergeAscendingExecutionTime = [];
const quickAscendingExecutionTime = [];

// 2. Stores average execution time for each method when
// descencing ordered array is sorted
const bubbleDescendingExecutionTime = [];
const mergeDescendingExecutionTime = [];
const quickDescendingExecutionTime = [];

// 3. Stores average execution time for each method when
// random array is sorted
const bubbleRandomExecutionTime = [];
const mergeRandomExecutionTime = [];
const quickRandomExecutionTime = [];

for (let i = 2; i < maxArrayLength; i++) {
  /* // 1. Getting executions time in ascending order array
  const ascendingArray = generateSortedArray(i, "ascending");
  bubbleAscendingExecutionTime.push(
    averageSortTime(ascendingArray, bubbleSort, iterationsForAverage)
  );
  mergeAscendingExecutionTime.push(
    averageSortTime(ascendingArray, mergeSort, iterationsForAverage)
  );
  quickAscendingExecutionTime.push(
    averageSortTime(ascendingArray, quickSort, iterationsForAverage)
  );

  // 2. Getting executions time in descending order array
  const descencingArray = generateSortedArray(i, "descending");
  bubbleDescendingExecutionTime.push(
    averageSortTime(descencingArray, bubbleSort, iterationsForAverage)
  );
  mergeDescendingExecutionTime.push(
    averageSortTime(descencingArray, mergeSort, iterationsForAverage)
  );
  quickDescendingExecutionTime.push(
    averageSortTime(descencingArray, quickSort, iterationsForAverage)
  ); */

  // 3. Getting executions time in random array
  const randomArray = generateRandomArray(i);
  bubbleRandomExecutionTime.push(
    averageSortTime(randomArray, bubbleSort, iterationsForAverage)
  );
  mergeRandomExecutionTime.push(
    averageSortTime(randomArray, mergeSort, iterationsForAverage)
  );
  quickRandomExecutionTime.push(
    averageSortTime(randomArray, quickSort, iterationsForAverage)
  );
}

const nodeplotlib = require('nodeplotlib');

const data = [
  {
    x: [1, 2, 3, 4],
    y: [10, 15, 13, 17],
    type: 'line'
  }
];

const layout = {
  title: 'Simple Line Plot',
  xaxis: { title: 'X-axis' },
  yaxis: { title: 'Y-axis' }
};

// Create a plot using Python's matplotlib
nodeplotlib.plot(data, layout);