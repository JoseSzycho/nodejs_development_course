

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