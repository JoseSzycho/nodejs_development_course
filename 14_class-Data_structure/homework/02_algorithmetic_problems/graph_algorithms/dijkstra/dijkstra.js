const {
  Graph,
} = require("../../../01_data_structure_implementations/graph/Graph");
/**
 * Class that represents a graph with weight on the edges.
 *
 * Please refer to ``./01_data_structure_implementations/graph/`` for more information
 * about graph data structures.
 * @extends Graph
 */
class WeightedGraph extends Graph {
  constructor() {
    super();
  }
  /**
   * Adds a edge to with weight to the graph. It is mostly the same method as in
   * ``./01_data_structure_implementations/graph/``, with the difference we also
   * add the weight of the graph.
   *
   * @param {*} fromVertex One vertex
   * @param {*} toVertex  The other vertex
   * @param {*} weight The weight of the edge
   * @returns {}
   */
  addEdge(fromVertex, toVertex, weight) {
    if (fromVertex === toVertex) {
      console.log("Can not add from vertex to same vertex");
      return;
    }

    if (typeof weight != "number") {
      console.log("Can not add edge with a invalid weight");
      return;
    }

    const vertices = this.vertices;

    if (vertices.has(fromVertex) && vertices.has(toVertex)) {
      // Here is the difference of the super().addEdge, here we add
      // a object that also includes the edge weight, not only the vertex.
      this.edges[fromVertex].add({ node: toVertex, weight: weight });
      this.edges[toVertex].add({ node: fromVertex, weight: weight });
      console.log("Edge added.");
      return;
    }

    if (!vertices.has(fromVertex))
      console.log(`${fromVertex} is not in the graph.`);
    if (!vertices.has(toVertex))
      console.log(`${toVertex} is not in the graph.`);
  }

  /**
   * Implements Dijkstra algorithm for finding the shortest path from
   * a start node to a end node.
   *
   * Code inspired by next article: https://levelup.gitconnected.com/finding-the-shortest-path-in-javascript-dijkstras-algorithm-8d16451eea34
   * and many other information.
   *
   * @param {*} startNode The start node
   * @param {*} endNode The end node
   * @returns {}
   */
  dijkstra(startNode, endNode) {
    // Setting work variables
    const distances = {}; // Stores distances form start node
    const previous = {}; // Store the previous visited nodes
    const visited = {}; // Stores visited nodes
    const queue = []; // Stores neighbors tu visit

    // Setting unvisited nodes and distances to infinite
    this.vertices.forEach((el) => {
      distances[el] = Infinity;
      visited[el] = false;
    });

    // Setting first node distance as 0
    distances[startNode] = 0;

    // Pushing first node to queue for visiting its neighbors
    queue.push({ node: startNode, distance: 0 });

    // If queue is 0, we have visited all of the nodes
    while (queue.length > 0) {
      // Sorting queue so we visit the node with lowest distance first.
      queue.sort((a, b) => a.distance - b.distance);

      // Getting node and distance for visiting it
      const { node: actualNode, distance: currentDistance } = queue.shift();

      // If node already visited, skip to next loop
      if (visited[actualNode]) continue;

      // Marking the node as visited
      visited[actualNode] = true;

      // Calculating distances for each actual node neighbor
      this.edges[actualNode].forEach((el) => {
        // Getting neighbor and calculating distance
        const { node, weight } = el;
        const distanceNextNode = currentDistance + weight;

        // If distance is less than actual node distance
        if (distanceNextNode < distances[node]) {
          // Store this node distance
          distances[node] = distanceNextNode;
          // Store as previous node
          previous[node] = actualNode;
          // Push node to queue
          queue.push({ node, distance: distanceNextNode });
        }
      });
    }

    // Using previous path to restore the shortest path
    const path = [];
    let actualNode = endNode;
    while (actualNode) {
      path.unshift(actualNode);
      actualNode = previous[actualNode];
    }

    return path;
  }
}

module.exports = { WeightedGraph };
