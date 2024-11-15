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
    let result = "";
    while (tempNode !== null) {
      result += tempNode.value; 
      if (tempNode.next !== null) {
        result += " -> ";
      }
      tempNode = tempNode.next;
    }
    return result;
  }

  append(value) {
    const NewNode = new Node(value);
    if (this.head === null) {
      this.head = NewNode;
      this.tail = NewNode;
    } else {
      while 
    }
  }
}

  
