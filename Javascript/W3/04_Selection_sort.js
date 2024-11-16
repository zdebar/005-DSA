let myArray = [64, 34, 25, 12, 22, 11, 90, 5];

function selectionSort(array) {
  // Select lowest, moves to front
  let arr = [...array];
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr
}

console.log(selectionSort(myArray));