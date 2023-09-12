const {
  Graph,
} = require("../../../01_data_structure_implementations/graph/Graph");

class WeightedGraph extends Graph {
  constructor() {
    super();
  }

  addEdge(fromVertex, toVertex, weight) {
    // Step 1
    if (fromVertex === toVertex) {
      console.log("Can not add from vertex to same vertex");
      return;
    }

    if (typeof weight != "number") {
      console.log("Can not add edge with a invalid weight");
      return;
    }

    // Short handle to vertices
    const vertices = this.vertices;
    // Step 2
    if (vertices.has(fromVertex) && vertices.has(toVertex)) {
      this.edges[fromVertex].add({ node: toVertex, weight: weight });
      this.edges[toVertex].add({ node: fromVertex, weight: weight });
      console.log("Edge added.");
      return;
    }
    // Step 3
    if (!vertices.has(fromVertex))
      console.log(`${fromVertex} is not in the graph.`);
    if (!vertices.has(toVertex))
      console.log(`${toVertex} is not in the graph.`);
  }

 
}

