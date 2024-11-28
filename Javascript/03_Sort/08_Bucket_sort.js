function bucketSort(arr) {
  if (arr.length === 0) return arr;

  // 1. Create empty buckets
  const bucketCount = Math.ceil(Math.sqrt(arr.length)); // Number of buckets
  const buckets = Array.from({ length: bucketCount }, () => []);

  // 2. Place array elements in corresponding buckets
  for (let num of arr) {
    const bucketIndex = Math.floor(num * bucketCount); // Determine bucket index
    buckets[bucketIndex].push(num);
  }

  // 3. Sort each bucket and concatenate results
  return buckets.reduce((sortedArray, bucket) => {
    return sortedArray.concat(bucket.sort((a, b) => a - b)); // Use JavaScript's built-in sort for simplicity
  }, []);
}