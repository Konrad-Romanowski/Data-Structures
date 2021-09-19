// Simple implementation of a weighted indirected graph using Adjacency List
class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(_vertex) {
        if(!this.adjacencyList[_vertex]) this.adjacencyList[_vertex] = [];
    }

    isEdgeBetween(_vertex1,_vertex2) {
        let hasV1V2edge = false;
        let hasV2V1edge = false;

        for(let i = 0; i < this.adjacencyList[_vertex1].length; i++) {
            if(this.adjacencyList[_vertex1][i].node === _vertex2) {
                hasV1V2edge = true;
                break;
            }
        }
        for(let i = 0; i < this.adjacencyList[_vertex2].length; i++) {
            if(this.adjacencyList[_vertex2][i].node === _vertex1) {
                hasV2V1edge = true;
                break;
            }
        }
        return hasV1V2edge || hasV2V1edge;
    }

    addEdge(_vertex1,_vertex2,_weight) {
        if(_vertex1 === _vertex2) return;
        if(!this.adjacencyList.hasOwnProperty(_vertex1) || !this.adjacencyList.hasOwnProperty(_vertex2)) return;
        if(this.isEdgeBetween(_vertex1,_vertex2)) return;
        
        this.adjacencyList[_vertex1].push({node: _vertex2, weight: _weight});
        this.adjacencyList[_vertex2].push({node: _vertex1, weight: _weight});
    }

    removeEdge(_vertex1,_vertex2) {
        if(_vertex1 === _vertex2) return;
        if(!this.adjacencyList.hasOwnProperty(_vertex1) || !this.adjacencyList.hasOwnProperty(_vertex2)) return;
        if(!this.isEdgeBetween(_vertex1,_vertex2)) return;


        for(let i = this.adjacencyList[_vertex1].length - 1; i >= 0; i--) {
            if(this.adjacencyList[_vertex1][i].node === _vertex2) {
                this.adjacencyList[_vertex1].splice(i,1);
                break;
            }
        }

        for(let i = this.adjacencyList[_vertex2].length - 1; i >= 0; i--) {
            if(this.adjacencyList[_vertex2][i].node === _vertex1) {
                this.adjacencyList[_vertex2].splice(i,1);
                break;
            }
        }
    }

    removeVertex(_vertexToRemove) {
        if(!this.adjacencyList.hasOwnProperty(_vertexToRemove)) return;

        for(let i = this.adjacencyList[_vertexToRemove].length - 1; i >= 0; i--) {
            this.removeEdge(this.adjacencyList[_vertexToRemove][i].node,_vertexToRemove);
        }

        delete this.adjacencyList[_vertexToRemove];
    }
}