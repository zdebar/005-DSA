const INF = 9999;

// Function to print the solution
function printSolution(nV, distance) {
    for (let i = 0; i < nV; i++) {
        for (let j = 0; j < nV; j++) {
            if (distance[i][j] === INF) {
                process.stdout.write("INF ");
            } else {
                process.stdout.write(distance[i][j] + "  ");
            }
        }
        console.log();
    }
}

// Floyd-Warshall Algorithm
function floydWarshall(nV, G) {
    let distance = JSON.parse(JSON.stringify(G)); // Create a copy of the graph
    
    // Three nested loops for the algorithm
    for (let k = 0; k < nV; k++) {
        for (let i = 0; i < nV; i++) {
            for (let j = 0; j < nV; j++) {
                distance[i][j] = Math.min(distance[i][j], distance[i][k] + distance[k][j]);
            }
        }
    }
    
    printSolution(nV, distance);
}

// Example graph (Adjacency matrix)
let G = [
    [0, 8, INF, 1],
    [INF, 0, 1, INF],
    [4, INF, 0, INF],
    [INF, 2, 9, 1]
];

// Run the Floyd-Warshall algorithm
floydWarshall(4, G);
