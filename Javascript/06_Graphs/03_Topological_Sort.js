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

  topologicalSortDFS() {
    const visited = new Set();
    const stack = [];

    function dfs(node) {
      if (visited.has(node)) return;
      visited.add(node);

      for (const neighbor of this.graph[node]) {
        dfs(neighbor);
      }

      stack.push(node);
    }

    for (const node in this.graph) {
      if (!visited.has(node)) {
        dfs(node);
      }
    }

    return stack.reverse();
  }
}