class Node {
  constructor(value = null) {
      this.value = value;
      this.next = null;
  }

  toString() {
      return this.value.toString();
  }
}

class LinkedList {
  constructor() {
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
}

// Function to sum two linked lists
function sumList(llA, llB) {
  let n1 = llA.head;
  let n2 = llB.head;
  let carry = 0;
  const resultLL = new LinkedList();

  while (n1 || n2) {
      let result = carry;
      if (n1) {
          result += n1.value;
          n1 = n1.next;
      }
      if (n2) {
          result += n2.value;
          n2 = n2.next;
      }
      resultLL.add(result % 10);
      carry = Math.floor(result / 10);
  }

  // Handle the final carry, if any
  if (carry) {
      resultLL.add(carry);
  }

  return resultLL;
}

// Example usage
const llA = new LinkedList();
llA.add(7);
llA.add(1);
llA.add(6); // Represents the number 617

const llB = new LinkedList();
llB.add(5);
llB.add(9);
llB.add(2); // Represents the number 295

console.log('LL A:', llA.toString());  // Output: 7 -> 1 -> 6 (617)
console.log('LL B:', llB.toString());  // Output: 5 -> 9 -> 2 (295)
console.log('Sum:', sumList(llA, llB).toString()); // Output: 2 -> 1 -> 9 -> (912)
