function radixSort(arr) {
  const maxVal = Math.max(...arr); 
  let exp = 1; 
  const radixArray = Array.from({ length: 10 }, () => []);

  while (Math.floor(maxVal / exp) > 0) {
    while (arr.length > 0) {
      const value = arr.pop();
      const radixIndex = Math.floor(value / exp) % 10;
      radixArray[radixIndex].push(value);
    }

    for (const bucket of radixArray) {
      while (bucket.length > 0) {
        arr.push(bucket.pop());
      }
    }

    exp *= 10; 
  }

  return arr;
} 