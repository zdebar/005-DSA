function selectionSort(arr) {
  // select lowest, swappes to the front
  // cycles for n-1 times, new position in sorted part of array
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) { 
    let minIndex = i;

    // cycles through unsorted part of array, and looks for lowest value
    for (let j = i + 1; j < n; j++) { 
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }

    // Swap lowest value to sorted part of array
    if (minIndex !== i) {
      [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
    }
  }
}
