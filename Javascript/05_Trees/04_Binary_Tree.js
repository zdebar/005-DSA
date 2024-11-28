class Node {
  constructor(value = null) {
      this.value = value;
      this.next = null;
  }

  toString() {
      return String(this.value);
  }
}

class LinkedList {
  constructor() {
      this.head = null;
      this.tail = null;
  }
}

class Queue {
  constructor() {
      this.linkedList = new LinkedList();
  }

  toString() {
      let values = [];
      let currentNode = this.linkedList.head;
      while (currentNode) {
          values.push(currentNode.toString());
          currentNode = currentNode.next;
      }
      return values.join(' ');
  }

  enqueue(value) {
      let newNode = new Node(value);
      if (this.linkedList.head === null) {
          this.linkedList.head = newNode;
          this.linkedList.tail = newNode;
      } else {
          this.linkedList.tail.next = newNode;
          this.linkedList.tail = newNode;
      }
  }

  isEmpty() {
      return this.linkedList.head === null;
  }

  dequeue() {
      if (this.isEmpty()) {
          return "There is not any node in the Queue";
      } else {
          let tempNode = this.linkedList.head;
          if (this.linkedList.head === this.linkedList.tail) {
              this.linkedList.head = null;
              this.linkedList.tail = null;
          } else {
              this.linkedList.head = this.linkedList.head.next;
          }
          return tempNode;
      }
  }

  peek() {
      if (this.isEmpty()) {
          return "There is not any node in the Queue";
      } else {
          return this.linkedList.head;
      }
  }

  delete() {
      this.linkedList.head = null;
      this.linkedList.tail = null;
  }
}