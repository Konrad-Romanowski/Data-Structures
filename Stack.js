class Node {
    constructor(_data,_next = null) {
        this.data = _data;
        this.next = _next;
    }
}

class Stack {
    constructor() {
        this.size = 0;
        this.top = null;
        this.bottom = null;
    }

    push(_data) {
        let newNode = new Node(_data,this.top);
        if(!this.top) {
            this.bottom = newNode;
        }
        this.top = newNode;
        this.size++;
        return this.size;
    }

    pop() {
        if(!this.top) return undefined;
        const previousTop = this.top;
        if(this.top === this.bottom) {
            this.top = null;
            this.bottom = null;
        } else {
            this.top = previousTop.next;
        }
        this.size--;
        return previousTop.data;

    }

    //HELPER METHOD

    print() {
        const stack = [];
        let currentNode = this.top;
        while(currentNode) {
            stack.push(currentNode.data);
            currentNode = currentNode.next;
        }
        console.log("Stack list: ", stack);
        console.log(`Stack size: ${this.size}`);
        console.log(`Top: ${this.top ? this.top.data : null}, Bottom: ${this.bottom ? this.bottom.data : null}`);
    }
}