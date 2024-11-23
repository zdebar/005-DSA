class Queue {
  constructor() {
      this.queue = [];
  }

  enqueue(element) {
      this.queue.push(element);
  }

  dequeue() {
      if (this.isEmpty()) {
          return "Queue is empty";
      }
      return this.queue.shift();
  }

  peek() {
      if (this.isEmpty()) {
          return "Queue is empty";
      }
      return this.queue[0];
  }

  isEmpty() {
      return this.queue.length === 0;
  }

  size() {
      return this.queue.length;
  }
}

// Create a queue
const myQueue = new Queue();

myQueue.enqueue('A');
myQueue.enqueue('B');
myQueue.enqueue('C');
console.log("Queue: ", myQueue.queue); // Output: Queue: ['A', 'B', 'C']

console.log("Dequeue: ", myQueue.dequeue()); // Output: Dequeue: A

console.log("Peek: ", myQueue.peek()); // Output: Peek: B

console.log("isEmpty: ", myQueue.isEmpty()); // Output: isEmpty: false

console.log("Size: ", myQueue.size()); // Output: Size: 2
