class Node {
  constructor(value) {
      this.value = value;
      this.next = null;
      this.prev = null;
  }

  toString() {
      return this.value.toString();
  }
}

class DoublyLinkedList {
  constructor(value = null) {
      if (value) {
          const newNode = new Node(value);
          this.head = newNode;
          this.tail = newNode;
          this.length = 1;
      } else {
          this.head = null;
          this.tail = null;
          this.length = 0;
      }
  }

  toString() {
      let tempNode = this.head;
      let result = '';
      while (tempNode) {
          result += tempNode.value;
          if (tempNode.next) {
              result += ' <-> ';
          }
          tempNode = tempNode.next;
      }
      return result;
  }

  append(value) {
      const newNode = new Node(value);
      if (!this.head) {
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
      if (!this.head) {
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
      let currentNode = this.head;
      let index = 0;
      while (currentNode) {
          if (currentNode.value === target) {
              return index;
          }
          currentNode = currentNode.next;
          index++;
      }
      return -1;
  }

  get(index) {
      if (index < 0 || index >= this.length) {
          return null;
      }
      let currentNode;
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
      const node = this.get(index);
      if (node) {
          node.value = value;
          return true;
      }
      return false;
  }

  insert(index, value) {
      if (index < 0 || index > this.length) {
          console.log("Error: Index out of bounds.");
          return;
      }

      const newNode = new Node(value);
      if (index === 0) {
          this.prepend(value);
          return;
      } else if (index === this.length) {
          this.append(value);
          return;
      }

      const tempNode = this.get(index - 1);
      newNode.next = tempNode.next;
      newNode.prev = tempNode;
      if (tempNode.next) {
          tempNode.next.prev = newNode;
      }
      tempNode.next = newNode;

      this.length++;
  }

  popFirst() {
      if (!this.head) {
          return null;
      }

      const poppedNode = this.head;
      if (this.length === 1) {
          this.head = null;
          this.tail = null;
      } else {
          this.head = this.head.next;
          this.head.prev = null;
          poppedNode.next = null;
      }
      this.length--;
      return poppedNode;
  }

  pop() {
      if (!this.tail) {
          return null;
      }

      const poppedNode = this.tail;
      if (this.length === 1) {
          this.head = null;
          this.tail = null;
      } else {
          this.tail = this.tail.prev;
          this.tail.next = null;
          poppedNode.prev = null; // Clearing the prev reference
      }
      this.length--;
      return poppedNode;
  }

  remove(index) {
      if (index < 0 || index >= this.length) {
          return null;
      }

      if (index === 0) {
          return this.popFirst();
      }
      if (index === this.length - 1) {
          return this.pop();
      }

      const poppedNode = this.get(index);
      poppedNode.prev.next = poppedNode.next;
      poppedNode.next.prev = poppedNode.prev;
      poppedNode.prev = null;
      poppedNode.next = null;
      this.length--;
      return poppedNode;
  }

  deleteAll() {
      this.head = null;
      this.tail = null;
      this.length = 0;
  }
}

// Testing the DoublyLinkedList

const dll = new DoublyLinkedList();
dll.prepend(5);
dll.prepend(44);
console.log(dll.toString());  // Should print: 44 <-> 5
dll.insert(2, 15);
console.log(dll.toString());  // Should print: 44 <-> 5 <-> 15
dll.pop();
console.log(dll.toString());  // Should print: 44 <-> 5
console.log(dll.get(1).value);  // Should print: 5
