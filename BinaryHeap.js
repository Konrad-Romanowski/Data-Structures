class MaxBinaryHeap {
    constructor() {
        this.data = [];
    }

    swapNodes(_index1,_index2) {
        [this.data[_index1], this.data[_index2]] = [this.data[_index2],this.data[_index1]];
    }

    bubbleUp(_childIndex) {
        let parentIndex = Math.floor((_childIndex - 1)/2);;

        while(this.data[_childIndex] > this.data[parentIndex]) {
            this.swapNodes(_childIndex,parentIndex);
            _childIndex = parentIndex;
            parentIndex = Math.floor((_childIndex - 1)/2);
        }
    }

    insert(_data) {
        this.data.push(_data);
        let childIndex = this.data.length - 1;

        this.bubbleUp(childIndex);

        return this.data;
    }
}