class ArrayBinaryTree {
  constructor() {
    this.tree = [];
  }

  insert(value) {
    this.tree.push(value);
  }

  getLeftChild(index) {
    const leftIndex = 2 * index + 1;
    return leftIndex < this.tree.length ? this.tree[leftIndex] : null;
  }

  getRightChild(index) {
    const rightIndex = 2 * index + 2;
    return rightIndex < this.tree.length ? this.tree[rightIndex] : null;
  }

  getParent(index) {
    if (index === 0) return null;
    const parentIndex = Math.floor((index - 1) / 2);
    return this.tree[parentIndex];
  }

  inOrder(index = 0) {
    if (index >= this.tree.length || this.tree[index] === null) return;
    this.inOrder(2 * index + 1); 
    console.log(this.tree[index]);
    this.inOrder(2 * index + 2);
  }

  preOrder(index = 0) {
    if (index >= this.tree.length || this.tree[index] === null) return;
    console.log(this.tree[index]); 
    this.preOrder(2 * index + 1); 
    this.preOrder(2 * index + 2); 
  }

  postOrder(index = 0) {
    if (index >= this.tree.length || this.tree[index] === null) return;
    this.postOrder(2 * index + 1); 
    this.postOrder(2 * index + 2); 
    console.log(this.tree[index]);
  }

  levelOrder() {
    for (const value of this.tree) {
      if (value !== null) console.log(value);
    }
}
}