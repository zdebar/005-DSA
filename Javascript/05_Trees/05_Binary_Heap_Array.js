class MaxHeap {
  constructor() {
    this.heap = [];
  }

  // Helper function to get the index of the parent of a node
  parent(index) {
    return Math.floor((index - 1) / 2);
  }

  // Helper function to get the index of the left child of a node
  leftChild(index) {
    return 2 * index + 1;
  }

  // Helper function to get the index of the right child of a node
  rightChild(index) {
    return 2 * index + 2; 
  }

  // Function to swap two elements in the heap
  swap(i, j) {
    const temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
}

  // Function to heapify up (after insertion)
  heapifyUp(index) {
    while (index > 0 && this.heap[this.parent(index)] < this.heap[index]) {
      this.swap(this.parent(index), index);
      index = this.parent(index);
    }
  }

  // Function to heapify down (after deletion)
  heapifyDown(index) {
    let largest = index;
    const left = this.leftChild(index);
    const right = this.rightChild(index);

    if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
      largest = left;
    }

    if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
      largest = right;
    }

    if (largest !== index) {
      this.swap(index, largest);
      this.heapifyDown(largest);
    }
  }

  // Function to insert a new value into the heap
  insert(value) {
    this.heap.push(value);
    this.heapifyUp(this.heap.length - 1);
  }

  // Function to remove the root (maximum) value from the heap
  remove() {
    if (this.heap.length === 0) return null;

    // Swap the root with the last element
    const root = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();

    // Heapify down from the root
    this.heapifyDown(0);

    return root;
  }

  // Function to peek at the root element (maximum)
  peek() {
    return this.heap[0];
  }
}

