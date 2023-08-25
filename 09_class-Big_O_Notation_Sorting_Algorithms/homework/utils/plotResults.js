const nodeplotlib = require("nodeplotlib");

const plotResults = (arrayTime, xAxis, sortObjects, title) => {
  const data = [];

  // Push data of each sorth method for later plot
  for (let i = 0; i < sortObjects.length; i++) {
    data.push({
      x: xAxis,
      y: sortObjects[i][arrayTime],
      type: "line",
      name: sortObjects[i].title,
    });
  }

  // Setting layout
  const layout = {
    title: title,
    xaxis: { title: "Length of array" },
    yaxis: { title: "Time execution [ms]" },
  };

  // Ploting data
  nodeplotlib.plot(data, layout);
};

module.exports = { plotResults };
