function radixSort(array) {
    let radixArray = new Array(10).fill().map(() => []);
    let maxVal = Math.max(...array);
    let exp = 1;
  
    while (Math.floor(maxVal / exp) > 0) {
      // Distribute elements into buckets based on current digit
      while (array.length > 0) {
        let val = array.pop();
        let radixIndex = Math.floor(val / exp) % 10;
        radixArray[radixIndex].push(val);
      }
  
      // Collect elements from the buckets back into the array
      for (let bucket of radixArray) {
        while (bucket.length > 0) {
          let val = bucket.pop();
          array.push(val);
        }
      }
  
      // Move to the next digit
      exp *= 10;
    }
  
    return array;
  }
  
  