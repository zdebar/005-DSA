class Graph {
  constructor(gdict = {}) {
      this.gdict = gdict;
  }

  addEdge(vertex, edge) {
    if (!this.gdict[vertex]) {
        this.gdict[vertex] = [];
    }
    this.gdict[vertex].push(edge);
  }

  bfs(vertex) {
      const visited = [vertex];
      const queue = [vertex];
      while (queue.length > 0) {
        const deVertex = queue.shift();
        console.log(deVertex);
        for (const adjacentVertex of this.gdict[deVertex]) {
            if (!visited.includes(adjacentVertex)) {
                visited.push(adjacentVertex);
                queue.push(adjacentVertex);
            }
        }
      }
  }

  dfs(vertex) {
      const visited = [vertex];
      const stack = [vertex];
      while (stack.length > 0) {
        const popVertex = stack.pop();
        console.log(popVertex);
        for (const adjacentVertex of this.gdict[popVertex]) {
            if (!visited.includes(adjacentVertex)) {
                visited.push(adjacentVertex);
                stack.push(adjacentVertex);
            }
        }
      }
  }
}

// Example graph
const customDict = {
  "a": ["b", "c"],
  "b": ["a", "d", "e"],
  "c": ["a", "e"],
  "d": ["b", "e", "f"],
  "e": ["d", "f", "c"],
  "f": ["d", "e"]
};

// Create a new Graph instance and run DFS
const g = new Graph(customDict);
g.dfs("a");
