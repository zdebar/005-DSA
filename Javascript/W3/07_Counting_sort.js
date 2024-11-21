let myArray = [64, 34, 25, 12, 22, 11, 90, 5];

function countingSort(array) {
  // Sorts an array by counting the number of times each value occurs
  // O(n + k) - runs fast when k is smaller then number of values of n, k - range of values, n - size of array
  let max = Math.max(...array);
  let min = Math.min(...array);
  let count = new Array(max - min + 1).fill(0);
  
  for (let i = 0; i < array.length; i++) {
      count[array[i] - min]++;
  }

  let sortedArray = [];
  for (let i = 0; i < count.length; i++) {
      for (let j = 0; j < count[i]; j++) { 
          sortedArray.push(i + min);
      }
  }

  return sortedArray;
}

console.log("Sorted array:", countingSort(myArray));
