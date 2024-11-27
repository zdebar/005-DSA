class SimpleHashMap {
    constructor(size = 100) {
        this.size = size;
        this.buckets = Array.from({ length: size }, () => []); 
    }

    hashFunction(key) {
        // Sum only the numerical values of the key, ignoring non-numeric characters
        const numericSum = [...key]
            .filter(char => /\d/.test(char)) // Check if the character is a digit
            .reduce((sum, char) => sum + parseInt(char, 10), 0);
        return numericSum % 10;
    }

    put(key, value) {
        // Add or update a key-value pair
        const index = this.hashFunction(key);
        const bucket = this.buckets[index];
        for (let i = 0; i < bucket.length; i++) {
            const [k, v] = bucket[i];
            if (k === key) {
                bucket[i] = [key, value]; // Update existing key
                return;
            }
        }
        bucket.push([key, value]); // Add new key-value pair if not found
    }

    get(key) {
        // Retrieve a value by key
        const index = this.hashFunction(key);
        const bucket = this.buckets[index];
        for (const [k, v] of bucket) {
            if (k === key) {
                return v;
            }
        }
        return null; // Key not found
    }

    remove(key) {
        // Remove a key-value pair
        const index = this.hashFunction(key);
        const bucket = this.buckets[index];
        for (let i = 0; i < bucket.length; i++) {
            const [k, v] = bucket[i];
            if (k === key) {
                bucket.splice(i, 1); // Remove the key-value pair
                return;
            }
        }
    }

    printMap() {
        // Print all key-value pairs in the hash map
        console.log("Hash Map Contents:");
        this.buckets.forEach((bucket, index) => {
            console.log(`Bucket ${index}: ${JSON.stringify(bucket)}`);
        });
    }
}






