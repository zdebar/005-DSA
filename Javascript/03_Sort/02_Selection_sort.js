function selectionSort(arr) {
  // select lowest, swappes to the front
  // cycles for n-1 times, new position in sorted part of array
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++ ) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex != i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
}
