class Node {
  constructor(value) {
      this.value = value;
      this.next = null;
      this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
  }

  toString() {
      let result = '';
      let currentNode = this.head;
      while (currentNode) {
          result += currentNode.value;
          currentNode = currentNode.next;
          if (currentNode) result += ' <-> ';
      }
      return result;
  }

  append(value) {
      const newNode = new Node(value);
      if (this.length === 0) {
          this.head = newNode;
          this.tail = newNode;
      } else {
          this.tail.next = newNode;
          newNode.prev = this.tail;
          this.tail = newNode;
      }
      this.length++;
  }

  prepend(value) {
      const newNode = new Node(value);
      if (this.length === 0) {
          this.head = newNode;
          this.tail = newNode;
      } else {
          newNode.next = this.head;
          this.head.prev = newNode;
          this.head = newNode;
      }
      this.length++;
  }

  traverse() {
      let currentNode = this.head;
      while (currentNode) {
          console.log(currentNode.value);
          currentNode = currentNode.next;
      }
  }

  reverseTraverse() {
      let currentNode = this.tail;
      while (currentNode) {
          console.log(currentNode.value);
          currentNode = currentNode.prev;
      }
  }

  search(target) {
      let current = this.head;
      while (current) {
          if (current.value === target) return true;
          current = current.next;
      }
      return false;
  }

  insert(index, value) {
      if (index < 0 || index > this.length) {
          console.error("Error: Index out of bounds.");
          return;
      }

      if (index === 0) {
          this.prepend(value);
          return;
      }
      if (index === this.length) {
          this.append(value);
          return;
      }

      const newNode = new Node(value);
      const tempNode = this.get(index - 1);

      newNode.next = tempNode.next;
      newNode.prev = tempNode;
      tempNode.next.prev = newNode;
      tempNode.next = newNode;

      this.length++;
  }

  get(index) {
      if (index < 0 || index >= this.length) return null;

      let currentNode = null;
      if (index < this.length / 2) {
          currentNode = this.head;
          for (let i = 0; i < index; i++) {
              currentNode = currentNode.next;
          }
      } else {
          currentNode = this.tail;
          for (let i = this.length - 1; i > index; i--) {
              currentNode = currentNode.prev;
          }
      }

      return currentNode;
  }

  setValue(index, value) {
      const temp = this.get(index);
      if (temp) {
          temp.value = value;
          return true;
      }
      return false;
  }

  popFirst() {
      if (this.length === 0) return null;

      const poppedNode = this.head;
      if (this.length === 1) {
          this.head = null;
          this.tail = null;
      } else {
          this.head = this.head.next;
          this.head.prev = null;
      }
      poppedNode.next = null;

      this.length--;
      return poppedNode;
  }

  pop() {
      if (this.length === 0) return null;

      const poppedNode = this.tail;
      if (this.length === 1) {
          this.head = null;
          this.tail = null;
      } else {
          this.tail = this.tail.prev;
          this.tail.next = null;
      }
      poppedNode.prev = null;

      this.length--;
      return poppedNode;
  }

  remove(index) {
      if (index < 0 || index >= this.length) return null;

      if (index === 0) return this.popFirst();
      if (index === this.length - 1) return this.pop();

      const poppedNode = this.get(index);
      poppedNode.prev.next = poppedNode.next;
      poppedNode.next.prev = poppedNode.prev;

      poppedNode.next = null;
      poppedNode.prev = null;

      this.length--;
      return poppedNode;
  }

  deleteAll() {
      this.head = null;
      this.tail = null;
      this.length = 0;
  }
}

// Usage example:
const dll = new DoublyLinkedList();
dll.append(10);
dll.append(20);
dll.append(30);
console.log(dll.toString()); // Output: 10 <-> 20 <-> 30
dll.insert(1, 15);
console.log(dll.toString()); // Output: 10 <-> 15 <-> 20 <-> 30
dll.popFirst();
console.log(dll.toString()); // Output: 15 <-> 20 <-> 30
dll.pop();
console.log(dll.toString()); // Output: 15 <-> 20
