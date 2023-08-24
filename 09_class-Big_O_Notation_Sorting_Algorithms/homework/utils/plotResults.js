const nodeplotlib = require("nodeplotlib");

const plotResults = (arrayTime, xAxis, sortObjects, title) => {
  const data = [
    {
      x: xAxis,
      y: sortObjects[0][arrayTime],
      type: "line",
      name: sortObjects[0].title,
    },
    {
      x: xAxis,
      y: sortObjects[1][arrayTime],
      type: "line",
      name: sortObjects[1].title,
    },
    {
      x: xAxis,
      y: sortObjects[2][arrayTime],
      type: "line",
      name: sortObjects[2].title,
    },
  ];

  const layout = {
    title: title,
    xaxis: { title: "Length of array" },
    yaxis: { title: "Time execution [ms]" },
  };

  nodeplotlib.plot(data, layout);
};

module.exports = { plotResults };
