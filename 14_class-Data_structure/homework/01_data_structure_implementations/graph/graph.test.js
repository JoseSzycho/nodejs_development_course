const { Graph } = require("./Graph");

let graph;
let consoleLog;
beforeEach(() => {
  // Create a spy on console.log
  consoleLog = jest.spyOn(console, "log");
  graph = new Graph();
});

describe("Testing addVertex() method", () => {
  test("Expect vertex to be added", () => {
    const vertices = [1, 2, 3, 4, 5];
    vertices.forEach((el) => {
      graph.addVertex(el);
      expect(consoleLog).toHaveBeenCalledWith("Vertex added.");
    });
    vertices.forEach((el) => {
      expect(graph.vertices.has(el)).toBe(true);
    });
    graph.addEdge(5, 8);
  });
});

describe("Testing addEdge() method", () => {
  test("Expect edges to not be created if vertex is not defined", () => {
    graph.addEdge(1, 2);
    expect(consoleLog).toHaveBeenCalledWith("2 is not in the graph.");
  });
  test("Expect edges to be created.", () => {
    const vertices = [1, 2, 3, 4, 5];
    vertices.forEach((vertex) => graph.addVertex(vertex));
    graph.addEdge(1, 2);
    graph.addEdge(2, 3);
    graph.addEdge(3, 4);
    graph.addEdge(4, 5);
    graph.addEdge(5, 1);
    graph.addEdge(1, 3);
    graph.addEdge(1, 4);
    graph.addEdge(1, 5);

    expect(graph.edges[1].has(2)).toBe(true);
    expect(graph.edges[1].has(5)).toBe(true);
    expect(graph.edges[1].has(3)).toBe(true);
    expect(graph.edges[1].has(4)).toBe(true);
    expect(graph.edges[2].has(1)).toBe(true);
    expect(graph.edges[2].has(3)).toBe(true);
    expect(graph.edges[3].has(2)).toBe(true);
    expect(graph.edges[3].has(4)).toBe(true);
    expect(graph.edges[3].has(1)).toBe(true);

    // Inspected visually with console log and all add added, with out duplications.
  });
});
