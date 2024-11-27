class SimpleHashSet {
  constructor(size = 100) {
    this.size = size;
    this.buckets = Array.from({ length: size }, () => []); // Array of buckets, each bucket is a list (to handle collisions)
  }

  hashFunction(value) {
    // Simple hash function: sum of character codes modulo the number of buckets
    return [...value].reduce((sum, char) => sum + char.charCodeAt(0), 0) % this.size;
  }

  add(value) {
    // Add a value if it's not already present
    const index = this.hashFunction(value);
    const bucket = this.buckets[index];
    if (!bucket.includes(value)) {
      bucket.push(value);
    }
  }

  contains(value) {
    // Check if a value exists in the set
    const index = this.hashFunction(value);
    const bucket = this.buckets[index];
    return bucket.includes(value);
  }

  remove(value) {
    // Remove a value
    const index = this.hashFunction(value);
    const bucket = this.buckets[index];
    const valueIndex = bucket.indexOf(value);
    if (valueIndex !== -1) {
      bucket.splice(valueIndex, 1);
    }
  }

  printSet() {
    // Print all elements in the hash set
    console.log("Hash Set Contents:");
    this.buckets.forEach((bucket, index) => {
      console.log(`Bucket ${index}: ${JSON.stringify(bucket)}`);
    });
  }
}
