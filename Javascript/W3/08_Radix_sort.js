let myArray = [64, 34, 25, 12, 22, 11, 90, 5];

function radixSort(array) {
  // O(n.k), k - number of digits in highest value

  let radixArray = Array.from({ length: 10 }, () => []);
  let maxVal = Math.max(...array);
  let exp = 1;

  while (Math.floor(maxVal / exp) > 0) {

      while (array.length > 0) {
          let val = array.pop();
          let radixIndex = Math.floor(val / exp) % 10;
          radixArray[radixIndex].push(val);
      }

      for (let i = 0; i < radixArray.length; i++) {
          while (radixArray[i].length > 0) {
              let val = radixArray[i].pop();
              array.push(val);
          }
      }

      exp *= 10; 
  }

  console.log("Sorted array:", array);
  return array;
}

console.log("Sorted array:", radixSort(myArray));