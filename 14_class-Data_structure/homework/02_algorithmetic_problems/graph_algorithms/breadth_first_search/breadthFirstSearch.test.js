const { BFSGraph } = require("./breadthFirstSearch");

test("Expect path to be found", () => {
  const graph = new BFSGraph();

  graph.addVertex("A");
  graph.addVertex("B");
  graph.addVertex("C");
  graph.addVertex("D");
  graph.addVertex("E");
  graph.addVertex("F");

  graph.addEdge("A", "B");
  graph.addEdge("B", "E");
  graph.addEdge("B", "D");
  graph.addEdge("D", "E");
  graph.addEdge("C", "D");
  graph.addEdge("C", "A");
  graph.addEdge("F", "A");
  graph.addEdge("F", "C");

  expect(graph.BFSShortestPath("F", "E")).toBe(["F", "A", "C", "B", "D"]);
});
