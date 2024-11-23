let myArray = [64, 34, 25, 12, 22, 11, 90, 5];

function mergeSort(arr) {
  // Base case: an array of length 1 or less is already sorted
  if (arr.length <= 1) {
      return arr;
  }

  // Step 1: Divide the array into two halves
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  // Step 2: Recursively sort both halves
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Step 3: Merge the two sorted arrays
  while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
          result.push(left[leftIndex]);
          leftIndex++;
      } else {
          result.push(right[rightIndex]);
          rightIndex++;
      }
  }

  // Step 4: Concatenate any remaining elements from left or right
  return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}

console.log("Sorted array:", countingSort(myArray));