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

    findMin() {
        if (!this.root) return null;

        let currentNode = this.root;
        while(currentNode.left) {
            currentNode = currentNode.left;
        }

        return currentNode.data;
    }

    findMax() {
        if (!this.root) return null;

        let currentNode = this.root;
        while(currentNode.right) {
            currentNode = currentNode.right;
        }

        return currentNode.data;
    }

    //Breadth First Search
    BFS() {
        let treeItems = [];

        if (!this.root) return treeItems;
        let queue = [this.root];
        let currentNode = this.root;

        while(queue.length > 0) {
            currentNode = queue.shift();
            treeItems.push(currentNode.data);
            if(currentNode.left) queue.push(currentNode.left);
            if(currentNode.right) queue.push(currentNode.right);
        }
        return treeItems;
    }

    //Depth First Search - Pre Order
    DFSPreOrder() {
        let treeItems = [];
        if (!this.root) return treeItems;

        function traverse(_node) {
            treeItems.push(_node.data);
            if(_node.left) traverse(_node.left);
            if(_node.right) traverse(_node.right);
        }

        traverse(this.root);
        return treeItems;
    }

    //Depth First Search - Post Order
    DFSPostOrder() {
        let treeItems = [];
        if(!this.root) return treeItems;

        function traverse(_node) {
            if(_node.left) traverse(_node.left);
            if(_node.right) traverse(_node.right);
            treeItems.push(_node.data);
        }

        traverse(this.root);
        return treeItems;
    }

    //Depth First Search - In Order
    DFSInOrder() {
        let treeItems = [];
        if(!this.root) return treeItems;

        function traverse(_node) {
            if(_node.left) traverse(_node.left);
            treeItems.push(_node.data);
            if(_node.right) traverse(_node.right);
        }

        traverse(this.root);
        return treeItems;
    }
}