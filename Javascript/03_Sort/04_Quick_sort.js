// option 1 (recursive) - extra memory but faster
function quickSort(arr) {
  let n = arr.length;
  let pivot = arr[n - 1];
  let left = [], right = [];
  
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

  return [...quickSort(left), pivot, ...quickSort(right)]
}


// option 2 (recursive) - standard solution
function partition(arr, low, high) { 
  let pivot = arr[high]; 
  let i = low - 1; 

  for (let j = low; j <= high - 1; j++) { 
    if (arr[j] < pivot) { 
      i++; 
      [arr[i], arr[j]] = [arr[j], arr[i]];  
    } 
  } 

  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];  
  return i + 1;
} 

function quickSort(arr, low, high) { 
  if (low >= high) return; 
  let pi = partition(arr, low, high); 

  quickSort(arr, low, pi - 1); 
  quickSort(arr, pi + 1, high); 
} 


