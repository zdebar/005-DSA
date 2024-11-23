class Graph {
  constructor(vertexNum, edges, nodes) {
      this.edges = edges;
      this.nodes = nodes;
      this.vertexNum = vertexNum;
      this.MST = [];
  }

  printSolution() {
      console.log("Edge : Weight");
      for (let [s, d, w] of this.MST) {
          console.log(`${s} -> ${d}: ${w}`);
      }
  }

  primsAlgo() {
      let visited = new Array(this.vertexNum).fill(false);
      let edgeNum = 0;
      visited[0] = true; // Start from the first node

      while (edgeNum < this.vertexNum - 1) {
          let min = Infinity;
          let s = -1;
          let d = -1;

          // Look for the minimum edge that connects visited and unvisited nodes
          for (let i = 0; i < this.vertexNum; i++) {
              if (visited[i]) {
                  for (let j = 0; j < this.vertexNum; j++) {
                      if (!visited[j] && this.edges[i][j]) {
                          if (min > this.edges[i][j]) {
                              min = this.edges[i][j];
                              s = i;
                              d = j;
                          }
                      }
                  }
              }
          }

          // Add the found edge to the MST
          this.MST.push([this.nodes[s], this.nodes[d], this.edges[s][d]]);
          visited[d] = true; // Mark the destination node as visited
          edgeNum++;
      }

      // Print the MST (Minimum Spanning Tree)
      this.printSolution();
  }
}

// Example usage
const edges = [
  [0, 10, 20, 0, 0],
  [10, 0, 30, 5, 0],
  [20, 30, 0, 15, 6],
  [0, 5, 15, 0, 8],
  [0, 0, 6, 8, 0]
];

const nodes = ["A", "B", "C", "D", "E"];
const g = new Graph(5, edges, nodes);
g.primsAlgo();
