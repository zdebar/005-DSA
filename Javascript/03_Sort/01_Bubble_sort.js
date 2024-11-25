function bubbleSort(arr) {
  // compare two values, moves higher further
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) { // repeat cycle n-1 times
    for (let j = 0; j < n - i - 1 ; j++) { // stack highest number at the end of array, therefore every subcycle is one short 
      if (arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
      }
    }
  }
}



