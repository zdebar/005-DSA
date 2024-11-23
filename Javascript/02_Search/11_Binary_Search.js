function binarySearch(arr, targetVal) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      // Check if targetVal is at mid
      if (arr[mid] === targetVal) {
          return mid;  // Target found
      }

      // If targetVal is greater, ignore the left half
      if (arr[mid] < targetVal) {
          left = mid + 1;
      }
      // If targetVal is smaller, ignore the right half
      else {
          right = mid - 1;
      }
  }

  return -1;  // Target not found
}

let arr = [2, 3, 5, 7, 9, 24, 38, 43, 66, 82];
let targetVal = 9;

let result = binarySearch(arr, targetVal);

if (result !== -1) {
  console.log("Value", targetVal, "found at index", result);
} else {
  console.log("Value", targetVal, "not found");
}

