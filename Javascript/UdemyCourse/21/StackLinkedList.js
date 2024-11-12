class Node {
  constructor(value = null) {
      this.value = value;
      this.next = null;
  }
}

class LinkedList {
  constructor() {
      this.head = null;
  }

  *[Symbol.iterator]() {
      let currentNode = this.head;
      while (currentNode) {
          yield currentNode;
          currentNode = currentNode.next;
      }
  }
}

class Stack {
  constructor() {
      this.LinkedList = new LinkedList();
  }

  toString() {
      const values = [...this.LinkedList].map(node => node.value);
      return values.join('\n');
  }

  isEmpty() {
      return this.LinkedList.head === null;
  }

  push(value) {
      const node = new Node(value);
      node.next = this.LinkedList.head;
      this.LinkedList.head = node;
  }

  pop() {
      if (this.isEmpty()) {
          return "There is not any element in the stack";
      } else {
          const nodeValue = this.LinkedList.head.value;
          this.LinkedList.head = this.LinkedList.head.next;
          return nodeValue;
      }
  }

  peek() {
      if (this.isEmpty()) {
          return "There is not any element in the stack";
      } else {
          return this.LinkedList.head.value;
      }
  }

  delete() {
      this.LinkedList.head = null;
  }
}

// Testing the Stack class
const customStack = new Stack();
customStack.push(1);
customStack.push(2);
customStack.push(3);

console.log(customStack.peek());  // Should print 3
