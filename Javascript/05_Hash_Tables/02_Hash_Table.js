class HashTable {
    constructor(size = 50) {
        this.size = size; // Size of the hash table
        this.table = new Array(size); // Array to hold hash table entries
    }

    // Hashing function (simple hash function using modulo)
    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i)) % this.size;
        }
        return hash;
    }

    // Insert a key-value pair into the hash table
    insert(key, value) {
        const index = this.hash(key);
        if (!this.table[index]) {
            this.table[index] = []; // Initialize the bucket if it is empty
        }
        // Check if the key already exists in the bucket (to handle collisions)
        for (let i = 0; i < this.table[index].length; i++) {
            if (this.table[index][i][0] === key) {
                this.table[index][i][1] = value; // Update the value if the key already exists
                return;
            }
        }
        // If key doesn't exist, push the new key-value pair to the bucket
        this.table[index].push([key, value]);
    }

    // Search for a value by key in the hash table
    search(key) {
        const index = this.hash(key);
        const bucket = this.table[index];
        if (bucket) {
            for (let i = 0; i < bucket.length; i++) {
                if (bucket[i][0] === key) {
                    return bucket[i][1]; // Return the value if the key is found
                }
            }
        }
        return undefined; // Return undefined if the key is not found
    }

    // Delete a key-value pair from the hash table
    delete(key) {
        const index = this.hash(key);
        const bucket = this.table[index];
        if (bucket) {
            for (let i = 0; i < bucket.length; i++) {
                if (bucket[i][0] === key) {
                    bucket.splice(i, 1); // Remove the key-value pair from the bucket
                    return true; // Return true if deleted
                }
            }
        }
        return false; // Return false if the key was not found
    }

    // Display the hash table for debugging purposes
    display() {
        console.log(this.table);
    }
}

