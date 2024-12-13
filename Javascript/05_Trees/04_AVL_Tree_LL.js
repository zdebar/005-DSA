class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.height = 0; 
  }
}

class AVLTree {
  constructor() {
    this.root = null;
  }

  getHeight(node) {
    if (!node) return -1;
    return node.height;
  }

  updateHeight(node) {
    node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
  }

  getBalanceFactor(node) {
    return this.getHeight(node.left) - this.getHeight(node.right);
  }

  rightRotate(y) {
    const x = y.left;
    const yRightChild = x.right;

    x.right = y;
    y.left = yRightChild;

    this.updateHeight(y);
    this.updateHeight(x);
    return x;
  }

  leftRotate(x) {
    const y = x.right;
    const yLeftChild = y.left;

    y.left = x;
    x.right = yLeftChild;

    this.updateHeight(x);
    this.updateHeight(y);
    return y;
  }

  insert(node, value) {
    if (!node) return new Node(value);

    if (value < node.value) {
      node.left = this.insert(node.left, value);
    } else if (value > node.value) {
      node.right = this.insert(node.right, value);
    } else {
      return node;
    }

    this.updateHeight(node);
    const balance = this.getBalanceFactor(node);

    // Left Left (LL) case
    if (balance > 1 && value < node.left.value) {
      return this.rightRotate(node);
    }

    // Right Right (RR) case
    if (balance < -1 && value > node.right.value) {
      return this.leftRotate(node);
    }

    // Left Right (LR) case
    if (balance > 1 && value > node.left.value) {
      node.left = this.leftRotate(node.left);
      return this.rightRotate(node);
    }

    // Right Left (RL) case
    if (balance < -1 && value < node.right.value) {
      node.right = this.rightRotate(node.right);
      return this.leftRotate(node);
    }

    return node;
  }

  insertValue(value) {
    this.root = this.insert(this.root, value);
  }

  inOrder(root) {
    if (root !== null) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }

  preOrder(root) {
    if (root !== null) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  postOrder(root) {
    if (root !== null) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }

  levelOrder() {
    if (!this.root) return;

    const queue = [this.root];
    while (queue.length > 0) {
      const currentNode = queue.shift();
      console.log(currentNode.value);

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
  }

  search(root, value) {
    if (!root) return null;
    if (root.value === value) return root;

    if (value < root.value) {
      return this.search(root.left, value);
    } else {
      return this.search(root.right, value);
    }
  }

  searchValue(value) {
    return this.search(this.root, value);
  }
}
