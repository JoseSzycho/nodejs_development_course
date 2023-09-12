const {
  Graph,
} = require("../../../01_data_structure_implementations/graph/Graph");
/**
 * Extended class of Graph that adds a BFS algorithm for finding the path
 * @extends Graph
 */
class BFSGraph extends Graph {
  constructor() {
    super();
  }
  /**
   * Returns the path with the way for going from startNode to endNode
   *
   * It works by using a variation of bsf of the class Graph, the difference
   * is that here, we store the previous unvisited node before going to
   * the next one, so we can store the correct path.
   *
   * @param {Node} startNode The start node
   * @param {Node} endNode The end node
   * @returns {Array} Array containing the path
   */
  BFSShortestPath(startNode, endNode) {
    // Code explanation can be found on the Graph data structure
    const queue = [startNode];
    const visited = new Set();
    const path = new Set();

    do {
      if (queue.length === 0) return false;
      const actualNode = queue.shift();
      visited.add(actualNode);

      if (actualNode === endNode) {
        return Array.from(path);
      }

      this.edges[actualNode].forEach((el) => {
        if (!visited.has(el)) {
          path.add(actualNode); // variation for storing the path
          queue.push(el);
        }
      });
    } while (true);
  }
}

module.exports = { BFSGraph };
