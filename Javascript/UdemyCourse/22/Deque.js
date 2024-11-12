class Queue {
  constructor(maxSize) {
      this.maxSize = maxSize;
      this.queue = [];
  }

  // Add an item to the queue
  enqueue(item) {
      if (this.queue.length >= this.maxSize) {
          this.queue.shift(); // Removes the first element (FIFO)
      }
      this.queue.push(item);
  }

  // Remove an item from the queue
  dequeue() {
      return this.queue.shift();
  }

  // Clear the queue
  clear() {
      this.queue = [];
  }

  // Get the current state of the queue
  toString() {
      return this.queue.join(", ");
  }
}

// Testing the Queue class
const customQueue = new Queue(3);
console.log(customQueue.toString());  // Should print: ""

customQueue.enqueue(1);
customQueue.enqueue(2);
customQueue.enqueue(3);
customQueue.enqueue(4);  // This will remove 1 (FIFO)
console.log(customQueue.toString());  // Should print: "2, 3, 4"

customQueue.clear();
console.log(customQueue.toString());  // Should print: ""
