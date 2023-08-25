const generateReport = (description, arrayTime, sortObjects, xAxis) => {
  console.log(`
///////////////////////////////////////////////////////////////////////////

Result for Sorting Algorithm Performance Anlysis with ${description} arrays
`);
  const report = [];
  // Generating data set for report
  for (let i = 0; i < xAxis.length; i++) {
    // Creating each sub data set for the report
    const dataToPush = {};
    dataToPush["arrayLength"] = xAxis[i]; // Array length for sub data set

    for (let j = 0; j < sortObjects.length; j++) {
      // Adding sort time for each array length and each sorth method
      dataToPush[sortObjects[j].title] = `${sortObjects[j][arrayTime][i]} ms`;
    }

    // Adding subdata set to data set
    report.push(dataToPush);
  }
  console.table(report); // reporting the data set

  console.log(`
Execution time for performing all sorts 
  `);

  const totalExecutionTime = {};

  for (let i = 0; i < sortObjects.length; i++) {
    totalExecutionTime[sortObjects[i].title] = `${sortObjects[i][
      arrayTime
    ].reduce((acc, el) => acc + el, 0)} ms`;
  }

  console.table(totalExecutionTime);
};

module.exports = { generateReport };
