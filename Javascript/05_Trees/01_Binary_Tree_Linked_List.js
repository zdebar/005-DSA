class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  // Function to find the height of the tree
  height(node) {
    if (node === null) return 0;
    const leftHeight = this.height(node.left);
    const rightHeight = this.height(node.right);
    return Math.max(leftHeight, rightHeight) + 1;
  }

  preOrder(node = this.root) {
    if (node === null) return;
    console.log(node.value); 
    this.preOrder(node.left);
    this.preOrder(node.right);
  }

  inOrder(node) {
    if (node === null) return;
    this.inOrder(node.left);
    console.log(node.value); 
    this.inOrder(node.right);
  }

  postOrder(node) {
    if (node === null) return;
    this.postOrder(node.left);
    this.postOrder(node.right);
    console.log(node.value); 
  }

  levelOrder(root) {
    if (root === null) return;
    const queue = [root]; 
    while (queue.length > 0) {
      const current = queue.shift(); 
      console.log(current.value); 

      if (current.left !== null) queue.push(current.left); 
      if (current.right !== null) queue.push(current.right); 
    }
  }
}