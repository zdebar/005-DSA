let myArray = [64, 34, 25, 12, 22, 11, 90, 5];

function quickSort(array) {
  /*Chooses one of the values as the 'pivot' element, and moves the other values so that lower values 
  are on the left of the pivot element, and higher values are on the right of it. */
  if (array.length <= 1) {
    return array;
  }

  let pivot = array[array.length - 1];  
  let left = [], right = [];  

  for (let i = 0; i < array.length - 1; i++) {
      if (array[i] < pivot) {
          left.push(array[i]); 
      } else {
          right.push(array[i]);
      }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}


console.log("Sorted array:", quickSort(myArray));