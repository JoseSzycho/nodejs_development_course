const { bubbleSort } = require("./utils/bubbleSort");
const { mergeSort } = require("./utils/mergeSort");
const { quickSort } = require("./utils/quickSort");
const { generateSortedArray } = require("./utils/generateSortedArray");
const { generateRandomArray } = require("./utils/generateRandomArray");
const { averageSortTime } = require("./utils/averageSortTime");
const { plotResults } = require("./utils/plotResults");
const { generateReport } = require("./utils/generateReport");
const { sortMethod } = require("./utils/sortMethod");

// To be modified by user
const maxArrayLength = 20000; // the bigger, the most result we obtain, higer execution time
const iterationsForAverage = 10; // the bigger, the smoother the plot will be, higher the execution time
const multiplier = 2001; // the bigger, the fastest the script will be executed, but loosing presicion
// To be modified by user

// Callback for returing average sort time
const getAverageTime = (sortTimeArray, array) => {
  return (el) =>
    el[sortTimeArray].push(
      averageSortTime(array, el.sortMethod, iterationsForAverage)
    ); // push the average sort time into the corresponding property
};

// Creating instance for each sort method
const bubble = new sortMethod("Bubble Sort", bubbleSort);
const merge = new sortMethod("Merge Sort", mergeSort);
const quick = new sortMethod("Quick Sort", quickSort);
const sortObjects = [bubble, merge, quick];

// Stores the x axis for plotting results
const xAxis = [];

// Create different arrays from length = 2 to length < maxArrayLength
// For each sort method and each array length, stores the average time execution
for (let i = 2; i < maxArrayLength; i = i + multiplier) {
  // The multiplier is used for making the execution faster, as
  // there is not big difference in the executions time when incresing i by 1.

  xAxis.push(i); // Getting x-axis value

  // 1. Getting executions time in ascending order array
  const ascendingArray = generateSortedArray(i, "ascending");
  sortObjects.forEach(getAverageTime("ascendingTimes", ascendingArray));

  // 2. Getting executions time in descenging order array
  const descengingArray = generateSortedArray(i, "descending");
  sortObjects.forEach(getAverageTime("descendingTimes", descengingArray));

  // 3. Getting executions time in random arrays
  const randomArray = generateRandomArray(i);
  sortObjects.forEach(getAverageTime("randomTimes", randomArray));

  // 1. , 2. and 3. could be joined in only one for each with some
  // minor changes, but this way is more redeable
}

// Ploting the three methods results for each array scenario

plotResults(
  "ascendingTimes",
  xAxis,
  sortObjects,
  "Algorithm comparation with ascending sorted arrays"
);

plotResults(
  "descendingTimes",
  xAxis,
  sortObjects,
  "Algorithm comparation with descending sorted arrays"
);

plotResults(
  "randomTimes",
  xAxis,
  sortObjects,
  "Algorithm comparation with random arrays"
);

// Generatin reports

generateReport("ascending", "ascendingTimes", sortObjects, xAxis);
