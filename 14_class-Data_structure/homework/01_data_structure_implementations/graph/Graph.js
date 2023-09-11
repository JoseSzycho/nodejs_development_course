/**
 * Class that represent a graph
 *
 * It works by storing the vertex in a Set, so no repeated vertex will be added,
 * and stores the edges in a object, each property of the object is represented
 * by a vertex and the value is a Set that contains its edges.
 */
class Graph {
  constructor() {
    this.root = null;
    this.vertices = new Set();
    this.edges = {};
  }

  /**
   * Adds a vertex to the graph
   *
   * It works by following the next steps:
   * - Step 1: if the graph do not have a root, sets the vertex as root.
   * - Step 2: if the graph already contains this vertex, do nothing
   * - Step 3: if the vertex is not in the graph, it stores the vertex and create
   * this vertex property at the edges object with an empty set.
   * @param {*} vertex The vertex
   */
  addVertex(vertex) {
    // Step 1
    if (this.root === null) this.root = vertex;
    // Step 2
    if (this.vertices.has(vertex)) {
      console.log("Vertex is already in the graph.");
    } else {
      // Step 3
      this.vertices.add(vertex);
      this.edges[vertex] = new Set();
      console.log("Vertex added.");
    }
  }
  /**
   * Creates an edge between two vertex
   *
   * It works following the next steps:
   * - Step 1: if both vertex to create edge are the same, do nothing-
   * - Step 2: creates the edge between the vertex if both vertex are already in the graph
   * - Step 3: if one ore both vertex are not stored in the graph, console the missing vertex
   *
   * @param {*} fromVertex One of the vertex
   * @param {*} toVertex One of the vertex
   * @returns {}
   */
  addEdge(fromVertex, toVertex) {
    // Step 1
    if (fromVertex === toVertex) {
      console.log("Can not add from vertex to same vertex");
      return;
    }
    // Short handle to vertices
    const vertices = this.vertices;
    // Step 2
    if (vertices.has(fromVertex) && vertices.has(toVertex)) {
      this.edges[fromVertex].add(toVertex);
      this.edges[toVertex].add(fromVertex);
      console.log("Edge added.");
      return;
    }
    // Step 3
    if (!vertices.has(fromVertex))
      console.log(`${fromVertex} is not in the graph.`);
    if (!vertices.has(toVertex))
      console.log(`${toVertex} is not in the graph.`);
  }

  /**
   * Checks if there is a vertex with no connection/edges with the graph.
   * Throws error if so.
   *
   * How it works: all the added vertex are store are properties in the
   * edges object, so we loop through all of these properties, if one of those
   * properties set size is 0, this vertex do not have edges.
   */
  #checkForLonelyVertex() {
    const edge = this.edges;
    const vertexWithEdge = Object.getOwnPropertyNames(edge);
    vertexWithEdge.forEach((vertex) => {
      if (edge[vertex].size === 0)
        throw new Error(`Vertex ${vertex} do not have edges.`);
    });
  }
  /**
   * Uses breath-first-search algorithm to find a certain vertex.
   *
   * It works by following the next steps:
   *  - Step 1: check for vertex with no edges, throw error if so.
   *  - Step 2: creates a queue that stores the vertex to visit and a
   * visited set, that stores the already visited vertex
   *  - Step 3: load the queue with the first vertex to visit with the edges
   * from the root vertex, so the algorithm can start.
   *  - Step 4: algorithm implementation. It transverse the graph thanks to the
   * visited set and the queue. The queue is loaded with the edges of the root vertex,
   * we dequeue the first element and visit this vertex, then this vertex is marked
   * as visited. After that we enqueue all the edges of this visited vertex.
   * Then the process is repeated dequeueing one vertex at a time and visiting the vertex
   * if it has not visiting before.
   * In each visited vertex, we check if we have a match with the data.
   * @param {*} dataToFind The vertex
   * @returns {Boolean} <true> if a match, <false> if not match
   */
  breathFirstSearch(dataToFind) {
    // Step 1
    this.#checkForLonelyVertex();

    const edge = this.edges;

    // Step 2
    const queue = [];
    const visited = new Set();

    // Step 3
    edge[this.root].forEach((el) => queue.push(el));

    // Step 4
    do {
      // If queue is empty, algorithm finishes, no match
      if (queue.length === 0) return false;
      // Gets first vertex from the queue
      const actualNode = queue.shift();
      // If node already visited, skip to next loop
      if (visited.has(actualNode)) continue;
      // If node not visited, set node as visited
      visited.add(actualNode);
      // Check if the actualNode matches the data to find
      if (actualNode === dataToFind) return true;
      // If the data is not found, store the actualNode
      // edges to visit later
      edge[actualNode].forEach((el) => queue.push(el));
    } while (true);
  }
  /**
   * Uses depth-first-search algorithm to find a certain vertex.
   *
   * It works by following the next steps:
   *  - Step 1: check for vertex with no edges, throw error if so.
   *  - Step 2: creates a stack that stores the vertex to visit and a
   * visited set, that stores the already visited vertex
   *  - Step 3: load the stack with the first vertex to visit and marks it
   * as visited.
   * - Step 4: algorithm implementation.
   *
   * @param {*} dataToFind
   * @returns {Boolean} <true> if a match, <false> if not a match
   */
  depthFirstSearch(dataToFind) {
    // Step 1
    this.#checkForLonelyVertex();

    const edge = this.edges;

    // Step 2
    const stack = [];
    const visited = new Set();

    // Step 3
    stack.push(this.root);
    visited.add(this.root);

    // Step 4
    do {
      // If stack is empty, algorithm finishes, no match.
      if (stack.length === 0) return false;
      // Store last stack vertex
      const lastStackEl = stack[stack.length - 1];
      // If there is a match, return true
      if (lastStackEl === dataToFind) return true;

      // If not a match, we look for the next node to visit.
      let nextNode = null;
      // If last stack element have a no visited vertex, we
      // store this vertex
      edge[lastStackEl].forEach((el) => {
        // checking for a not visited vertex
        if (!visited.has(el)) nextNode = el;
      });
      // Check if we have the not visited vertex
      if (nextNode != null) {
        // Push this vertex in stack
        stack.push(nextNode);
        // Mark it as visited
        visited.add(nextNode);
        // Skip to next cycle
        continue;
      }
      // If the last stack element do not have a non visited edge,
      // we pop this element.
      stack.pop();
    } while (true);
  }
}

module.exports = { Graph };
