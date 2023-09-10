class Graph {
  constructor() {
    this.vertices = new Set();
    this.edges = {};
  }

  addVertex(vertex) {
    if (this.vertices.has(vertex)) {
      console.log("Vertex is already in the graph.");
    } else {
      this.vertices.add(vertex);
      this.edges[vertex] = new Set();
      console.log("Vertex added.");
    }
  }
  addEdge(fromVertex, toVertex) {
    if (fromVertex === toVertex) {
      console.log("Can not add from vertex to same vertex");
      return;
    }
    const vertices = this.vertices;
    if (vertices.has(fromVertex) && vertices.has(toVertex)) {
      this.edges[fromVertex].add(toVertex);
      this.edges[toVertex].add(fromVertex);
      console.log("Edge added.");
      return;
    }
    if (!vertices.has(fromVertex))
      console.log(`${fromVertex} is not in the graph.`);
    if (!vertices.has(toVertex))
      console.log(`${toVertex} is not in the graph.`);
  }
}

module.exports = { Graph };
