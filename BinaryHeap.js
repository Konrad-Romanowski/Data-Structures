class MaxBinaryHeap {
    constructor() {
        this.data = [];
    }

    swapNodes(_index1,_index2) {
        [this.data[_index1], this.data[_index2]] = [this.data[_index2],this.data[_index1]];
    }

    bubbleUp(_childIndex,_parentIndex) {
        while(this.data[_childIndex] > this.data[_parentIndex]) {
            this.swapNodes(_childIndex,_parentIndex);
            _childIndex = _parentIndex;
            _parentIndex = Math.floor((_childIndex - 1)/2);
        }
    }

    insert(_data) {
        this.data.push(_data);
        let childIndex = this.data.length - 1;
        let parentIndex = Math.floor((childIndex - 1)/2);

        this.bubbleUp(childIndex,parentIndex);

        return this.data;
    }
}