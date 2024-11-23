class DisjointSet {
  constructor(vertices) {
      this.vertices = vertices;
      this.parent = {};
      this.rank = {};
      
      // Initialize parent and rank for each vertex
      for (let v of vertices) {
          this.parent[v] = v;
          this.rank[v] = 0;
      }
  }

  // Find function with path compression
  find(item) {
      if (this.parent[item] === item) {
          return item;
      } else {
          this.parent[item] = this.find(this.parent[item]); // Path compression
          return this.parent[item];
      }
  }

  // Union function with union by rank
  union(x, y) {
      const xroot = this.find(x);
      const yroot = this.find(y);

      // Union by rank
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

// Example usage
let vertices = ["A", "B", "C", "D", "E"];
let ds = new DisjointSet(vertices);
ds.union("A", "B");
ds.union("A", "C");

console.log(ds.find("A"));  // Output should be "A" because "A", "B", and "C" are in the same set
