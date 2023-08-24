const { bubbleSort } = require("./utils/bubbleSort");
const { mergeSort } = require("./utils/mergeSort");
const { quickSort } = require("./utils/quickSort");
const { generateSortedArray } = require("./utils/generateSortedArray");
const { generateRandomArray } = require("./utils/generateRandomArray");
const { averageSortTime } = require("./utils/averageSortTime");
const { plotResults } = require("./utils/plotResults");

// To be modified by user
const maxArrayLength = 100; // the bigger, the most result we obtain, higer execution time
const iterationsForAverage = 10000; // the bigger, the smoother the plot will be, higher the execution time
const multiplier = 3; // the bigger, the fastest the script will be executed, but loosing presicion

const xAxis = [];

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

// Create different arrays from length = 2 to length < maxArrayLength
// For each method and each array length, stores the average time execution
for (let i = 2; i < maxArrayLength; i = i + multiplier) {
  // The multiplier is used for making the execution faster, as
  // there is not big difference in the executions time when incresing i by 1.

  xAxis.push(i); // Getting x-axis value

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
/*   bubbleRandomExecutionTime.push(
    averageSortTime(randomArray, bubbleSort, iterationsForAverage)
  ); */
  mergeRandomExecutionTime.push(
    averageSortTime(randomArray, mergeSort, iterationsForAverage)
  );
  quickRandomExecutionTime.push(
    averageSortTime(randomArray, quickSort, iterationsForAverage)
  );
}

// Ploting the three methods results for each array scenario

plotResults(
  xAxis,
  bubbleAscendingExecutionTime,
  mergeAscendingExecutionTime,
  quickAscendingExecutionTime,
  "Algorithm comparation with ascending sorted arrays"
);

plotResults(
  xAxis,
  bubbleDescendingExecutionTime,
  mergeDescendingExecutionTime,
  quickDescendingExecutionTime,
  "Algorithm comparation with descending sorted arrays"
);

plotResults(
  xAxis,
  bubbleRandomExecutionTime,
  mergeRandomExecutionTime,
  quickRandomExecutionTime,
  "Algorithm comparation with random arrays"
);

// Ploting results merge vs quick sort algorithms

plotResults(
  xAxis,
  [],
  mergeAscendingExecutionTime,
  quickAscendingExecutionTime,
  "Algorithm comparation with ascending sorted arrays"
);

plotResults(
  xAxis,
  [],
  mergeDescendingExecutionTime,
  quickDescendingExecutionTime,
  "Algorithm comparation with descending sorted arrays"
);

plotResults(
  xAxis,
  [],
  mergeRandomExecutionTime,
  quickRandomExecutionTime,
  "Algorithm comparation with random arrays"
);
