const { bubbleSort } = require("./utils/bubbleSort");
const { mergeSort } = require("./utils/mergeSort");
const { quickSort } = require("./utils/quickSort");
const { generateSortedArray } = require("./utils/generateSortedArray");
const { generateRandomArray } = require("./utils/generateRandomArray");
const { averageSortTime } = require("./utils/averageSortTime");
const { plotResults } = require("./utils/plotResults");
const { generateReport } = require("./utils/generateReport");
const { sortMethod } = require("./utils/sortMethod");

module.exports = {
  bubbleSort,
  mergeSort,
  quickSort,
  generateSortedArray,
  generateRandomArray,
  averageSortTime,
  plotResults,
  generateReport,
  sortMethod,
};
