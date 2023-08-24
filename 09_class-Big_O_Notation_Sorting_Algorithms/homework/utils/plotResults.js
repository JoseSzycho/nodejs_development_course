const nodeplotlib = require("nodeplotlib");

const plotResults = (
  xAxis,
  bubbleExecutionTime,
  mergeExecutionTime,
  quickExecutionTime,
  title
) => {
  const data = [
    {
      x: xAxis,
      y: bubbleExecutionTime,
      type: "line",
      name: "Bubble Sort",
    },
    {
      x: xAxis,
      y: mergeExecutionTime,
      type: "line",
      name: "Merge Sort",
    },
    {
      x: xAxis,
      y: quickExecutionTime,
      type: "line",
      name: "Quick Sort",
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
