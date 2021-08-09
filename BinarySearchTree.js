class Node {
    constructor(_data) {
        this.data = _data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(_data) {
        const newNode = new Node(_data);
        
        if(!this.root) {
            this.root = newNode;
            return this;
        }

        let currentNode = this.root;

        while(currentNode) {
            if(newNode.data === currentNode.data) return undefined;
            if(newNode.data > currentNode.data) {
                if(!currentNode.right) {
                    currentNode.right = newNode;
                    return this;
                }
                currentNode = currentNode.right
            } else {
                if(!currentNode.left) {
                    currentNode.left = newNode;
                    return this;
                }
                currentNode = currentNode.left
            }
        }
    }

    find(_item) {
        if (!this.root) return false;

        let currentNode = this.root

        while(currentNode) {
            if(currentNode.data === _item) return currentNode;
            if(currentNode.data < _item) {
                currentNode = currentNode.right
            } else {
                currentNode = currentNode.left
            }
        }
        return false;
    }
}