class Node {
  constructor(value) {
      this.value = value;
      this.next = null;
  }
}

class LinkedList {
  constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
  }

  toString() {
      let tempNode = this.head;
      let result = '';
      while (tempNode !== null) {
          result += tempNode.value;
          if (tempNode.next !== null) {
              result += ' -> ';
          }
          tempNode = tempNode.next;
      }
      return result;
  }

  append(value) {
      const newNode = new Node(value);
      if (this.head === null) {
          this.head = newNode;
          this.tail = newNode;
      } else {
          this.tail.next = newNode;
          this.tail = newNode;
      }
      this.length += 1;
  }

  prepend(value) {
      const newNode = new Node(value);
      if (this.head === null) {
          this.head = newNode;
          this.tail = newNode;
      } else {
          newNode.next = this.head;
          this.head = newNode;
      }
      this.length += 1;
  }

  insert(index, value) {
      const newNode = new Node(value);
      if (this.head === null || index === 0) {
          this.prepend(value);
      } else {
          let tempNode = this.head;
          for (let i = 0; i < index - 1; i++) {
              tempNode = tempNode.next;
          }
          newNode.next = tempNode.next;
          tempNode.next = newNode;
          this.length += 1;
      }
  }

  traverse() {
      let current = this.head;
      while (current !== null) {
          console.log(current.value);
          current = current.next;
      }
  }

  search(target) {
      let current = this.head;
      let index = 0;
      while (current !== null) {
          if (current.value === target) return index;
          current = current.next;
          index += 1;
      }
      return -1;
  }

  get(index) {
      if (index === -1) return this.tail;
      if (index < -1 || index >= this.length) return null;
      let current = this.head;
      for (let i = 0; i < index; i++) {
          current = current.next;
      }
      return current;
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
          poppedNode.next = null;
      }
      this.length -= 1;
      return poppedNode;
  }

  pop() {
      if (this.length === 0) return null;
      const poppedNode = this.tail;
      if (this.length === 1) {
          this.head = this.tail = null;
      } else {
          let temp = this.head;
          while (temp.next !== this.tail) {
              temp = temp.next;
          }
          temp.next = null;
          this.tail = temp;
      }
      this.length -= 1;
      return poppedNode;
  }

  remove(index) {
      if (index < 0 || index >= this.length) return null;
      if (index === 0) return this.popFirst();
      if (index === this.length - 1) return this.pop();

      const prevNode = this.get(index - 1);
      const poppedNode = prevNode.next;
      prevNode.next = poppedNode.next;
      poppedNode.next = null;
      this.length -= 1;
      return poppedNode;
  }
}

// Usage
const linkedList = new LinkedList();
linkedList.append(10);
linkedList.append(20);
linkedList.append(30);
linkedList.append(40);
console.log(linkedList.toString()); // Output: "10 -> 20 -> 30 -> 40"
console.log(linkedList.remove(0)); // Removes the first element (10)
console.log(linkedList.toString()); // Output: "20 -> 30 -> 40"
