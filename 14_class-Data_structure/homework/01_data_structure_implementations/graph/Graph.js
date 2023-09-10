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

  #checkForLonelyVertex() {
    const edge = this.edges;
    const vertexWithEdge = Object.getOwnPropertyNames(edge);
    vertexWithEdge.forEach((vertex) => {
      if (edge[vertex].size === 0)
        throw new Error(`Vertex ${vertex} do not have edges.`);
    });
  }
  breathFirstSearch(dataToFind) {
    this.#checkForLonelyVertex();
    const edge = this.edges;
    const queue = [];
    const visited = new Set();
    edge[this.root].forEach((el) => queue.push(el));

    do {
      if (queue.length === 0) return false;
      const actualNode = queue.shift();
      if (visited.has(actualNode)) continue;
      visited.add(actualNode);
      if (actualNode === dataToFind) return true;
      edge[actualNode].forEach((el) => queue.push(el));
    } while (true);
  }
  depthFirstSearch(dataToFind) {
    this.#checkForLonelyVertex();
    const edge = this.edges;
    const stack = [];
    const visited = new Set();
    stack.push(this.root);
    visited.add(this.root);

    do {
      if (stack.length === 0) return false;
      const lastStackEl = stack[stack.length - 1];
      if (lastStackEl === dataToFind) return true;
      let nextNode = null;
      edge[lastStackEl].forEach((el) => {
        if (!visited.has(el)) nextNode = el;
      });
      if (nextNode != null) {
        stack.push(nextNode);
        visited.add(nextNode);
        console.log(nextNode);
        continue;
      }
      stack.pop();
    } while (true);
  }
}

module.exports = { Graph };
