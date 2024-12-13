class Graph {
  constructor(gdict = {}) {
    this.gdict = gdict;
  }

  bfs(start, end) {
    let queue = [[start]];
    
    while (queue.length > 0) {
      let path = queue.shift();
      let node = path[path.length - 1];

      if (node === end) {
        return path;
      }

      const neighbors = this.gdict[node] || [];
      for (let adjacent of neighbors) {
        let newPath = [...path];
        newPath.push(adjacent);
        queue.push(newPath);
      }
    }
    return null;  // If no path is found, return null
  }
}

const customDict = {
  "a": ["b", "c"],
  "b": ["d", "g"],
  "c": ["d", "e"],
  "d": ["f"],
  "e": ["f"],
  "g": ["f"]
};

const g = new Graph(customDict);
console.log(g.bfs("a", "z"));  // Should return null, as there is no path to "z"
