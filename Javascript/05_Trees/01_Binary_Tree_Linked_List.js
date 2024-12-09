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

  inOrder(node) {
    if (node === null) return;
    inOrder(node.left); 
    console.log(node.value); 
    inOrder(node.right); 
  }

  preOrder(node) {
    if (node === null) return;
    console.log(node.value); 
    preOrder(node.left); 
    preOrder(node.right); 
  }

  postOrder(node) {
    if (node === null) return;
    postOrder(node.left); 
    postOrder(node.right); 
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