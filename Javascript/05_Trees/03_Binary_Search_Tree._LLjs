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

    // Insert a value into the BST
    insert(value) {
        const newNode = new Node(value);

        if (this.root === null) {
            this.root = newNode; // Set root if tree is empty
        } else {
            this._insertNode(this.root, newNode);
        }
    }

    // Helper method to insert nodes recursively
    _insertNode(node, newNode) {
        if (newNode.value < node.value) {
            // Insert in the left subtree
            if (node.left === null) {
                node.left = newNode;
            } else {
                this._insertNode(node.left, newNode);
            }
        } else {
            // Insert in the right subtree
            if (node.right === null) {
                node.right = newNode;
            } else {
                this._insertNode(node.right, newNode);
            }
        }
    }

    // Search for a value in the BST
    search(value) {
        return this._searchNode(this.root, value);
    }

    // Helper method to search nodes recursively
    _searchNode(node, value) {
        if (node === null) {
            return false; // Not found
        }

        if (value === node.value) {
            return true; // Value found
        } else if (value < node.value) {
            return this._searchNode(node.left, value); // Search in left subtree
        } else {
            return this._searchNode(node.right, value); // Search in right subtree
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