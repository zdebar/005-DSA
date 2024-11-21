let sort = [64, 34, 25, 12, 22, 11, 90, 5];

function selectionSort(array) {
  // Select lowest, swappes to front
  let n = array.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    [array[i], array[minIndex]] = [array[minIndex], array[i]];
  }
}

