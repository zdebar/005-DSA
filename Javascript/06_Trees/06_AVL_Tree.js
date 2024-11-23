class AVLNode {
  constructor(data) {
      this.data = data;
      this.leftChild = null;
      this.rightChild = null;
      this.height = 1;
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

function getHeight(rootNode) {
  if (!rootNode) {
      return 0;
  }
  return rootNode.height;
}

function rightRotate(disbalanceNode) {
  const newRoot = disbalanceNode.leftChild;
  disbalanceNode.leftChild = disbalanceNode.leftChild.rightChild;
  newRoot.rightChild = disbalanceNode;
  disbalanceNode.height = 1 + Math.max(getHeight(disbalanceNode.leftChild), getHeight(disbalanceNode.rightChild));
  newRoot.height = 1 + Math.max(getHeight(newRoot.leftChild), getHeight(newRoot.rightChild));
  return newRoot;
}

function leftRotate(disbalanceNode) {
  const newRoot = disbalanceNode.rightChild;
  disbalanceNode.rightChild = disbalanceNode.rightChild.leftChild;
  newRoot.leftChild = disbalanceNode;
  disbalanceNode.height = 1 + Math.max(getHeight(disbalanceNode.leftChild), getHeight(disbalanceNode.rightChild));
  newRoot.height = 1 + Math.max(getHeight(newRoot.leftChild), getHeight(newRoot.rightChild));
  return newRoot;
}

function getBalance(rootNode) {
  if (!rootNode) {
      return 0;
  }
  return getHeight(rootNode.leftChild) - getHeight(rootNode.rightChild);
}

function insertNode(rootNode, nodeValue) {
  if (!rootNode) {
      return new AVLNode(nodeValue);
  } else if (nodeValue < rootNode.data) {
      rootNode.leftChild = insertNode(rootNode.leftChild, nodeValue);
  } else {
      rootNode.rightChild = insertNode(rootNode.rightChild, nodeValue);
  }

  rootNode.height = 1 + Math.max(getHeight(rootNode.leftChild), getHeight(rootNode.rightChild));
  const balance = getBalance(rootNode);

  if (balance > 1 && nodeValue < rootNode.leftChild.data) {
      return rightRotate(rootNode);
  }

  if (balance > 1 && nodeValue > rootNode.leftChild.data) {
      rootNode.leftChild = leftRotate(rootNode.leftChild);
      return rightRotate(rootNode);
  }

  if (balance < -1 && nodeValue > rootNode.rightChild.data) {
      return leftRotate(rootNode);
  }

  if (balance < -1 && nodeValue < rootNode.rightChild.data) {
      rootNode.rightChild = rightRotate(rootNode.rightChild);
      return leftRotate(rootNode);
  }

  return rootNode;
}

function getMinValueNode(rootNode) {
  if (!rootNode || rootNode.leftChild === null) {
      return rootNode;
  }
  return getMinValueNode(rootNode.leftChild);
}

function deleteNode(rootNode, nodeValue) {
  if (!rootNode) {
      return rootNode;
  } else if (nodeValue < rootNode.data) {
      rootNode.leftChild = deleteNode(rootNode.leftChild, nodeValue);
  } else if (nodeValue > rootNode.data) {
      rootNode.rightChild = deleteNode(rootNode.rightChild, nodeValue);
  } else {
      if (rootNode.leftChild === null) {
          const temp = rootNode.rightChild;
          rootNode = null;
          return temp;
      } else if (rootNode.rightChild === null) {
          const temp = rootNode.leftChild;
          rootNode = null;
          return temp;
      }

      const temp = getMinValueNode(rootNode.rightChild);
      rootNode.data = temp.data;
      rootNode.rightChild = deleteNode(rootNode.rightChild, temp.data);
  }

  const balance = getBalance(rootNode);

  if (balance > 1 && getBalance(rootNode.leftChild) >= 0) {
      return rightRotate(rootNode);
  }

  if (balance < -1 && getBalance(rootNode.rightChild) <= 0) {
      return leftRotate(rootNode);
  }

  if (balance > 1 && getBalance(rootNode.leftChild) < 0) {
      rootNode.leftChild = leftRotate(rootNode.leftChild);
      return rightRotate(rootNode);
  }

  if (balance < -1 && getBalance(rootNode.rightChild) > 0) {
      rootNode.rightChild = rightRotate(rootNode.rightChild);
      return leftRotate(rootNode);
  }

  return rootNode;
}

function deleteAVL(rootNode) {
  rootNode.data = null;
  rootNode.leftChild = null;
  rootNode.rightChild = null;
  return "The AVL has been successfully deleted";
}

// Create the AVL tree
let newAVL = new AVLNode(5);
newAVL = insertNode(newAVL, 10);
newAVL = insertNode(newAVL, 15);
newAVL = insertNode(newAVL, 20);
deleteAVL(newAVL);
levelOrderTraversal(newAVL);
