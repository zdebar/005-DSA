class Graph {
  constructor() {
    this.nodes = new Set();
    this.edges = new Map();
    this.distances = new Map();
  }

  addNode(value) {
    this.nodes.add(value);
    this.edges.set(value, []);
  }

  addEdge(fromNode, toNode, distance) {
    this.edges.get(fromNode).push(toNode);
    this.distances.set(`${fromNode},${toNode}`, distance);
  }
}

function dijkstra(graph, initial) {
  let visited = new Map();
  visited.set(initial, 0); // Distance to the start node is 0
  let path = new Map();
  let nodes = new Set(graph.nodes);

  while (nodes.size > 0) {
    let minNode = null;
    for (let node of nodes) {
      if (visited.has(node)) {
        if (minNode === null || visited.get(node) < visited.get(minNode)) {
            minNode = node;
        }
      }
    }

    if (minNode === null) {
      break;
    }

    nodes.delete(minNode);
    let currentWeight = visited.get(minNode);

    for (let neighbor of graph.edges.get(minNode)) {
      let weight = currentWeight + graph.distances.get(`${minNode},${neighbor}`);
      if (!visited.has(neighbor) || weight < visited.get(neighbor)) {
        visited.set(neighbor, weight);
        let currentPath = path.get(neighbor) || [];
        currentPath.push(minNode);
        path.set(neighbor, currentPath);
      }
    }
  }

  return { visited, path };
}

const customGraph = new Graph();
customGraph.addNode("A");
customGraph.addNode("B");
customGraph.addNode("C");
customGraph.addNode("D");
customGraph.addNode("E");
customGraph.addNode("F");
customGraph.addNode("G");
customGraph.addEdge("A", "B", 2);
customGraph.addEdge("A", "C", 5);
customGraph.addEdge("B", "C", 6);
customGraph.addEdge("B", "D", 1);
customGraph.addEdge("B", "E", 3);
customGraph.addEdge("C", "F", 8);
customGraph.addEdge("D", "E", 4);
customGraph.addEdge("E", "G", 9);
customGraph.addEdge("F", "G", 7);

// Test with original data
console.log(dijkstra(customGraph, "A"));

// Now modify the graph with the new distances
customGraph.distances.set("D,E", 1);
customGraph.distances.set("B,E", 6);

// Test with the updated graph
console.log(dijkstra(customGraph, "A"));
