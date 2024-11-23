class Node {
  constructor(value) {
      this.value = value;
      this.next = null;
      this.prev = null;
  }
}

class CircularDoublyLinkedList {
  constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
  }

  constructor2(value) {
      const newNode = new Node(value);
      newNode.next = newNode;
      newNode.prev = newNode;

      this.head = newNode;
      this.tail = newNode;
      this.length = 1;
  }

  toString() {
      let result = '';
      if (this.length === 0) return result;

      let currentNode = this.head;
      do {
          result += currentNode.value;
          currentNode = currentNode.next;
          if (currentNode !== this.head) result += ' <-> ';
      } while (currentNode !== this.head);
      return result;
  }

  append(value) {
      const newNode = new Node(value);
      if (this.length === 0) {
          this.head = newNode;
          this.tail = newNode;
          newNode.next = newNode;
          newNode.prev = newNode;
      } else {
          this.tail.next = newNode;
          this.head.prev = newNode;
          newNode.prev = this.tail;
          newNode.next = this.head;
          this.tail = newNode;
      }
      this.length++;
  }

  prepend(value) {
      const newNode = new Node(value);
      if (this.length === 0) {
          this.head = newNode;
          this.tail = newNode;
          newNode.next = newNode;
          newNode.prev = newNode;
      } else {
          this.tail.next = newNode;
          this.head.prev = newNode;
          newNode.prev = this.tail;
          newNode.next = this.head;
          this.head = newNode;
      }
      this.length++;
  }

  traverse() {
      if (this.length === 0) return;
      let currentNode = this.head;
      do {
          console.log(currentNode.value);
          currentNode = currentNode.next;
      } while (currentNode !== this.head);
  }

  reverseTraverse() {
      if (this.length === 0) return;
      let currentNode = this.tail;
      do {
          console.log(currentNode.value);
          currentNode = currentNode.prev;
      } while (currentNode !== this.tail);
  }

  search(target) {
      if (this.length === 0) return false;
      let current = this.head;
      do {
          if (current.value === target) return true;
          current = current.next;
      } while (current !== this.head);
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
          this.head.prev = this.tail;
          this.tail.next = this.head;
      }
      poppedNode.next = null;
      poppedNode.prev = null;

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
          this.tail.next = this.head;
          this.head.prev = this.tail;
      }
      poppedNode.next = null;
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
const newCcll = new CircularDoublyLinkedList();
newCcll.append(10);
newCcll.append(20);
newCcll.append(30);
console.log(newCcll.toString()); // Output: 10 <-> 20 <-> 30
