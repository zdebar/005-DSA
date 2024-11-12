class MultiStack {
  constructor(stackSize) {
      this.numStacks = 3;
      this.array = new Array(stackSize * this.numStacks).fill(0);
      this.sizes = new Array(this.numStacks).fill(0);
      this.stackSize = stackSize;
  }

  push(item, stackNum) {
      if (this.isFull(stackNum)) {
          throw new Error('Stack is full');
      }
      this.sizes[stackNum] += 1;
      this.array[this.indexOfTop(stackNum)] = item;
  }

  pop(stackNum) {
      if (this.isEmpty(stackNum)) {
          throw new Error('Stack is empty');
      }
      const value = this.array[this.indexOfTop(stackNum)];
      this.array[this.indexOfTop(stackNum)] = 0;
      this.sizes[stackNum] -= 1;
      return value;
  }

  peek(stackNum) {
      if (this.isEmpty(stackNum)) {
          throw new Error('Stack is empty');
      }
      return this.array[this.indexOfTop(stackNum)];
  }

  isEmpty(stackNum) {
      return this.sizes[stackNum] === 0;
  }

  isFull(stackNum) {
      return this.sizes[stackNum] === this.stackSize;
  }

  indexOfTop(stackNum) {
      const offset = stackNum * this.stackSize;
      return offset + this.sizes[stackNum] - 1;
  }
}

// Testing the MultiStack class
const stack = new MultiStack(1);
stack.push(10, 0);
console.log(stack.peek(0));  // Should print 10
stack.push(20, 1);          // Push to second stack
console.log(stack.peek(1));  // Should print 20
stack.pop(0);
console.log(stack.peek(0));  // Should throw error since stack 0 is empty
