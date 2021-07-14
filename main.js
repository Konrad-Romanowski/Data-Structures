class Node {
    constructor(_data, _prev = null, _next = null) {
        this.data = _data;
        this.prev = _prev;
        this.next = _next;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    
    push(_data) {
        const newNode = new Node(_data,this.tail);

        if(!this.head) {
            this.head = newNode;
        } else {
            this.tail.next = newNode;
        }
        this.tail = newNode;
        this.length++;
        return this;
    }

    pop() {
        if(!this.head) return undefined;

        const previousTail = this.tail;
        if(this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = previousTail.prev;
            this.tail.next = null;
            previousTail.prev = null;
        }
        this.length--
        return previousTail;
    }

    unshift(_data) {
        const newNode = new Node(_data,null,this.head);

        if(!this.head) {
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
        }
        this.head = newNode;
        this.length++;
        return this;
    }

    shift() {
        if(!this.head) return undefined;

        const previousHead = this.head;
        if(this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = previousHead.next;
            this.head.prev = null;
            previousHead.next = null;
        }
        this.length--;
        return previousHead;
    }

    get(_index) {
        if(_index < 0 || _index >= this.length) return undefined;

        const middleIndex = Math.floor(this.length/2);
        
        if(_index < middleIndex) {
            let currentNode = this.head;
            for(let i = 0; i < _index; i++) {
                currentNode = currentNode.next;
            }
            return currentNode;
        } else {
            let currentNode = this.tail;
            for(let i = this.length-1; i > _index; i--) {
                currentNode = currentNode.prev;
            }
            return currentNode;
        }

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

    printPrevs() {
        let list = [];
        let currentNode = this.head;

        while(currentNode) {
            if(!currentNode.prev) {
                list.push(null);
            } else {
                list.push(currentNode.prev.data);
            }
            currentNode = currentNode.next;
        }
        console.log("Prevs list: ", list);
    }

    printDetails() {
        this.printNodes();
        // this.printNexts();
        // this.printPrevs();
        console.log(`Head: ${this.head ? this.head.data : null},`,
                    `Tail: ${this.tail ? this.tail.data : null},`,
                    `Length: ${this.length}`);
    }
}

const dll = new DoublyLinkedList();
dll.push("one");
//dll.push("two");
console.log(dll.get(0));