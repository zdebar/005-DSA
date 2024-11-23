class Node {
  constructor(value) {
      this.value = value;
      this.next = null;
  }
}

class Stack {
  constructor() {
      this.head = null;
      this.size = 0;
  }

  push(value) {
      const newNode = new Node(value);
      if (this.head) {
          newNode.next = this.head;
      }
      this.head = newNode;
      this.size++;
  }

  pop() {
      if (this.isEmpty()) {
          return "Stack is empty";
      }
      const poppedNode = this.head;
      this.head = this.head.next;
      this.size--;
      return poppedNode.value;
  }

  peek() {
      if (this.isEmpty()) {
          return "Stack is empty";
      }
      return this.head.value;
  }

  isEmpty() {
      return this.size === 0;
  }

  stackSize() {
      return this.size;
  }
}

// Usage
const myStack = new Stack();
myStack.push('A');
myStack.push('B');
myStack.push('C');

console.log("Pop: ", myStack.pop()); // Output: Pop: C
console.log("Peek: ", myStack.peek()); // Output: Peek: B
console.log("isEmpty: ", myStack.isEmpty()); // Output: isEmpty: false
console.log("Size: ", myStack.stackSize()); // Output: Size: 2

