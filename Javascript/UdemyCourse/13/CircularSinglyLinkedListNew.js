class Node {
  constructor(value) {
      this.value = value;
      this.next = null;
  }

  toString() {
      return String(this.value);
  }
}

class CSLinkedList {
  constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
  }

  toString() {
      let result = '';
      let tempNode = this.head;
      while (tempNode !== null) {
          result += tempNode.value;
          tempNode = tempNode.next;
          if (tempNode === this.head) {  // Stop condition for circular list
              break;
          }
          result += ' -> ';
      }
      return result;
  }

  append(value) {
      const newNode = new Node(value);
      if (this.length === 0) {
          this.head = newNode;
          this.tail = newNode;
          newNode.next = newNode; // Circular link
      } else {
          this.tail.next = newNode;
          newNode.next = this.head; // Circular link
          this.tail = newNode;
      }
      this.length += 1;
  }

  prepend(value) {
      const newNode = new Node(value);
      if (this.length === 0) {
          this.head = newNode;
          this.tail = newNode;
          newNode.next = newNode; // Circular link
      } else {
          newNode.next = this.head;
          this.head = newNode;
          this.tail.next = newNode; // Circular link
      }
      this.length += 1;
  }

  insert(index, value) {
      if (index < 0 || index > this.length) {
          throw new Error("Index out of range");
      }

      const newNode = new Node(value);

      if (index === 0) {
          if (this.length === 0) { // If the list is empty
              this.head = newNode;
              this.tail = newNode;
              newNode.next = newNode; // Circular link
          } else {
              newNode.next = this.head;
              this.head = newNode;
              this.tail.next = newNode; // Update tail's next for circularity
          }
      } else if (index === this.length) {
          this.tail.next = newNode;
          newNode.next = this.head; // Circular link
          this.tail = newNode;
      } else {
          let tempNode = this.head;
          for (let i = 0; i < index - 1; i++) {
              tempNode = tempNode.next;
          }
          newNode.next = tempNode.next;
          tempNode.next = newNode;
      }
      this.length += 1;
  }

  traverse() {
      if (!this.head) return;
      let current = this.head;
      while (current !== null) {
          console.log(current.value);
          current = current.next;
          if (current === this.head) {  // Stop condition for circular list
              break;
          }
      }
  }

  search(target) {
      let current = this.head;
      let index = 0;
      while (current !== null) {
          if (current.value === target) {
              return index;
          }
          current = current.next;
          index += 1;
          if (current === this.head) {  // Stop condition for circular list
              break;
          }
      }
      return -1;
  }

  get(index) {
      if (index < 0 || index >= this.length) return null;
      let current = this.head;
      for (let i = 0; i < index; i++) {
          current = current.next;
      }
      return current;
  }

  setValue(index, value) {
      const node = this.get(index);
      if (node) {
          node.value = value;
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
          this.tail.next = this.head; // Update tail's next pointer to point to the new head
      }
      poppedNode.next = null;
      this.length -= 1;
      return poppedNode;
  }

  pop() {
      if (this.length === 0) return null;
      const poppedNode = this.tail;

      if (this.length === 1) {
          this.head = null;
          this.tail = null;
      } else {
          let temp = this.head;
          while (temp.next !== this.tail) {
              temp = temp.next;
          }
          temp.next = this.head; // Point the second last node's next to the head
          this.tail = temp; // Update tail to be the second last node
      }
      poppedNode.next = null;
      this.length -= 1;
      return poppedNode;
  }

  remove(index) {
      if (index < 0 || index >= this.length) return null;

      if (index === 0) {
          return this.popFirst();
      }

      if (index === this.length - 1) {
          return this.pop();
      }

      const prevNode = this.get(index - 1);
      const removedNode = prevNode.next;
      prevNode.next = removedNode.next;
      removedNode.next = null;
      this.length -= 1;
      return removedNode;
  }

  deleteAll() {
      if (this.length === 0) return; // If the list is empty, just return
      this.tail.next = null; // Break the circular link
      this.head = null;
      this.tail = null;
      this.length = 0;
  }
}

// Example usage:
const linkedList = new CSLinkedList();
console.log(linkedList.toString());
linkedList.append(10);
linkedList.insert(0, 20);
linkedList.insert(1, 30);
linkedList.insert(2, 40);
linkedList.insert(3, 50);
console.log(linkedList.toString());
console.log(linkedList.setValue(2, 100)); // Set value at index 2 to 100
console.log(linkedList.toString());
