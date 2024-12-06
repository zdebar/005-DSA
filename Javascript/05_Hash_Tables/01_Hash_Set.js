class HashSet {
  constructor(size = 50) {
    this.size = size; // Size of the hash table
    this.table = new Array(size); // Array to hold the hash set entries
  }

  // Remainder-type Hash Function (modulo operation)
  hash(number, cellNumber) {
    return number % cellNumber;
  }

  // Add a value to the hash set
  add(value) {
    const index = this.hash(value);
    if (!this.table[index]) {
      this.table[index] = new Set(); // Initialize a new Set if it's empty
    }
    this.table[index].add(value); // Add value to the corresponding set at the index
  }

  // Check if the value exists in the hash set
  contains(value) {
    const index = this.hash(value);
    const bucket = this.table[index];
    return bucket ? bucket.has(value) : false; // Return true if value exists
  }

  // Remove a value from the hash set
  remove(value) {
    const index = this.hash(value);
    const bucket = this.table[index];
    if (bucket && bucket.has(value)) {
      bucket.delete(value); // Remove the value from the set
      return true;
    }
    return false; // Return false if value not found
  }

  // Display the hash set for debugging purposes
  display() {
    console.log(this.table);
  }
}

