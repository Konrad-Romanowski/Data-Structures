// Simple implementation of an indirected graph using adjacencyList
class Graph {
    constructor() {
        this.adjacencyList = {A:["Hello"]};
    }

    addVertex(_vertex) {
        if(!this.adjacencyList[_vertex]) this.adjacencyList[_vertex] = [];
    }
}