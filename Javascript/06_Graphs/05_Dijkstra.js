class Edge {
  constructor(weight, startVertex, targetVertex) {
    this.weight = weight;
    this.startVertex = startVertex;
    this.targetVertex = targetVertex;
  }
}

class Node {
  constructor(name) {
    this.name = name;
    this.visited = false;
    this.predecessor = null;
    this.neighbors = [];
    this.minDistance = Infinity;
}

  // Comparison method for the heap
  compareTo(otherNode) {
    return this.minDistance < otherNode.minDistance;
  }

  addEdge(weight, destinationVertex) {
    const edge = new Edge(weight, this, destinationVertex);
    this.neighbors.push(edge);
  }
}

class Dijkstra {
  constructor() {
    this.heap = [];
  }

  calculate(startVertex) {
    startVertex.minDistance = 0;
    this.heap.push(startVertex);

    while (this.heap.length > 0) {
      // pop element with the lowest distance
      this.heap.sort((a, b) => a.minDistance - b.minDistance); // Min heap sort
      const actualVertex = this.heap.shift();
      if (actualVertex.visited) {
        continue;
      }

      // Consider the neighbors
      actualVertex.neighbors.forEach((edge) => {
        const start = edge.startVertex;
        const target = edge.targetVertex;
        const newDistance = start.minDistance + edge.weight;

        if (newDistance < target.minDistance) {
          target.minDistance = newDistance;
          target.predecessor = start;
          // Update the heap
          this.heap.push(target);
      }
      });

      actualVertex.visited = true;
    }
  }

  getShortestPath(vertex) {
    console.log(`The shortest path to vertex ${vertex.name} is: ${vertex.minDistance}`);
    let actualVertex = vertex;
    let path = [];
    while (actualVertex !== null) {
      path.unshift(actualVertex.name);
      actualVertex = actualVertex.predecessor;
    }
    console.log(path.join(' -> '));
  }
}