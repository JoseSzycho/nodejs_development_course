# Graph

## Purpose

Graph is a data structure that allows to store data that consists of nodes and edges. This data structure is very good for modeling and studying relationships and connections between different nodes.

In computing science it can be used for:

- Representing computers networks
- Representing social networks connections
- Computer science algorithms (path finding), dependency resolution

## Time complexity

- addVertex: O(1)
- addEdge: O(1)
- depthFirstSearch: O(V + E), V is number of vertex, E is number of edges
- breathFirstSearch: O(V + E), V is number of vertex, E is number of edges

## Use example

```js
// Importing class
const { Graph } = require("./Graph");

// Creating graph instance
const graph = new Graph();

// Adding nodes to graph
graph.addVertex(1); // Vertex added.
graph.addVertex(2); // Vertex added.
graph.addVertex(3); // Vertex added.

// Adding edges to nodes
graph.addEdge(1, 2); // Edge added.
graph.addEdge(1, 3); // Edge added.

// Searching element with depthFirstSearch
graph.depthFirstSearch(3); // true

// Searching element with breathFirstSearch
graph.breathFirstSearch(3); // true
```

<a name="Graph"></a>

## Graph

Class that represent a graph

It works by storing the vertex in a Set, so no repeated vertex will be added,
and stores the edges in a object, each property of the object is represented
by a vertex and the value is a Set that contains its edges.

**Kind**: global class

- [Graph](#Graph)
  - [.addVertex(vertex)](#Graph+addVertex)
  - [.addEdge(fromVertex, toVertex)](#Graph+addEdge) ⇒
  - [.breathFirstSearch(dataToFind)](#Graph+breathFirstSearch) ⇒ <code>Boolean</code>
  - [.depthFirstSearch(dataToFind)](#Graph+depthFirstSearch) ⇒ <code>Boolean</code>

<a name="Graph+addVertex"></a>

### graph.addVertex(vertex)

Adds a vertex to the graph

It works by following the next steps:

- Step 1: if the graph do not have a root, sets the vertex as root.
- Step 2: if the graph already contains this vertex, do nothing
- Step 3: if the vertex is not in the graph, it stores the vertex and create
  this vertex property at the edges object with an empty set.

**Kind**: instance method of [<code>Graph</code>](#Graph)

| Param  | Type            | Description |
| ------ | --------------- | ----------- |
| vertex | <code>\*</code> | The vertex  |

<a name="Graph+addEdge"></a>

### graph.addEdge(fromVertex, toVertex) ⇒

Creates an edge between two vertex

It works following the next steps:

- Step 1: if both vertex to create edge are the same, do nothing-
- Step 2: creates the edge between the vertex if both vertex are already in the graph
- Step 3: if one ore both vertex are not stored in the graph, console the missing vertex

**Kind**: instance method of [<code>Graph</code>](#Graph)

| Param      | Type            | Description       |
| ---------- | --------------- | ----------------- |
| fromVertex | <code>\*</code> | One of the vertex |
| toVertex   | <code>\*</code> | One of the vertex |

<a name="Graph+breathFirstSearch"></a>

### graph.breathFirstSearch(dataToFind) ⇒ <code>Boolean</code>

Uses breath-first-search algorithm to find a certain vertex.

It works by following the next steps:

- Step 1: check for vertex with no edges, throw error if so.
- Step 2: creates a queue that stores the vertex to visit and a
  visited set, that stores the already visited vertex
- Step 3: load the queue with the first vertex to visit with the edges
  from the root vertex, so the algorithm can start.
- Step 4: algorithm implementation. It transverse the graph thanks to the
  visited set and the queue. The queue is loaded with the edges of the root vertex,
  we dequeue the first element and visit this vertex, then this vertex is marked
  as visited. After that we enqueue all the edges of this visited vertex.
  Then the process is repeated dequeueing one vertex at a time and visiting the vertex
  if it has not visiting before.
  In each visited vertex, we check if we have a match with the data.

**Kind**: instance method of [<code>Graph</code>](#Graph)  
**Returns**: <code>Boolean</code> - <true> if a match, <false> if not match

| Param      | Type            | Description |
| ---------- | --------------- | ----------- |
| dataToFind | <code>\*</code> | The vertex  |

<a name="Graph+depthFirstSearch"></a>

### graph.depthFirstSearch(dataToFind) ⇒ <code>Boolean</code>

Uses depth-first-search algorithm to find a certain vertex.

It works by following the next steps:

- Step 1: check for vertex with no edges, throw error if so.
- Step 2: creates a stack that stores the vertex to visit and a
  visited set, that stores the already visited vertex
- Step 3: load the stack with the first vertex to visit and marks it
  as visited.
- Step 4: algorithm implementation. The algorithm works by having a visited set
  (that stores the visited vertex), and a stack (that stores the next vertex to visit).
  It works by pushing one edge vertex at a time to the stack. Every pushed vertex
  is marked as visited. After that we repeat the process of visiting a edge vertex of the
  last stack element, and pushing this visited node.
  The thing is that we only visits the unvisited vertex of last stack element. When we arrive a stack element
  that do not have any unvisited node, we remove this element from the stack and repeats the process.

**Kind**: instance method of [<code>Graph</code>](#Graph)  
**Returns**: <code>Boolean</code> - <true> if a match, <false> if not a match

| Param      | Type            |
| ---------- | --------------- |
| dataToFind | <code>\*</code> |
