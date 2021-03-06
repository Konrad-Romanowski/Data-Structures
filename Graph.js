// Simple implementation of an unweighted indirected graph using Adjacency List
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
        // Because this is an inderected graph and below we are adding both connections simultaneously we could check it only "one way"
        if(this.adjacencyList[_vertex1].includes(_vertex2) || this.adjacencyList[_vertex2].includes(_vertex1)) return;
        
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
    
    // Depth First Search traverse (recursive)
    DFS_recursive(_startingVertex){
        let verticesList = [];
        let visitedVertices = {};

        const traverse = _vertex => {
            verticesList.push(_vertex);
            visitedVertices[_vertex] = true;

            this.adjacencyList[_vertex].forEach(adjacentVertex => {
                if(!visitedVertices[adjacentVertex]) traverse(adjacentVertex);
            });
        }

        traverse(_startingVertex);

        return verticesList;
    }

    // Depth First Search traverse (iterative)
    DFS_iterative(_startingVertex) {
        let stack = [_startingVertex];
        let verticesList = [];
        let visitedVertices = {};
        let currentVertex;

        visitedVertices[_startingVertex] = true;

        while(stack.length > 0) {
            currentVertex = stack.pop();
            verticesList.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(adjacentVertex => {
                if(!visitedVertices[adjacentVertex]) {
                    stack.push(adjacentVertex);
                    visitedVertices[adjacentVertex] = true;
                }
            });
        }

        return verticesList;
    }

    // Breadth First Search traverse (recursive)
    BFS_recursive(_startingVertex) {
        let verticesList = [_startingVertex];
        let visitedVertices = {};
        let queue = [_startingVertex];

        visitedVertices[_startingVertex] = true;

        const traverse =  _queue => {
            if(_queue.length < 1) return;
            let currentVertex = _queue.shift();

            this.adjacencyList[currentVertex].forEach(adjacentVertex => {
                if(!visitedVertices[adjacentVertex]) {
                    verticesList.push(adjacentVertex);
                    visitedVertices[adjacentVertex] = true;
                    _queue.push(adjacentVertex);
                }
            });
            
            traverse(_queue);
        }
        
        traverse(queue);

        return verticesList;
    }

    // Breadth First Search traverse (iterative)
    BFS_iterative(_startingVertex) {
        let queue = [_startingVertex];
        let verticesList = [];
        let visitedVertices = {};
        let currentVertex;

        visitedVertices[_startingVertex] = true;

        while(queue.length > 0) {
            currentVertex = queue.shift();
            verticesList.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(adjacentVertex => {
                if(!visitedVertices[adjacentVertex]) {
                    queue.push(adjacentVertex);
                    visitedVertices[adjacentVertex] = true;
                }
            });
        }

        return verticesList;
    }

}