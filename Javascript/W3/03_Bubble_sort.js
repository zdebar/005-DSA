let myArray = [64, 34, 25, 12, 22, 11, 90, 5];

function bubbleSort(arr) {
  let swapped;
  let n = arr.length;
  let sort = [...arr];
  for (let i = 0; i < n - 1; i++) {
    swapped = false;
    for (let j = 0; j < n - i - 1 ; j++) {
      if (sort[j] > sort[j+1]) {
        [sort[j], sort[j+1]] = [sort[j+1], sort[j]];
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return sort;
}

console.log(bubbleSort(myArray));