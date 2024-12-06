class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList.hasOwnProperty(vertex)) {
            this.adjacencyList[vertex] = [];
            return true;
        }
        return false;
    }

    printGraph() {
        for (const vertex in this.adjacencyList) {
            console.log(vertex + ":", this.adjacencyList[vertex]);
        }
    }

    addEdge(vertex1, vertex2) {
        if (this.adjacencyList.hasOwnProperty(vertex1) && this.adjacencyList.hasOwnProperty(vertex2)) {
            this.adjacencyList[vertex1].push(vertex2);
            this.adjacencyList[vertex2].push(vertex1);
            return true;
        }
        return false;
    }

    removeEdge(vertex1, vertex2) {
        if (this.adjacencyList.hasOwnProperty(vertex1) && this.adjacencyList.hasOwnProperty(vertex2)) {
            const index1 = this.adjacencyList[vertex1].indexOf(vertex2);
            const index2 = this.adjacencyList[vertex2].indexOf(vertex1);

            if (index1 !== -1) {
                this.adjacencyList[vertex1].splice(index1, 1);
            }
            if (index2 !== -1) {
                this.adjacencyList[vertex2].splice(index2, 1);
            }
            return true;
        }
        return false;
    }

    removeVertex(vertex) {
        if (this.adjacencyList.hasOwnProperty(vertex)) {
            for (const otherVertex of this.adjacencyList[vertex]) {
                const index = this.adjacencyList[otherVertex].indexOf(vertex);
                if (index !== -1) {
                    this.adjacencyList[otherVertex].splice(index, 1);
                }
            }
            delete this.adjacencyList[vertex];
            return true;
        }
        return false;
    }
}

