# Shortest path

## Purpose

Shortest path of a graph is a crucial algorithm in computer science, as it can trace the connection between two different nodes
with minimal steps.

In computer science can be used for:

- Finding shortest way in a map
- Giving people recommendations in social media

## Use example

```js
// Importing Graph class with this extended algorithm
const { BFSGraph } = require("./breadthFirstSearch");

// Creating new BSFGraph instance
const graph = new BFSGraph();

// Creating vertices
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

// Creating edges
graph.addEdge("A", "B");
graph.addEdge("B", "E");
graph.addEdge("B", "D");
graph.addEdge("D", "E");
graph.addEdge("C", "D");
graph.addEdge("C", "A");
graph.addEdge("F", "A");
graph.addEdge("F", "C");

// Finding path
graph.BFSShortestPath("F", "E"); // ["F", "A", "C", "B", "D"]
```

<a name="BFSGraph"></a>

## BFSGraph ⇐ <code>Graph</code>

Extended class of Graph that adds a BFS algorithm for finding the path

**Kind**: global class  
**Extends**: <code>Graph</code>  
<a name="BFSGraph+BFSShortestPath"></a>

### bfsGraph.BFSShortestPath(startNode, endNode) ⇒ <code>Array</code>

Returns the path with the way for going from startNode to endNode

It works by using a variation of bsf of the class Graph, the difference
is that here, we store the previous unvisited node before going to
the next one, so we can store the correct path.

**Kind**: instance method of [<code>BFSGraph</code>](#BFSGraph)  
**Returns**: <code>Array</code> - Array containing the path

| Param     | Type              | Description    |
| --------- | ----------------- | -------------- |
| startNode | <code>Node</code> | The start node |
| endNode   | <code>Node</code> | The end node   |
