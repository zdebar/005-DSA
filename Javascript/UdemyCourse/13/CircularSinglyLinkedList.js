class Node {
  constructor(value = null) {
      this.value = value;
      this.next = null;
  }
}

class CircularSinglyLinkedList {
  constructor() {
      this.head = null;
      this.tail = null;
  }

  // Iterating over the nodes in the circular singly linked list
  *[Symbol.iterator]() {
      let node = this.head;
      while (node) {
          yield node;
          node = node.next;
          if (node === this.tail.next) {
              break;
          }
      }
  }

  // Creation of circular singly linked list
  createCSLL(nodeValue) {
      const node = new Node(nodeValue);
      node.next = node;
      this.head = node;
      this.tail = node;
      return "The CSLL has been created";
  }

  // Insertion of a node in circular singly linked list
  insertCSLL(value, location) {
      if (this.head === null) {
          return "The head reference is None";
      } else {
          const newNode = new Node(value);
          if (location === 0) {
              newNode.next = this.head;
              this.head = newNode;
              this.tail.next = newNode;
          } else if (location === 1) {
              newNode.next = this.tail.next;
              this.tail.next = newNode;
              this.tail = newNode;
          } else {
              let tempNode = this.head;
              let index = 0;
              while (index < location - 1) {
                  tempNode = tempNode.next;
                  index += 1;
              }
              const nextNode = tempNode.next;
              tempNode.next = newNode;
              newNode.next = nextNode;
          }
          return "The node has been successfully inserted";
      }
  }

  // Traversal of a node in circular singly linked list
  traversalCSLL() {
      if (this.head === null) {
          console.log("There is not any element for traversal");
      } else {
          let tempNode = this.head;
          while (tempNode) {
              console.log(tempNode.value);
              tempNode = tempNode.next;
              if (tempNode === this.tail.next) {
                  break;
              }
          }
      }
  }

  // Searching for a node in circular singly linked list
  searchCSLL(nodeValue) {
      if (this.head === null) {
          return "There is not any node in this CSLL";
      } else {
          let tempNode = this.head;
          while (tempNode) {
              if (tempNode.value === nodeValue) {
                  return tempNode.value;
              }
              tempNode = tempNode.next;
              if (tempNode === this.tail.next) {
                  return "The node does not exist in this CSLL";
              }
          }
      }
  }

  // Delete a node from circular singly linked list
  deleteNode(location) {
      if (this.head === null) {
          console.log("There is not any node in CSLL");
      } else {
          if (location === 0) {
              if (this.head === this.tail) {
                  this.head.next = null;
                  this.head = null;
                  this.tail = null;
              } else {
                  this.head = this.head.next;
                  this.tail.next = this.head;
              }
          } else if (location === 1) {
              if (this.head === this.tail) {
                  this.head.next = null;
                  this.head = null;
                  this.tail = null;
              } else {
                  let node = this.head;
                  while (node !== null) {
                      if (node.next === this.tail) {
                          break;
                      }
                      node = node.next;
                  }
                  node.next = this.head;
                  this.tail = node;
              }
          } else {
              let tempNode = this.head;
              let index = 0;
              while (index < location - 1) {
                  tempNode = tempNode.next;
                  index += 1;
              }
              const nextNode = tempNode.next;
              tempNode.next = nextNode.next;
          }
      }
  }

  // Delete entire circular singly linked list
  deleteEntireCSLL() {
      this.head = null;
      if (this.tail) {
          this.tail.next = null;
      }
      this.tail = null;
  }
}

// Example usage:
const circularSLL = new CircularSinglyLinkedList();
circularSLL.createCSLL(0);
circularSLL.insertCSLL(1, 1);
circularSLL.insertCSLL(2, 1);
circularSLL.insertCSLL(3, 1);

// Traversing the list and printing values
console.log([...circularSLL].map(node => node.value));

// Deleting entire list and checking result
circularSLL.deleteEntireCSLL();
console.log([...circularSLL].map(node => node.value));  // Should print an empty array
