class Node {
    constructor(_data,_next = null) {
        this.data = _data;
        this.next = _next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(_data) {
        const newNode = new Node(_data);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    
    pop() {
        if (!this.head) return undefined;
        
        let previousTail = this.tail;
    
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
            this.length--;
            return previousTail;
        }
        
        let currentNode = this.head;

        while (currentNode.next !== this.tail) {
            currentNode = currentNode.next;
        }
        this.tail = currentNode;
        currentNode.next = null;
        this.length--;
        return previousTail;
    }

    shift() {
        if (!this.head) return undefined;
        if (this.head) {
            let previousHead = this.head;
            this.head = this.head.next;
            this.length--;
            if (this.length === 0) {
                this.tail = null;
            }
            return previousHead;
        }
    }

    unshift(_data) {
        let newNode = new Node(_data,this.head);
        if(!this.head) {
            this.tail = newNode;
        }
        this.head = newNode;
        this.length++;
        return this;
    }

    get(_index) {
        if (_index < 0 || _index >= this.length) return undefined;
        let currentNode = this.head;
        for(let i=0; i < _index; i++) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    set(_index,_data) {
        const nodeAtIndex = this.get(_index);
        if (nodeAtIndex) {
            nodeAtIndex.data = _data;
            return nodeAtIndex;
        }
        return undefined;
    }

    insert(_index,_data) {
        if(_index < 0 || _index > this.length) return undefined;
        if(_index === 0) return this.unshift(_data);
        if(_index === this.length) return this.push(_data)
          
        const previousNode = this.get(_index-1);
        const nextNode = previousNode.next;
        const newNode = new Node(_data,nextNode);
        previousNode.next = newNode;
        this.length++;
        return newNode;
    }

    remove(_index) {
        if(_index < 0 || _index >= this.length) return undefined;
        if(_index === 0) return this.shift();
        if(_index === this.length - 1) return this.pop();

        const previousNode = this.get(_index-1);
        const nodeAtIndex = previousNode.next
        previousNode.next = nodeAtIndex.next;
        this.length--;

        nodeAtIndex.next = null;
        return nodeAtIndex;
    }

    reverse() {
        if(!this.head || this.length === 1) return undefined;
        
        let currentNode = this.head;
        let previousNode = null;
        let nextNode;

        while(currentNode) {
            nextNode = currentNode.next;
            currentNode.next = previousNode;
            previousNode = currentNode;
            currentNode = nextNode;
        }
        [this.head,this.tail] = [this.tail,this.head];
    }

    // HELPER METHODS

    printNodes() {
        let list = [];
        let currentNode = this.head;

        while(currentNode) {
            list.push(currentNode.data);
            currentNode = currentNode.next;
        }
        console.log("Nodes list: ", list);
    }

    printNexts() {
        let list = [];
        let currentNode = this.head;

        while(currentNode) {
            if(!currentNode.next) {
                list.push(null);
            } else {
                list.push(currentNode.next.data);
            }
            currentNode = currentNode.next;
        }
        console.log("Nexts list: ", list);
    }

    printDetails() {
        this.printNodes();
        this.printNexts();
        console.log(`Head: ${this.head ? this.head.data : null},`,
                    `Length: ${this.length}`);
    }
}