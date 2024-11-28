class BinaryTree {
  constructor(size) {
      this.customList = new Array(size).fill(null);
      this.lastUsedIndex = 0;
      this.maxSize = size;
  }

  insertNode(value) {
      if (this.lastUsedIndex + 1 === this.maxSize) {
          return "The Binary Tree is full";
      }
      this.customList[this.lastUsedIndex + 1] = value;
      this.lastUsedIndex += 1;
      return "The value has been successfully inserted";
  }

  searchNode(nodeValue) {
      for (let i = 0; i < this.customList.length; i++) {
          if (this.customList[i] === nodeValue) {
              return "Success";
          }
      }
      return "Not found";
  }

  preOrderTraversal(index) {
      if (index > this.lastUsedIndex) {
          return;
      }
      console.log(this.customList[index]);
      this.preOrderTraversal(index * 2);
      this.preOrderTraversal(index * 2 + 1);
  }

  inOrderTraversal(index) {
      if (index > this.lastUsedIndex) {
          return;
      }
      this.inOrderTraversal(index * 2);
      console.log(this.customList[index]);
      this.inOrderTraversal(index * 2 + 1);
  }

  postOrderTraversal(index) {
      if (index > this.lastUsedIndex) {
          return;
      }
      this.postOrderTraversal(index * 2);
      this.postOrderTraversal(index * 2 + 1);
      console.log(this.customList[index]);
  }

  levelOrderTraversal(index) {
      for (let i = index; i <= this.lastUsedIndex; i++) {
          console.log(this.customList[i]);
      }
  }

  deleteNode(value) {
      if (this.lastUsedIndex === 0) {
          return "There is not any node to delete";
      }
      for (let i = 1; i <= this.lastUsedIndex; i++) {
          if (this.customList[i] === value) {
              this.customList[i] = this.customList[this.lastUsedIndex];
              this.customList[this.lastUsedIndex] = null;
              this.lastUsedIndex -= 1;
              return "The node has been successfully deleted";
          }
      }
  }

  deleteBT() {
      this.customList = null;
      return "The BT has been successfully deleted";
  }
}