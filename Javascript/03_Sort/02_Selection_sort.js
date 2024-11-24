function swap(a,b) {
  [a, b] = [b, a];
}

function selectionSort(arr) {
  // select lowest, swappes to the front
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] < arr[j]) minIndex = j;
    }
    swap(arr[i], arr[minIndex])
  }
}
