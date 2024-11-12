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

// Function to find the nth-to-last element
function nthToLast(ll, n) {
  let pointer1 = ll.head;
  let pointer2 = ll.head;

  // Move pointer2 'n' steps ahead
  for (let i = 0; i < n; i++) {
      if (!pointer2) {
          return null;  // If n is greater than the length of the list
      }
      pointer2 = pointer2.next;
  }

  // Move both pointers at the same pace until pointer2 reaches the end
  while (pointer2) {
      pointer1 = pointer1.next;
      pointer2 = pointer2.next;
  }

  return pointer1;
}

// Example usage
const customLL = new LinkedList();
customLL.generate(10, 0, 99);
console.log('Linked List: ' + customLL.toString());
const nthNode = nthToLast(customLL, 3);
console.log('3rd to last node: ' + (nthNode ? nthNode.toString() : 'None')); 
