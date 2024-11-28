function radixSort(arr) {
  if (arr.length === 0) return arr;

  const getMax = (nums) => Math.max(...nums);

  const getDigit = (num, place) => {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
  };

  const digitCount = (num) => {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
  };

  const maxDigits = digitCount(getMax(arr));

  for (let k = 0; k < maxDigits; k++) {
    const buckets = Array.from({ length: 10 }, () => []);

    for (let num of arr) {
      const digit = getDigit(num, k);
      buckets[digit].push(num);
    }

    arr = [].concat(...buckets);
  }

  return arr;
}


  
  