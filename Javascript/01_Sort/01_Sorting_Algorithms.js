// Bubble Sort
function bubbleSort(customList) {
  for (let i = 0; i < customList.length - 1; i++) {
      for (let j = 0; j < customList.length - i - 1; j++) {
          if (customList[j] > customList[j + 1]) {
              [customList[j], customList[j + 1]] = [customList[j + 1], customList[j]];
          }
      }
  }
  console.log(customList);
}

// Selection Sort
function selectionSort(customList) {
  for (let i = 0; i < customList.length; i++) {
      let minIndex = i;
      for (let j = i + 1; j < customList.length; j++) {
          if (customList[minIndex] > customList[j]) {
              minIndex = j;
          }
      }
      [customList[i], customList[minIndex]] = [customList[minIndex], customList[i]];
  }
  console.log(customList);
}

// Insertion Sort
function insertionSort(customList) {
  for (let i = 1; i < customList.length; i++) {
      let key = customList[i];
      let j = i - 1;
      while (j >= 0 && key < customList[j]) {
          customList[j + 1] = customList[j];
          j--;
      }
      customList[j + 1] = key;
  }
  return customList;
}

// Bucket Sort
function bucketSort(customList) {
  const numberOfBuckets = Math.round(Math.sqrt(customList.length));
  const maxValue = Math.max(...customList);
  let arr = Array.from({ length: numberOfBuckets }, () => []);
  
  customList.forEach(item => {
      let indexB = Math.ceil(item * numberOfBuckets / maxValue);
      arr[indexB - 1].push(item);
  });
  
  for (let i = 0; i < numberOfBuckets; i++) {
      arr[i] = insertionSort(arr[i]);
  }

  let k = 0;
  for (let i = 0; i < numberOfBuckets; i++) {
      for (let j = 0; j < arr[i].length; j++) {
          customList[k] = arr[i][j];
          k++;
      }
  }
  return customList;
}

// Merge Sort
function merge(customList, l, m, r) {
  const n1 = m - l + 1;
  const n2 = r - m;

  let L = new Array(n1);
  let R = new Array(n2);

  for (let i = 0; i < n1; i++) {
      L[i] = customList[l + i];
  }
  for (let j = 0; j < n2; j++) {
      R[j] = customList[m + 1 + j];
  }

  let i = 0, j = 0, k = l;
  while (i < n1 && j < n2) {
      if (L[i] <= R[j]) {
          customList[k] = L[i];
          i++;
      } else {
          customList[k] = R[j];
          j++;
      }
      k++;
  }
  while (i < n1) {
      customList[k] = L[i];
      i++;
      k++;
  }
  while (j < n2) {
      customList[k] = R[j];
      j++;
      k++;
  }
}

function mergeSort(customList, l, r) {
  if (l < r) {
      const m = Math.floor((l + r) / 2);
      mergeSort(customList, l, m);
      mergeSort(customList, m + 1, r);
      merge(customList, l, m, r);
  }
  return customList;
}

// Quick Sort
function partition(customList, low, high) {
  let i = low - 1;
  let pivot = customList[high];
  for (let j = low; j < high; j++) {
      if (customList[j] <= pivot) {
          i++;
          [customList[i], customList[j]] = [customList[j], customList[i]];
      }
  }
  [customList[i + 1], customList[high]] = [customList[high], customList[i + 1]];
  return i + 1;
}

function quickSort(customList, low, high) {
  if (low < high) {
      const pi = partition(customList, low, high);
      quickSort(customList, low, pi - 1);
      quickSort(customList, pi + 1, high);
  }
}

// Heap Sort
function heapify(customList, n, i) {
  let smallest = i;
  const l = 2 * i + 1;
  const r = 2 * i + 2;

  if (l < n && customList[l] < customList[smallest]) {
      smallest = l;
  }

  if (r < n && customList[r] < customList[smallest]) {
      smallest = r;
  }

  if (smallest !== i) {
      [customList[i], customList[smallest]] = [customList[smallest], customList[i]];
      heapify(customList, n, smallest);
  }
}

function heapSort(customList) {
  const n = customList.length;
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      heapify(customList, n, i);
  }

  for (let i = n - 1; i > 0; i--) {
      [customList[i], customList[0]] = [customList[0], customList[i]];
      heapify(customList, i, 0);
  }
  // customList.reverse();
}

const cList = [2, 1, 7, 6, 5, 3, 4, 9, 8];
heapSort(cList);
console.log(cList);
