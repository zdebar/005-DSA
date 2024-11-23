class Heap {
  constructor(size) {
      this.customList = Array(size + 1).fill(null);  // Index 0 is not used
      this.heapSize = 0;
      this.maxSize = size + 1;
  }
}

function peekofHeap(rootNode) {
  if (!rootNode) {
      return;
  } else {
      return rootNode.customList[1];
  }
}

function sizeofHeap(rootNode) {
  if (!rootNode) {
      return;
  } else {
      return rootNode.heapSize;
  }
}

function levelOrderTraversal(rootNode) {
  if (!rootNode) {
      return;
  } else {
      for (let i = 1; i <= rootNode.heapSize; i++) {
          console.log(rootNode.customList[i]);
      }
  }
}

function heapifyTreeInsert(rootNode, index, heapType) {
  const parentIndex = Math.floor(index / 2);
  if (index <= 1) {
      return;
  }
  if (heapType === "Min") {
      if (rootNode.customList[index] < rootNode.customList[parentIndex]) {
          let temp = rootNode.customList[index];
          rootNode.customList[index] = rootNode.customList[parentIndex];
          rootNode.customList[parentIndex] = temp;
      }
      heapifyTreeInsert(rootNode, parentIndex, heapType);
  } else if (heapType === "Max") {
      if (rootNode.customList[index] > rootNode.customList[parentIndex]) {
          let temp = rootNode.customList[index];
          rootNode.customList[index] = rootNode.customList[parentIndex];
          rootNode.customList[parentIndex] = temp;
      }
      heapifyTreeInsert(rootNode, parentIndex, heapType);
  }
}

function inserNode(rootNode, nodeValue, heapType) {
  if (rootNode.heapSize + 1 === rootNode.maxSize) {
      return "The Binary Heap is Full";
  }
  rootNode.customList[rootNode.heapSize + 1] = nodeValue;
  rootNode.heapSize++;
  heapifyTreeInsert(rootNode, rootNode.heapSize, heapType);
  return "The value has been successfully inserted";
}

function heapifyTreeExtract(rootNode, index, heapType) {
  const leftIndex = index * 2;
  const rightIndex = index * 2 + 1;
  let swapChild = 0;

  if (rootNode.heapSize < leftIndex) {
      return;
  } else if (rootNode.heapSize === leftIndex) {
      if (heapType === "Min") {
          if (rootNode.customList[index] > rootNode.customList[leftIndex]) {
              let temp = rootNode.customList[index];
              rootNode.customList[index] = rootNode.customList[leftIndex];
              rootNode.customList[leftIndex] = temp;
          }
      } else {
          if (rootNode.customList[index] < rootNode.customList[leftIndex]) {
              let temp = rootNode.customList[index];
              rootNode.customList[index] = rootNode.customList[leftIndex];
              rootNode.customList[leftIndex] = temp;
          }
      }
      return;
  } else {
      if (heapType === "Min") {
          swapChild = rootNode.customList[leftIndex] < rootNode.customList[rightIndex] ? leftIndex : rightIndex;
          if (rootNode.customList[index] > rootNode.customList[swapChild]) {
              let temp = rootNode.customList[index];
              rootNode.customList[index] = rootNode.customList[swapChild];
              rootNode.customList[swapChild] = temp;
          }
      } else {
          swapChild = rootNode.customList[leftIndex] > rootNode.customList[rightIndex] ? leftIndex : rightIndex;
          if (rootNode.customList[index] < rootNode.customList[swapChild]) {
              let temp = rootNode.customList[index];
              rootNode.customList[index] = rootNode.customList[swapChild];
              rootNode.customList[swapChild] = temp;
          }
      }
  }
  heapifyTreeExtract(rootNode, swapChild, heapType);
}

function extractNode(rootNode, heapType) {
  if (rootNode.heapSize === 0) {
      return;
  } else {
      const extractedNode = rootNode.customList[1];
      rootNode.customList[1] = rootNode.customList[rootNode.heapSize];
      rootNode.customList[rootNode.heapSize] = null;
      rootNode.heapSize--;
      heapifyTreeExtract(rootNode, 1, heapType);
      return extractedNode;
  }
}

function deleteEntireBP(rootNode) {
  rootNode.customList = null;
}

// Example usage:

let newHeap = new Heap(5);
inserNode(newHeap, 4, "Max");
inserNode(newHeap, 5, "Max");
inserNode(newHeap, 2, "Max");
inserNode(newHeap, 1, "Max");
deleteEntireBP(newHeap);
levelOrderTraversal(newHeap);
