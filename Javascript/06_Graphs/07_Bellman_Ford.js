class Graph {
  constructor(vertices) {
    this.V = vertices; // number of vertices
    this.graph = []; // edges
    this.nodes = []; // nodes
  }

  addEdge(s, d, w) {
    this.graph.push([s, d, w]);
  }

  addNode(value) {
    this.nodes.push(value);
  }

  printSolution(dist) {
    console.log("Vertex Distance from Source");
    for (let key in dist) {
      console.log(`  ${key} :    ${dist[key]}`);
    }
  }

  bellmanFord(src) {
    let dist = {};
    // Initialize distances
    for (let node of this.nodes) {
      dist[node] = Infinity;
    }
    dist[src] = 0;

    // Relax all edges V-1 times
    for (let i = 0; i < this.V - 1; i++) {
      for (let [s, d, w] of this.graph) {
        if (dist[s] !== Infinity && dist[s] + w < dist[d]) {
          dist[d] = dist[s] + w;
        }
      }
    }

    // Check for negative-weight cycles
    for (let [s, d, w] of this.graph) {
      if (dist[s] !== Infinity && dist[s] + w < dist[d]) {
        console.log("Graph contains negative cycle");
        return;
      }
    }

    this.printSolution(dist);
  }
}