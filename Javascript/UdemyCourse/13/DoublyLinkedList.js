class Node {
  constructor(value = null) {
      this.value = value;
      this.next = null;
      this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
      this.head = null;
      this.tail = null;
  }

  // Iterating over the nodes in the doubly linked list
  *[Symbol.iterator]() {
      let node = this.head;
      while (node) {
          yield node;
          node = node.next;
      }
  }

  // Creation of Doubly Linked List
  createDLL(nodeValue) {
      const node = new Node(nodeValue);
      node.prev = null;
      node.next = null;
      this.head = node;
      this.tail = node;
      return "The DLL is created Successfully";
  }

  // Insertion Method in Doubly Linked List
  insertNode(nodeValue, location) {
      if (this.head === null) {
          console.log("The node cannot be inserted");
      } else {
          const newNode = new Node(nodeValue);
          if (location === 0) {
              newNode.prev = null;
              newNode.next = this.head;
              this.head.prev = newNode;
              this.head = newNode;
          } else if (location === 1) {
              newNode.next = null;
              newNode.prev = this.tail;
              this.tail.next = newNode;
              this.tail = newNode;
          } else {
              let tempNode = this.head;
              let index = 0;
              while (index < location - 1) {
                  tempNode = tempNode.next;
                  index += 1;
              }
              newNode.next = tempNode.next;
              newNode.prev = tempNode;
              if (tempNode.next) {
                  tempNode.next.prev = newNode;
              }
              tempNode.next = newNode;
          }
      }
  }

  // Traversal Method in Doubly Linked List
  traverseDLL() {
      if (this.head === null) {
          console.log("There is not any element to traverse");
      } else {
          let tempNode = this.head;
          while (tempNode) {
              console.log(tempNode.value);
              tempNode = tempNode.next;
          }
      }
  }

  // Reverse Traversal Method in Doubly Linked List
  reverseTraversalDLL() {
      if (this.head === null) {
          console.log("There is not any element to traverse");
      } else {
          let tempNode = this.tail;
          while (tempNode) {
              console.log(tempNode.value);
              tempNode = tempNode.prev;
          }
      }
  }

  // Search Method in Doubly Linked List
  searchDLL(nodeValue) {
      if (this.head === null) {
          return "There is not any element in the list";
      } else {
          let tempNode = this.head;
          while (tempNode) {
              if (tempNode.value === nodeValue) {
                  return tempNode.value;
              }
              tempNode = tempNode.next;
          }
          return "The node does not exist in this list";
      }
  }

  // Delete a node from Doubly Linked List
  deleteNode(location) {
      if (this.head === null) {
          console.log("There is not any element in DLL");
      } else {
          if (location === 0) {
              if (this.head === this.tail) {
                  this.head = null;
                  this.tail = null;
              } else {
                  this.head = this.head.next;
                  this.head.prev = null;
              }
          } else if (location === 1) {
              if (this.head === this.tail) {
                  this.head = null;
                  this.tail = null;
              } else {
                  this.tail = this.tail.prev;
                  this.tail.next = null;
              }
          } else {
              let curNode = this.head;
              let index = 0;
              while (index < location - 1) {
                  curNode = curNode.next;
                  index += 1;
              }
              curNode.next = curNode.next.next;
              if (curNode.next) {
                  curNode.next.prev = curNode;
              }
          }
          console.log("The node has been successfully deleted");
      }
  }

  // Delete entire Doubly Linked List
  deleteDLL() {
      if (this.head === null) {
          console.log("There is not any node in DLL");
      } else {
          let tempNode = this.head;
          while (tempNode) {
              tempNode.prev = null;
              tempNode = tempNode.next;
          }
          this.head = null;
          this.tail = null;
          console.log("The DLL has been successfully deleted");
      }
  }
}

// Example usage:
const doublyLL = new DoublyLinkedList();
doublyLL.createDLL(5);
doublyLL.insertNode(0, 0);
doublyLL.insertNode(2, 1);
doublyLL.insertNode(6, 2);

// Traversing the list and printing values
console.log([...doublyLL].map(node => node.value));

// Deleting entire list and checking result
doublyLL.deleteDLL();
console.log([...doublyLL].map(node => node.value));  // Should print an empty array
