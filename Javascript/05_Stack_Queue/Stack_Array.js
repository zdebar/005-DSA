class Stack {
  constructor() {
      this.stack = [];
  }

  push(element) {
      this.stack.push(element);
  }

  pop() {
      if (this.isEmpty()) {
          return "Stack is empty";
      }
      return this.stack.pop();
  }

  peek() {
      if (this.isEmpty()) {
          return "Stack is empty";
      }
      return this.stack[this.stack.length - 1];
  }

  isEmpty() {
      return this.stack.length === 0;
  }

  size() {
      return this.stack.length;
  }
}

// Create a stack
const myStack = new Stack();

myStack.push('A');
myStack.push('B');
myStack.push('C');
console.log("Stack: ", myStack.stack); // Output: Stack: ['A', 'B', 'C']

console.log("Pop: ", myStack.pop()); // Output: Pop: C

console.log("Peek: ", myStack.peek()); // Output: Peek: B

console.log("isEmpty: ", myStack.isEmpty()); // Output: isEmpty: false

console.log("Size: ", myStack.size()); // Output: Size: 2
