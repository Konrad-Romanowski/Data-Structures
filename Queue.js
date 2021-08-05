class Item {
    constructor(_data,) {
        this.data = _data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    enqueue(_data) {
        const newItem = new Item(_data);
        if(!this.first) {
            this.first = newItem;
        } else {
            this.last.next = newItem;
        }
        this.last = newItem;
        this.length++;
        return this.length;
    }

    dequeue() {
        if(!this.first) return undefined;
        const previousFirst = this.first;
        if(this.first === this.last) {
            this.last = null;
        }
        this.first = previousFirst.next;
        this.length--;
        return previousFirst.data;
    }

    //HELPER METHOD

    print() {
        const queue = [];
        let currentItem = this.first;

        while(currentItem) {
            queue.push(currentItem.data);
            currentItem = currentItem.next;
        }

        console.log("Queue order: ", queue);
        console.log(`Queue length: ${this.length}`);
        console.log(`First item: ${this.first ? this.first.data : null}, Last item: ${this.last ? this.last.data : null}`);
    }
}