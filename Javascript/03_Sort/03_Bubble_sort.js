let sort = [64, 34, 25, 12, 22, 11, 90, 5];

function bubbleSort(array) {
  // compare two values, moves higher further
  let swapped;
  let n = array.length;
  for (let i = 0; i < n - 1; i++) {
    swapped = false;
    for (let j = 0; j < n - i - 1 ; j++) {
      if (array[j] > array[j+1]) {
        [array[j], array[j+1]] = [array[j+1], array[j]];
        swapped = true;
      }
    }
    if (!swapped) break;
  }
}

console.log(bubbleSort(sort));



