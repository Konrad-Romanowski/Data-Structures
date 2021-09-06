// Simple implementation of an indirected graph using Adjacency List
class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(_vertex) {
        if(!this.adjacencyList[_vertex]) this.adjacencyList[_vertex] = [];
    }

    addEdge(_vertex1,_vertex2) {
        if(_vertex1 === _vertex2) return;
        if(!this.adjacencyList.hasOwnProperty(_vertex1) || !this.adjacencyList.hasOwnProperty(_vertex2)) return;

        // Check if there is already an edge between vertex1 and vertex2
        // Because this is an inderected graph and below we are adding both connections simultaneously we can only check "one way"
        if(this.adjacencyList[_vertex1].includes(_vertex2) && this.adjacencyList[_vertex2].includes(_vertex1)) {
            for(let i = 0; i < this.adjacencyList[_vertex1].length; i++) {
                if(this.adjacencyList[_vertex1][i] === _vertex2) {
                    return;
                }
            }
        }
        
        this.adjacencyList[_vertex1].push(_vertex2);
        this.adjacencyList[_vertex2].push(_vertex1);
    }

    removeEdge(_vertex1,_vertex2) {
        if(_vertex1 === _vertex2) return;
        if(!this.adjacencyList.hasOwnProperty(_vertex1) || !this.adjacencyList.hasOwnProperty(_vertex2)) return;

        for(let i = 0; i < this.adjacencyList[_vertex1].length; i++) {
            if(this.adjacencyList[_vertex1][i] === _vertex2) {
                this.adjacencyList[_vertex1].splice(i,1);
                break;
            }
        }
        for(let i = 0; i < this.adjacencyList[_vertex2].length; i++) {
            if(this.adjacencyList[_vertex2][i] === _vertex1) {
                this.adjacencyList[_vertex2].splice(i,1);
                break;
            }
        }
    }

    removeVertex(_vertexToRemove) {
        if(!this.adjacencyList.hasOwnProperty(_vertexToRemove)) return;

        for(let i = this.adjacencyList[_vertexToRemove].length - 1; i >= 0; i--) {
            this.removeEdge(this.adjacencyList[_vertexToRemove][i],_vertexToRemove);
        }

        delete this.adjacencyList[_vertexToRemove];
    }
}