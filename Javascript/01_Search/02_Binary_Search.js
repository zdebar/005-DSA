function binarySearch(arr, targetVal) {
  let left = 0, right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);


    if (arr[mid] === targetVal) {
      return mid; 
    }
    if (arr[mid] < targetVal) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

