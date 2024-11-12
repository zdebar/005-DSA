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

// Remove duplicates using a set
function removeDups1(ll) {
  if (!ll.head) return;

  let currentNode = ll.head;
  const visited = new Set();
  visited.add(currentNode.value);

  while (currentNode.next) {
      if (visited.has(currentNode.next.value)) {
          currentNode.next = currentNode.next.next; // Skip the duplicate
      } else {
          visited.add(currentNode.next.value);
          currentNode = currentNode.next;
      }
  }

  return ll;
}

// Remove duplicates using the runner method (brute force)
function removeDups2(ll) {
  if (!ll.head) return;

  let currentNode = ll.head;
  while (currentNode) {
      let runner = currentNode;
      while (runner.next) {
          if (runner.next.value === currentNode.value) {
              runner.next = runner.next.next; // Skip the duplicate
          } else {
              runner = runner.next;
          }
      }
      currentNode = currentNode.next;
  }

  return ll;
}

// Example usage
const customLL = new LinkedList();
customLL.generate(10, 0, 99);
console.log('Original List: ' + customLL.toString()); // Print original list
removeDups1(customLL); // Remove duplicates using set method
console.log('After Remove Dups (Set method): ' + customLL.toString()); // Print list after removing duplicates

// If you'd like to try the brute force method (removeDups2), use:
removeDups2(customLL);
console.log('After Remove Dups (Runner method): ' + customLL.toString()); // Print list after removing duplicates
