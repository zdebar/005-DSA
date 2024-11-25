// option 1 (recursive) - extra memory but faster
function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }

  let pivot = array[array.length - 1];
  let left = [], right = [];

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] <= pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)]
}


// option 2 (recursive) - standard solution
function quickSort(array, low = 0, high = array.length - 1) {
  if (low < high) {
    // Partition the array and get the pivot index
    const pivotIndex = partition(array, low, high);

    // Recursively apply to the subarrays
    quickSort(array, low, pivotIndex - 1);  // Left subarray
    quickSort(array, pivotIndex + 1, high); // Right subarray
  }

  return array;
}

function partition(array, low, high) {
  // Choose the pivot (last element)
  const pivot = array[high];
  let i = low - 1; // Pointer for the smaller element

  for (let j = low; j < high; j++) {
    // If the current element is smaller than or equal to the pivot
    if (array[j] <= pivot) {
      i++; // Move the pointer for the smaller element
      [array[i], array[j]] = [array[j], array[i]]; // Swap
    }
  }

  // Swap the pivot element with the element at i + 1
  [array[i + 1], array[high]] = [array[high], array[i + 1]];

  return i + 1; // Return the pivot index
}


// option 3 - non recursive
function quickSortIterative(array) {
  const stack = [];
  
  // Push initial boundaries of the array
  stack.push(0);
  stack.push(array.length - 1);

  // Process the stack until empty
  while (stack.length > 0) {
    const high = stack.pop(); // Get high boundary
    const low = stack.pop();  // Get low boundary

    // Partition the array and get the pivot index
    const pivotIndex = partition(array, low, high);

    // If there are elements on the left side of the pivot, push their bounds
    if (pivotIndex - 1 > low) {
      stack.push(low);
      stack.push(pivotIndex - 1);
    }

    // If there are elements on the right side of the pivot, push their bounds
    if (pivotIndex + 1 < high) {
      stack.push(pivotIndex + 1);
      stack.push(high);
    }
  }

  return array;
}

function partition(array, low, high) {
  const pivot = array[high]; // Choose the pivot
  let i = low - 1;           // Pointer for smaller element

  for (let j = low; j < high; j++) {
    if (array[j] <= pivot) {
      i++;
      [array[i], array[j]] = [array[j], array[i]]; // Swap
    }
  }

  [array[i + 1], array[high]] = [array[high], array[i + 1]]; // Place pivot
  return i + 1; // Return pivot index
}
