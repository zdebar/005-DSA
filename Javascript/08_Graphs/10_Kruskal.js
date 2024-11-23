class DisjointSet {
  constructor(vertices) {
      this.parent = {};
      this.rank = {};

      for (let v of vertices) {
          this.parent[v] = v;
          this.rank[v] = 0;
      }
  }

  find(item) {
      if (this.parent[item] === item) {
          return item;
      } else {
          this.parent[item] = this.find(this.parent[item]); // Path compression
          return this.parent[item];
      }
  }

  union(x, y) {
      const xroot = this.find(x);
      const yroot = this.find(y);

      if (this.rank[xroot] < this.rank[yroot]) {
          this.parent[xroot] = yroot;
      } else if (this.rank[xroot] > this.rank[yroot]) {
          this.parent[yroot] = xroot;
      } else {
          this.parent[yroot] = xroot;
          this.rank[xroot] += 1;
      }
  }
}

class Graph {
  constructor(vertices) {
      this.V = vertices;  // Number of vertices
      this.graph = [];     // List of edges
      this.nodes = [];     // List of node names
      this.MST = [];       // Minimum Spanning Tree (MST)
  }

  addEdge(s, d, w) {
      this.graph.push([s, d, w]);
  }

  addNode(value) {
      this.nodes.push(value);
  }

  printSolution() {
      for (let [s, d, w] of this.MST) {
          console.log(`${s} - ${d}: ${w}`);
      }
  }

  kruskalAlgo() {
      let i = 0, e = 0;
      let ds = new DisjointSet(this.nodes);
      // Sort edges by weight
      this.graph.sort((a, b) => a[2] - b[2]);

      // Process edges one by one
      while (e < this.V - 1) {
          const [s, d, w] = this.graph[i];
          i += 1;
          const x = ds.find(s);
          const y = ds.find(d);

          // If they are in different sets, add this edge to the MST
          if (x !== y) {
              e += 1;
              this.MST.push([s, d, w]);
              ds.union(x, y);
          }
      }

      // Print the result (Minimum Spanning Tree)
      this.printSolution();
  }
}

// Example usage
let g = new Graph(5);
g.addNode("A");
g.addNode("B");
g.addNode("C");
g.addNode("D");
g.addNode("E");
g.addEdge("A", "B", 5);
g.addEdge("A", "C", 13);
g.addEdge("A", "E", 15);
g.addEdge("B", "A", 5);
g.addEdge("B", "C", 10);
g.addEdge("B", "D", 8);
g.addEdge("C", "A", 13);
g.addEdge("C", "B", 10);
g.addEdge("C", "E", 20);
g.addEdge("C", "D", 6);
g.addEdge("D", "B", 8);
g.addEdge("D", "C", 6);
g.addEdge("E", "A", 15);
g.addEdge("E", "C", 20);

g.kruskalAlgo();
