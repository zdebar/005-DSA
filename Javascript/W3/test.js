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
  }

  toString() {
    let tempNode = this.head;
    let result = "";
    while (tempNode !== null) {
      result += tempNode.value; 
      
    }
    return result;
  }
}
  
