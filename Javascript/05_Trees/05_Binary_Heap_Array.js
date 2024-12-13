class MaxHeap {
  constructor() {
    this.heap = [];
  }

  parent(index) {
    return Math.floor((index - 1) / 2);
  }

  leftChild(index) {
    return 2 * index + 1;
  }

  rightChild(index) {
    return 2 * index + 2; 
  }

  swap(i, j) {
    const temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
}

  heapifyUp(index) {
    while (index > 0 && this.heap[this.parent(index)] < this.heap[index]) {
      this.swap(this.parent(index), index);
      index = this.parent(index);
    }
  }

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

  insert(value) {
    this.heap.push(value);
    this.heapifyUp(this.heap.length - 1);
  }

  remove() {
    if (this.heap.length === 0) return null;

    // Swap the root with the last element
    const root = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();

    this.heapifyDown(0);
    return root;
  }

  peek() {
    return this.heap[0];
  }
}

