let myArray = [64, 34, 25, 12, 22, 11, 90, 5];

function bubbleSort(arr) {
  let sortedArray = [...arr];
  let n = sortedArray.lenght;
  for (let i = 0; i < n - i; i++ ) {
    swapped = false;
    for (let j = 0; j < n - i -1; j++) {
      if (sortedArray[j] > sortedArray[j + 1]) {
        [sortedArray[j], sortedArray[j+1]] =  [sortedArray[j+1], sortedArray[j]];
        swapped = true;
      } 
    }
    if (!swapped) break;
  }
  return sortedArray;
}

console.log(bubbleSort(myArray));
  
