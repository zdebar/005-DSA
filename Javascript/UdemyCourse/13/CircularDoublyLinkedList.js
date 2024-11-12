class Node {
  constructor(value = null) {
      this.value = value;
      this.next = null;
      this.prev = null;
  }
}

class CircularDoublyLinkedList {
  constructor() {
      this.head = null;
      this.tail = null;
  }

  // Create Circular Doubly Linked List
  createCDLL(nodeValue) {
      const newNode = new Node(nodeValue);
      this.head = newNode;
      this.tail = newNode;
      newNode.prev = newNode;
      newNode.next = newNode;
      return "The CDLL is created successfully";
  }

  // Insert node in Circular Doubly Linked List
  insertCDLL(value, location) {
      if (this.head === null) {
          return "The CDLL does not exist";
      } else {
          const newNode = new Node(value);
          if (location === 0) {
              newNode.next = this.head;
              newNode.prev = this.tail;
              this.head.prev = newNode;
              this.head = newNode;
              this.tail.next = newNode;
          } else if (location === 1) {
              newNode.next = this.head;
              newNode.prev = this.tail;
              this.head.prev = newNode;
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
              tempNode.next.prev = newNode;
              tempNode.next = newNode;
          }
          return "The node has been successfully inserted";
      }
  }

  // Traverse Circular Doubly Linked List
  traversalCDLL() {
      if (this.head === null) {
          console.log("There is not any node for traversal");
      } else {
          let tempNode = this.head;
          do {
              console.log(tempNode.value);
              tempNode = tempNode.next;
          } while (tempNode !== this.head);
      }
  }

  // Reverse traverse Circular Doubly Linked List
  reverseTraversalCDLL() {
      if (this.head === null) {
          console.log("There is not any node for reverse traversal");
      } else {
          let tempNode = this.tail;
          do {
              console.log(tempNode.value);
              tempNode = tempNode.prev;
          } while (tempNode !== this.tail);
      }
  }

  // Search in Circular Doubly Linked List
  searchCDLL(nodeValue) {
      if (this.head === null) {
          return "There is not any node in CDLL";
      } else {
          let tempNode = this.head;
          do {
              if (tempNode.value === nodeValue) {
                  return tempNode.value;
              }
              tempNode = tempNode.next;
          } while (tempNode !== this.head);
          return "The value does not exist in CDLL";
      }
  }

  // Delete a node from Circular Doubly Linked List
  deleteNode(location) {
      if (this.head === null) {
          console.log("There is not any node to delete");
      } else {
          if (location === 0) {
              if (this.head === this.tail) {
                  this.head.prev = null;
                  this.head.next = null;
                  this.head = null;
                  this.tail = null;
              } else {
                  this.head = this.head.next;
                  this.head.prev = this.tail;
                  this.tail.next = this.head;
              }
          } else if (location === 1) {
              if (this.head === this.tail) {
                  this.head.prev = null;
                  this.head.next = null;
                  this.head = null;
                  this.tail = null;
              } else {
                  this.tail = this.tail.prev;
                  this.tail.next = this.head;
                  this.head.prev = this.tail;
              }
          } else {
              let curNode = this.head;
              let index = 0;
              while (index < location - 1) {
                  curNode = curNode.next;
                  index += 1;
              }
              curNode.next = curNode.next.next;
              curNode.next.prev = curNode;
          }
          console.log("The node has been successfully deleted");
      }
  }

  // Delete entire Circular Doubly Linked List
  deleteCDLL() {
      if (this.head === null) {
          console.log("There is not any element to delete");
      } else {
          this.tail.next = null;
          let tempNode = this.head;
          while (tempNode) {
              tempNode.prev = null;
              tempNode = tempNode.next;
          }
          this.head = null;
          this.tail = null;
          console.log("The CDLL has been successfully deleted");
      }
  }

  // Iterator to enable for...of iteration
  *[Symbol.iterator]() {
      let node = this.head;
      if (node !== null) {
          do {
              yield node;
              node = node.next;
          } while (node !== this.head);
      }
  }
}

// Usage
const circularDLL = new CircularDoublyLinkedList();
console.log(circularDLL.createCDLL(5));
circularDLL.insertCDLL(0, 0);
circularDLL.insertCDLL(1, 1);
circularDLL.insertCDLL(2, 2);
console.log([...circularDLL].map(node => node.value)); // [5, 0, 2, 1]
circularDLL.deleteCDLL();
console.log([...circularDLL].map(node => node.value)); // []
