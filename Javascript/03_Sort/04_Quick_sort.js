// option 1 (recursive) - extra memory but faster
function quickSort(arr) {
  const n = arr.length;
  const pivot = arr[n - 1];
  const left = [], right = [];
  
  if (n <= 1) {
    return arr;
  }

  for (let i = 0; i < n - 1; i++) {
    if (arr[i] > pivot) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}


// option 2 (recursive) - standard solution
function quickSort(arr, low = 0, high = arr.length - 1) { 
  if (low < high) { // Ensure valid range
    const pivot = partition(arr, low, high); // Partitioning step

    quickSort(arr, low, pivot - 1); // Recursively sort left part
    quickSort(arr, pivot + 1, high); // Recursively sort right part
  }
}

function partition(arr, low, high) { 
  const pivot = arr[high]; // Choosing pivot as the last element
  let i = low; // pointer for smaller elements

  for (let j = low + 1; j < high; j++) { 
    if (arr[j] < pivot) { // Element smaller than pivot found
      [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap smaller element to the left side
      i++;
    } 
  } 
  
  // Place the pivot element in the correct position
  [arr[i], arr[high]] = [arr[high], arr[i]];  
  return i; // Return the partition index
} 