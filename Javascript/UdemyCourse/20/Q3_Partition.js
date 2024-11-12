class Node {
  constructor(value = null) {
      this.value = value;
      this.next = null;
      this.prev = null;
  }

  toString() {
      return this.value.toString();
  }
}

class LinkedList {
  constructor(values = []) {
      this.head = null;
      this.tail = null;
  }

  *[Symbol.iterator]() {
      let curNode = this.head;
      while (curNode) {
          yield curNode;
          curNode = curNode.next;
      }
  }

  toString() {
      let values = [];
      for (let node of this) {
          values.push(node.value.toString());
      }
      return values.join(' -> ');
  }

  length() {
      let result = 0;
      let node = this.head;
      while (node) {
          result++;
          node = node.next;
      }
      return result;
  }

  add(value) {
      const newNode = new Node(value);
      if (!this.head) {
          this.head = newNode;
          this.tail = newNode;
      } else {
          this.tail.next = newNode;
          this.tail = this.tail.next;
      }
      return this.tail;
  }

  generate(n, minValue, maxValue) {
      this.head = null;
      this.tail = null;
      for (let i = 0; i < n; i++) {
          this.add(Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue);
      }
      return this;
  }
}

// Function to partition the linked list around value x
function partition(ll, x) {
  let curNode = ll.head;
  let tail = ll.head;
  let smallerHead = null, smallerTail = null;
  let greaterHead = null, greaterTail = null;

  while (curNode) {
      let nextNode = curNode.next;
      curNode.next = null;

      if (curNode.value < x) {
          if (!smallerHead) {
              smallerHead = curNode;
              smallerTail = smallerHead;
          } else {
              smallerTail.next = curNode;
              smallerTail = curNode;
          }
      } else {
          if (!greaterHead) {
              greaterHead = curNode;
              greaterTail = greaterHead;
          } else {
              greaterTail.next = curNode;
              greaterTail = curNode;
          }
      }
      curNode = nextNode;
  }

  // Combine the smaller and greater lists
  if (smallerTail) {
      smallerTail.next = greaterHead;
      ll.head = smallerHead;
  } else {
      ll.head = greaterHead;
  }

  ll.tail = greaterTail;
}

// Example usage
const customLL = new LinkedList();
customLL.generate(10, 0, 99);
console.log('Original Linked List: ' + customLL.toString());
partition(customLL, 30);
console.log('Partitioned Linked List around 30: ' + customLL.toString());
