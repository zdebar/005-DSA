class Stack {
  constructor() {
      this.list = [];
  }

  toString() {
      const values = [...this.list].reverse();
      return values.join('\n');
  }

  // isEmpty
  isEmpty() {
      return this.list.length === 0;
  }

  // push
  push(value) {
      this.list.push(value);
      return "The element has been successfully inserted";
  }

  // pop
  pop() {
      if (this.isEmpty()) {
          return "There is not any element in the stack";
      } else {
          return this.list.pop();
      }
  }

  // peek
  peek() {
      if (this.isEmpty()) {
          return "There is not any element in the stack";
      } else {
          return this.list[this.list.length - 1];
      }
  }

  // delete
  delete() {
      this.list = [];
  }
}

// Testing the Stack class
const customStack = new Stack();
customStack.push(1);
customStack.push(2);
customStack.push(3);

console.log(customStack.peek());  // Should print 3
console.log(customStack.toString());  // Should print stack in reverse order
