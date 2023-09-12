const { WeightedGraph } = require("./dijkstra");

test("Expect to find the shortest path", () => {
  const graph = new WeightedGraph();

  graph.addVertex("A");
  graph.addVertex("B");
  graph.addVertex("C");
  graph.addVertex("D");
  graph.addVertex("E");
  graph.addVertex("F");

  graph.addEdge("A", "B", 10);
  graph.addEdge("B", "E", 4);
  graph.addEdge("B", "D", 7);
  graph.addEdge("D", "E", 2);
  graph.addEdge("C", "D", 5);
  graph.addEdge("C", "A", 1);
  graph.addEdge("F", "A", 9);
  graph.addEdge("F", "C", 7);

  const startNode = "F";
  const endNode = "E";

  expect(graph.dijkstra(startNode, endNode)).toEqual(["F", "C", "D", "E"]);
});
