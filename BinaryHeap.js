class MaxBinaryHeap {
    constructor() {
        this.data = [];
    }

    swapNodes(_index1,_index2) {
        [this.data[_index1], this.data[_index2]] = [this.data[_index2],this.data[_index1]];
    }

    bubbleUp(_childIndex) {
        let parentIndex = Math.floor((_childIndex - 1)/2);

        if(this.data[_childIndex] > this.data[parentIndex]) {
            this.swapNodes(_childIndex,parentIndex);
            this.bubbleUp(parentIndex);
        }
    }

    //### iterative implementation  ###
    // bubbleUp(_childIndex) {
    //     let parentIndex = Math.floor((_childIndex - 1)/2);
    
    //     while(this.data[_childIndex] > this.data[parentIndex]) {
    //         this.swapNodes(_childIndex,parentIndex);
    //         _childIndex = parentIndex;
    //         parentIndex = Math.floor((_childIndex - 1)/2);
    //     }
    // }

    bubbleDown(_parentIndex) {
        let leftChildIndex = 2 * _parentIndex + 1;
        let rightChildIndex = 2 * _parentIndex + 2;
        let childToSwapIndex;

        if(leftChildIndex > this.data.length - 1) return;
        if(rightChildIndex <= this.data.length - 1) {
            childToSwapIndex = this.data[leftChildIndex] > this.data[rightChildIndex] ? leftChildIndex : rightChildIndex;
        } else {
            childToSwapIndex = leftChildIndex;
        }

        if(this.data[childToSwapIndex] > this.data[_parentIndex]) {
            this.swapNodes(_parentIndex,childToSwapIndex);
            this.bubbleDown(childToSwapIndex);
        }
    }

    // ### iterative implementation ###
    // bubbleDown(_parentIndex) {
    //     let leftChildIndex = 2 * _parentIndex + 1;
    //     let rightChildIndex = 2 * _parentIndex + 2;
    //     let childToSwapIndex;

    //     if(leftChildIndex > this.data.length - 1) return;
    //     if(rightChildIndex <= this.data.length - 1) {
    //         childToSwapIndex = this.data[leftChildIndex] > this.data[rightChildIndex] ? leftChildIndex : rightChildIndex;
    //     } else {
    //         childToSwapIndex = leftChildIndex;
    //     }

    //     while(this.data[childToSwapIndex] > this.data[_parentIndex]) {
    //         this.swapNodes(_parentIndex,childToSwapIndex);
    //         _parentIndex = childToSwapIndex 
    //         leftChildIndex = 2 * _parentIndex + 1;
    //         rightChildIndex = 2 * _parentIndex + 2;

    //         if(leftChildIndex > this.data.length - 1) return;
    //         if(rightChildIndex <= this.data.length - 1) {
    //             childToSwapIndex = this.data[leftChildIndex] > this.data[rightChildIndex] ? leftChildIndex : rightChildIndex;
    //         } else {
    //             childToSwapIndex = leftChildIndex;
    //         }
    //     }
    // }

    insert(_data) {
        this.data.push(_data);
        let childIndex = this.data.length - 1;

        this.bubbleUp(childIndex);

        return this.data;
    }

    extractMax() {
        if (this.data.length === 0) return undefined;

        const lastNode = this.data.length - 1;

        this.swapNodes(0,lastNode);
        const extractedRoot = this.data.pop();
        
        this.bubbleDown(0);

        return extractedRoot;
    }
}