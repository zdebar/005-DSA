class Node {
  constructor(value) {
      this.value = value;
      this.next = null;
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
      if (this.length === 0) return result;
      let tempNode = this.head;
      do {
          result += tempNode.value;
          tempNode = tempNode.next;
          if (tempNode !== this.head) result += ' -> ';
      } while (tempNode !== this.head);
      return result;
  }

  append(value) {
      const newNode = new Node(value);
      if (this.length === 0) {
          this.head = newNode;
          this.tail = newNode;
          newNode.next = newNode;
      } else {
          this.tail.next = newNode;
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
      } else {
          newNode.next = this.head;
          this.head = newNode;
          this.tail.next = newNode;
      }
      this.length++;
  }

  insert(index, value) {
      if (index < 0 || index > this.length) throw new Error("Index out of range");

      const newNode = new Node(value);
      if (index === 0) {
          this.prepend(value);
      } else if (index === this.length) {
          this.append(value);
      } else {
          let tempNode = this.head;
          for (let i = 0; i < index - 1; i++) {
              tempNode = tempNode.next;
          }
          newNode.next = tempNode.next;
          tempNode.next = newNode;
          this.length++;
      }
  }

  traverse() {
      if (!this.head) return;
      let current = this.head;
      do {
          console.log(current.value);
          current = current.next;
      } while (current !== this.head);
  }

  search(target) {
      if (!this.head) return -1;
      let current = this.head;
      let index = 0;
      do {
          if (current.value === target) return index;
          current = current.next;
          index++;
      } while (current !== this.head);
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
          this.tail.next = this.head;
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
          let temp = this.head;
          while (temp.next !== this.tail) {
              temp = temp.next;
          }
          temp.next = this.head;
          this.tail = temp;
      }
      poppedNode.next = null;
      this.length--;
      return poppedNode;
  }

  remove(index) {
      if (index < -1 || index >= this.length) return null;
      if (index === 0) return this.popFirst();
      if (index === -1 || index === this.length - 1) return this.pop();
      const prevNode = this.get(index - 1);
      const poppedNode = prevNode.next;
      prevNode.next = poppedNode.next;
      poppedNode.next = null;
      this.length--;
      return poppedNode;
  }

  deleteAll() {
      if (this.length === 0) return;
      this.tail.next = null;
      this.head = null;
      this.tail = null;
      this.length = 0;
  }
}

// Usage example:
const linkedList = new CSLinkedList();
console.log(linkedList.toString());
linkedList.append(10);
linkedList.insert(0, 20);
linkedList.insert(1, 30);
linkedList.insert(2, 40);
linkedList.insert(3, 50);
console.log(linkedList.toString());
console.log(linkedList.setValue(-1, 100));
console.log(linkedList.toString());
