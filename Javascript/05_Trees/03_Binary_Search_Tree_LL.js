// Node class representing a single node in the tree
class Node {
    constructor(value) {
        this.value = value;
        this.left = null; // Left child
        this.right = null; // Right child
    }
}

// BinarySearchTree class for managing the tree
class BinarySearchTree {
    constructor() {
        this.root = null; // Root of the tree
    }

    insert(value, node = this.root) {
        if (this.root === null) {
            this.root = new Node(value);
            return;
        } else if (value < node.value) {
            if (node.left === null) {
                node.left = new Node(value);
            } else {
                this.insert(value, node.left);
            }
        } else if (value > node.value) {
            if (node.right === null) {
                node.right = new Node(value);
            } else {
                this.insert(value, node.right);
            }
        }
    }

    // Helper method to search nodes recursively
    search(value, node = this.root) {
        if (node === null) {
            return false;
        }

        if (value === node.value) {
            return true; // Value found
        } else if (value < node.value) {
            return this.search(value, node.left); // Search in left subtree
        } else {
            return this.searchNode(value, node.right); // Search in right subtree
        }
    }

    // In-Order Traversal (Left, Root, Right)
    inOrder(node = this.root) {
        if (node !== null) {
            this.inOrder(node.left);
            console.log(node.value);
            this.inOrder(node.right);
        }
    }

    // Pre-Order Traversal (Root, Left, Right)
    preOrder(node = this.root) {
        if (node !== null) {
            console.log(node.value);
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    }

    // Post-Order Traversal (Left, Right, Root)
    postOrder(node = this.root) {
        if (node !== null) {
            this.postOrder(node.left);
            this.postOrder(node.right);
            console.log(node.value);
        }
    }

    // Level-Order Traversal (Breadth-First)
    levelOrder() {
        if (this.root === null) return;

        const queue = [this.root];
        while (queue.length > 0) {
            const currentNode = queue.shift();
            console.log(currentNode.value);

            if (currentNode.left !== null) queue.push(currentNode.left);
            if (currentNode.right !== null) queue.push(currentNode.right);
        }
    }
}