function linearSearch(arr, targetVal) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === targetVal) {
        return i;
    }
  }
  return -1;
}

