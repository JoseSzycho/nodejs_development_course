class Graph {
  constructor() {
    this.root = null;
    this.vertices = new Set();
    this.edges = {};
  }

  addVertex(vertex) {
    if (this.root === null) this.root = vertex;
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
  depthFirstSearch(dataToFind) {
    const edge = this.edges;
    const vertexWithEdge = Object.getOwnPropertyNames(edge);
    vertexWithEdge.forEach((vertex) => {
      if (edge[vertex].size === 0)
        throw new Error(`Vertex ${vertex} do not have edges.`);
    });

    const stack = [];
    const visited = new Set();
    edge[this.root].forEach((el) => stack.push(el));

    do {
      if (stack.length === 0) return false;
      const actualNode = stack.shift();
      if (visited.has(actualNode)) continue;
      visited.add(actualNode);
      if (actualNode === dataToFind) return true;
      edge[actualNode].forEach((el) => stack.push(el));
    } while (true);
  }
}

module.exports = { Graph };
