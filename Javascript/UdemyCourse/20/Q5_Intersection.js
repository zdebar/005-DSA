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

  // Helper function to generate random nodes
  generate(n, minValue, maxValue) {
      this.head = null;
      this.tail = null;
      for (let i = 0; i < n; i++) {
          this.add(Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue);
      }
      return this;
  }

  // Helper function to get the length of the linked list
  length() {
      let result = 0;
      let node = this.head;
      while (node) {
          result += 1;
          node = node.next;
      }
      return result;
  }
}

// Function to check the intersection of two linked lists
function intersection(llA, llB) {
  if (llA.tail !== llB.tail) {
      return false;
  }

  const lenA = llA.length();
  const lenB = llB.length();

  let shorter = lenA < lenB ? llA : llB;
  let longer = lenA < lenB ? llB : llA;

  let diff = Math.abs(lenA - lenB);
  let longerNode = longer.head;
  let shorterNode = shorter.head;

  // Move the longer list's pointer 'diff' steps ahead
  for (let i = 0; i < diff; i++) {
      longerNode = longerNode.next;
  }

  // Move both pointers until they find a common node
  while (shorterNode !== longerNode) {
      shorterNode = shorterNode.next;
      longerNode = longerNode.next;
  }

  return longerNode; // Return the intersecting node
}

// Helper function to add the same node to both lists
function addSameNode(llA, llB, value) {
  const tempNode = new Node(value);
  llA.tail.next = tempNode;
  llA.tail = tempNode;
  llB.tail.next = tempNode;
  llB.tail = tempNode;
}

// Testing the intersection function
const llA = new LinkedList();
llA.generate(3, 0, 10);

const llB = new LinkedList();
llB.generate(4, 0, 10);

addSameNode(llA, llB, 11);
addSameNode(llA, llB, 14);

console.log('LL A:', llA.toString());
console.log('LL B:', llB.toString());

const intersectionNode = intersection(llA, llB);
console.log(intersectionNode ? `Intersection at node with value: ${intersectionNode.value}` : "No intersection");
