class ArrayBinaryTree {
  constructor() {
    this.tree = []; // Array to store the tree nodes
  }

  // Insert a value into the tree at the next available position
  insert(value) {
    this.tree.push(value);
  }

  // Get the value of the left child of a node at index
  getLeftChild(index) {
    const leftIndex = 2 * index + 1;
    return leftIndex < this.tree.length ? this.tree[leftIndex] : null;
  }

  // Get the value of the right child of a node at index
  getRightChild(index) {
    const rightIndex = 2 * index + 2;
    return rightIndex < this.tree.length ? this.tree[rightIndex] : null;
  }

  // Get the value of the parent of a node at index
  getParent(index) {
    if (index === 0) return null; // Root has no parent
    const parentIndex = Math.floor((index - 1) / 2);
    return this.tree[parentIndex];
  }

  // Traversal functions
  inOrder(index = 0) {
    if (index >= this.tree.length || this.tree[index] === null) return;
    this.inOrder(2 * index + 1); // Left child
    console.log(this.tree[index]); // Root
    this.inOrder(2 * index + 2); // Right child
  }

  preOrder(index = 0) {
    if (index >= this.tree.length || this.tree[index] === null) return;
    console.log(this.tree[index]); // Root
    this.preOrder(2 * index + 1); // Left child
    this.preOrder(2 * index + 2); // Right child
  }

  postOrder(index = 0) {
    if (index >= this.tree.length || this.tree[index] === null) return;
    this.postOrder(2 * index + 1); // Left child
    this.postOrder(2 * index + 2); // Right child
    console.log(this.tree[index]); // Root
  }

  levelOrder() {
    for (const value of this.tree) {
      if (value !== null) console.log(value);
    }
}
}