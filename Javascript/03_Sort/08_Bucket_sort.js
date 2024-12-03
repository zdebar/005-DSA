function bucketSort(arr) {
  if (arr.length === 0) return arr;

  // Find the range of the array
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const range = max - min;

  // Number of buckets (based on square root of the array length)
  const bucketCount = Math.ceil(Math.sqrt(arr.length));
  const buckets = Array.from({ length: bucketCount }, () => []);

  // Distribute elements into buckets
  for (let num of arr) {
    const bucketIndex = Math.floor(((num - min) / range) * (bucketCount - 1));
    buckets[bucketIndex].push(num);
  }

  // Sort each bucket and merge them
  return buckets.reduce((sortedArray, bucket) => {
    return sortedArray.concat(insertionSort(bucket));
  }, []);
}
