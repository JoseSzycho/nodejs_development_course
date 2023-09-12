# Dijkstra Shortest path algorithm

Shortest path of a graph is a crucial algorithm in computer science, as it can trace the connection between two different nodes with minimal steps.

In computer science can be used for:

- Finding shortest way in a map
- Giving people recommendations in social media

## Use example

```js
// Importing class that contains the algorithm in a method
const { WeightedGraph } = require("./dijkstra");

// Create new Weighted Graph instance
const graph = new WeightedGraph();

// Adding vertex to graph
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

// Adding edges with weight to the graph
graph.addEdge("A", "B", 10);
graph.addEdge("B", "E", 4);
graph.addEdge("B", "D", 7);
graph.addEdge("D", "E", 2);
graph.addEdge("C", "D", 5);
graph.addEdge("C", "A", 1);
graph.addEdge("F", "A", 9);
graph.addEdge("F", "C", 7);

// Path to find the shortest path
const startNode = "F";
const endNode = "E";

// Executing algorithm
graph.dijkstra(startNode, endNode); // ["F", "C", "D", "E"]
```

# Code documentation

<a name="WeightedGraph"></a>

## WeightedGraph ⇐ <code>Graph</code>

Class that represents a graph with weight on the edges.

Please refer to `./01_data_structure_implementations/graph/` for more information
about graph data structures.

**Kind**: global class  
**Extends**: <code>Graph</code>

- [WeightedGraph](#WeightedGraph) ⇐ <code>Graph</code>
  - [.addEdge(fromVertex, toVertex, weight)](#WeightedGraph+addEdge) ⇒
  - [.dijkstra(startNode, endNode)](#WeightedGraph+dijkstra) ⇒

<a name="WeightedGraph+addEdge"></a>

### weightedGraph.addEdge(fromVertex, toVertex, weight) ⇒

Adds a edge to with weight to the graph. It is mostly the same method as in
`./01_data_structure_implementations/graph/`, with the difference we also
add the weight of the graph.

**Kind**: instance method of [<code>WeightedGraph</code>](#WeightedGraph)

| Param      | Type            | Description            |
| ---------- | --------------- | ---------------------- |
| fromVertex | <code>\*</code> | One vertex             |
| toVertex   | <code>\*</code> | The other vertex       |
| weight     | <code>\*</code> | The weight of the edge |

<a name="WeightedGraph+dijkstra"></a>

### weightedGraph.dijkstra(startNode, endNode) ⇒

Implements Dijkstra algorithm for finding the shortest path from
a start node to a end node.

Code inspired by next article: https://levelup.gitconnected.com/finding-the-shortest-path-in-javascript-dijkstras-algorithm-8d16451eea34
and many other information.

**Kind**: instance method of [<code>WeightedGraph</code>](#WeightedGraph)

| Param     | Type            | Description    |
| --------- | --------------- | -------------- |
| startNode | <code>\*</code> | The start node |
| endNode   | <code>\*</code> | The end node   |
