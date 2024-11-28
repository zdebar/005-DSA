class BSTNode {
  constructor(data) {
      this.data = data;
      this.leftChild = null;
      this.rightChild = null;
  }
}

class Queue {
  constructor() {
      this.queue = [];
  }

  enqueue(node) {
      this.queue.push(node);
  }

  dequeue() {
      if (this.isEmpty()) {
          return "Queue is empty";
      }
      return this.queue.shift();
  }

  isEmpty() {
      return this.queue.length === 0;
  }
}

function insertNode(rootNode, nodeValue) {
  if (rootNode.data === null) {
      rootNode.data = nodeValue;
  } else if (nodeValue <= rootNode.data) {
      if (rootNode.leftChild === null) {
          rootNode.leftChild = new BSTNode(nodeValue);
      } else {
          insertNode(rootNode.leftChild, nodeValue);
      }
  } else {
      if (rootNode.rightChild === null) {
          rootNode.rightChild = new BSTNode(nodeValue);
      } else {
          insertNode(rootNode.rightChild, nodeValue);
      }
  }
  return "The node has been successfully inserted";
}

function preOrderTraversal(rootNode) {
  if (!rootNode) {
      return;
  }
  console.log(rootNode.data);
  preOrderTraversal(rootNode.leftChild);
  preOrderTraversal(rootNode.rightChild);
}

function inOrderTraversal(rootNode) {
  if (!rootNode) {
      return;
  }
  inOrderTraversal(rootNode.leftChild);
  console.log(rootNode.data);
  inOrderTraversal(rootNode.rightChild);
}

function postOrderTraversal(rootNode) {
  if (!rootNode) {
      return;
  }
  postOrderTraversal(rootNode.leftChild);
  postOrderTraversal(rootNode.rightChild);
  console.log(rootNode.data);
}

function levelOrderTraversal(rootNode) {
  if (!rootNode) {
      return;
  } else {
      const customQueue = new Queue();
      customQueue.enqueue(rootNode);
      while (!customQueue.isEmpty()) {
          const root = customQueue.dequeue();
          console.log(root.data);
          if (root.leftChild !== null) {
              customQueue.enqueue(root.leftChild);
          }
          if (root.rightChild !== null) {
              customQueue.enqueue(root.rightChild);
          }
      }
  }
}

function searchNode(rootNode, nodeValue) {
  if (rootNode.data === nodeValue) {
      console.log("The value is found");
  } else if (nodeValue < rootNode.data) {
      if (rootNode.leftChild && rootNode.leftChild.data === nodeValue) {
          console.log("The value is found");
      } else {
          searchNode(rootNode.leftChild, nodeValue);
      }
  } else {
      if (rootNode.rightChild && rootNode.rightChild.data === nodeValue) {
          console.log("The value is found");
      } else {
          searchNode(rootNode.rightChild, nodeValue);
      }
  }
}

function minValueNode(bstNode) {
  let current = bstNode;
  while (current.leftChild !== null) {
      current = current.leftChild;
  }
  return current;
}

function deleteNode(rootNode, nodeValue) {
  if (rootNode === null) {
      return rootNode;
  }

  if (nodeValue < rootNode.data) {
      rootNode.leftChild = deleteNode(rootNode.leftChild, nodeValue);
  } else if (nodeValue > rootNode.data) {
      rootNode.rightChild = deleteNode(rootNode.rightChild, nodeValue);
  } else {
      if (rootNode.leftChild === null) {
          let temp = rootNode.rightChild;
          rootNode = null;
          return temp;
      } else if (rootNode.rightChild === null) {
          let temp = rootNode.leftChild;
          rootNode = null;
          return temp;
      }

      let temp = minValueNode(rootNode.rightChild);
      rootNode.data = temp.data;
      rootNode.rightChild = deleteNode(rootNode.rightChild, temp.data);
  }
  return rootNode;
}

function deleteBST(rootNode) {
  rootNode.data = null;
  rootNode.leftChild = null;
  rootNode.rightChild = null;
  return "The BST has been successfully deleted";
}