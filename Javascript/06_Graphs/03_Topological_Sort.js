class Graph {
  constructor(numberofVertices) {
    this.graph = {};
    this.numberofVertices = numberofVertices;
  }

  addEdge(vertex, edge) {
    if (!this.graph[vertex]) {
      this.graph[vertex] = [];
    }
    this.graph[vertex].push(edge);
  }

  topologicalSortUtil(v, visited, stack) {
    visited.push(v);

    for (const i of this.graph[v]) {
      if (!visited.includes(i)) {
        this.topologicalSortUtil(i, visited, stack);
      }
    }

    stack.unshift(v);  // Insert at the start (like stack.insert(0, v) in Python)
  }

  topologicalSort() {
    const visited = [];
    const stack = [];

    for (const vertex of Object.keys(this.graph)) {
      if (!visited.includes(vertex)) {
        this.topologicalSortUtil(vertex, visited, stack);
      }
    }

    console.log(stack);
  }
}