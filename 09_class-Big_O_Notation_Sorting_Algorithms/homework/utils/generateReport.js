const { bubbleSort } = require("./bubbleSort");

const generateReport = (description, arrayTime, sortObjects, xAxis) => {
  console.log(`
///////////////////////////////////////////////////////////////////////////

Result for Sorting Algorithm Performance Anlysis with ${description} arrays
`);
  const report = [];
  for (let i = 0; i < xAxis.length; i++) {
    report.push({
      arrayLength: xAxis[i],
      BubbleSortTime: `${sortObjects[0][arrayTime][i]} ms`,
      MergeSortTime: `${sortObjects[1][arrayTime][i]} ms`,
      QuickSortTime: `${sortObjects[2][arrayTime][i]} ms`,
    });
  }
  console.table(report);

  console.log(`
Execution time for performing all sorts 
  `);
  const averageTime = {
    BubbleSortTime: `${sortObjects[0][arrayTime].reduce((acc, el) => acc + el, 0)} ms`,
    MergeSortTime: `${sortObjects[1][arrayTime].reduce((acc, el) => acc + el, 0)} ms`,
    QuickSortTime: `${sortObjects[2][arrayTime].reduce((acc, el) => acc + el, 0)} ms`,
  };
  console.table(averageTime);
};

module.exports = { generateReport };
