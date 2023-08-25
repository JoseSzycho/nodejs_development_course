const {
  bubbleSort,
  mergeSort,
  quickSort,
  generateSortedArray,
  generateRandomArray,
  averageSortTime,
  plotResults,
  generateReport,
  sortMethod,
} = require("./exports");

// Creating instance for each sort method
const bubble = new sortMethod("BubbleSort", bubbleSort);
const merge = new sortMethod("MergeSort", mergeSort);
const quick = new sortMethod("QuickSort", quickSort);

// Stores the x axis for plotting results
const xAxis = [];

// To be modified by user
const maxArrayLength = 300000; // the bigger, the most results we obtain, higer execution time
const iterationsForAverage = 1; // the bigger, the smoother the plot will be, higher the execution time
const multiplier = 50000; // the bigger, the fastest the script will be executed, but loosing accuracy
const sortObjects = [bubble, quick, merge]; // Modify the array for the sort method you want to analyze
// To be modified by user

// Callback for returing average sort time
const getAverageTime = (sortTimeArray, array) => {
  return (el) =>
    el[sortTimeArray].push(
      averageSortTime(array, el.sortMethod, iterationsForAverage)
    ); // push the average sort time into the corresponding property
};

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

// Ploting the sort methods results for each array scenario
// Comment the plot you do not want to plot
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

// Generating reports
// Comment the report you do not want to show
generateReport("ascending", "ascendingTimes", sortObjects, xAxis);
generateReport("descending", "descendingTimes", sortObjects, xAxis);
generateReport("random", "randomTimes", sortObjects, xAxis);
