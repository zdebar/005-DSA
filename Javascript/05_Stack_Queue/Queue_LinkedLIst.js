class Node {
  constructor(data) {
      this.data = data;
      this.next = null;
  }
}

class Queue {
  constructor() {
      this.front = null;
      this.rear = null;
      this.length = 0;
  }

  enqueue(element) {
      const newNode = new Node(element);
      if (this.rear === null) {
          this.front = this.rear = newNode;
          this.length++;
          return;
      }
      this.rear.next = newNode;
      this.rear = newNode;
      this.length++;
  }

  dequeue() {
      if (this.isEmpty()) {
          return "Queue is empty";
      }
      const temp = this.front;
      this.front = temp.next;
      this.length--;
      if (this.front === null) {
          this.rear = null;
      }
      return temp.data;
  }

  peek() {
      if (this.isEmpty()) {
          return "Queue is empty";
      }
      return this.front.data;
  }

  isEmpty() {
      return this.length === 0;
  }

  size() {
      return this.length;
  }

  printQueue() {
      let temp = this.front;
      const result = [];
      while (temp) {
          result.push(temp.data);
          temp = temp.next;
      }
      console.log(result.join(" "));
  }
}

// Create a queue
const myQueue = new Queue();

myQueue.enqueue('A');
myQueue.enqueue('B');
myQueue.enqueue('C');
console.log("Queue: ");
myQueue.printQueue(); // Output: Queue: A B C

console.log("Dequeue: ", myQueue.dequeue()); // Output: Dequeue: A

console.log("Peek: ", myQueue.peek()); // Output: Peek: B

console.log("isEmpty: ", myQueue.isEmpty()); // Output: isEmpty: false

console.log("Size: ", myQueue.size()); // Output: Size: 2

