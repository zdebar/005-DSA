class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.height = 1; // Height of the node, initialized to 1
  }
}

class AVLTree {
  constructor() {
    this.root = null;
  }

  // Function to get the height of a node
  getHeight(node) {
    if (!node) return 0;
    return node.height;
  }

  // Function to update the height of a node
  updateHeight(node) {
    node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
  }

  // Function to get the balance factor of a node
  getBalanceFactor(node) {
    if (!node) return 0;
    return this.getHeight(node.left) - this.getHeight(node.right);
  }

  // Right Rotation (Single Rotation)
  rightRotate(y) {
    const x = y.left;
    const T2 = x.right;

    // Perform rotation
    x.right = y;
    y.left = T2;

    // Update heights
    this.updateHeight(y);
    this.updateHeight(x);

    // Return the new root
    return x;
  }

  // Left Rotation (Single Rotation)
  leftRotate(x) {
    const y = x.right;
    const T2 = y.left;

    // Perform rotation
    y.left = x;
    x.right = T2;

    // Update heights
    this.updateHeight(x);
    this.updateHeight(y);

    // Return the new root
    return y;
  }

  // Insertion in AVL Tree
  insert(root, value) {
    // Step 1: Perform normal BST insertion
    if (!root) return new Node(value);

    if (value < root.value) {
      root.left = this.insert(root.left, value);
    } else if (value > root.value) {
      root.right = this.insert(root.right, value);
    } else {
      // Duplicate values are not allowed in AVL Tree
      return root;
    }

    // Step 2: Update height of this ancestor node
    this.updateHeight(root);

    // Step 3: Get the balance factor and balance the tree
    const balance = this.getBalanceFactor(root);

    // Left Left (LL) case
    if (balance > 1 && value < root.left.value) {
      return this.rightRotate(root);
    }

    // Right Right (RR) case
    if (balance < -1 && value > root.right.value) {
      return this.leftRotate(root);
    }

    // Left Right (LR) case
    if (balance > 1 && value > root.left.value) {
      root.left = this.leftRotate(root.left);
      return this.rightRotate(root);
    }

    // Right Left (RL) case
    if (balance < -1 && value < root.right.value) {
      root.right = this.rightRotate(root.right);
      return this.leftRotate(root);
    }

    return root;
  }

  // Public method to insert a value into the AVL Tree
  insertValue(value) {
    this.root = this.insert(this.root, value);
  }

  // In-Order Traversal (Left, Root, Right)
  inOrder(root) {
    if (root !== null) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }

  // Pre-Order Traversal (Root, Left, Right)
  preOrder(root) {
    if (root !== null) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  // Post-Order Traversal (Left, Right, Root)
  postOrder(root) {
    if (root !== null) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }

  // Level-Order Traversal (Breadth-First Search)
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

  // Search for a value in the AVL Tree
  search(root, value) {
    if (!root) return null;
    if (root.value === value) return root;

    if (value < root.value) {
      return this.search(root.left, value);
    } else {
      return this.search(root.right, value);
    }
  }

  // Public method to search for a value
  searchValue(value) {
    return this.search(this.root, value);
  }
}
