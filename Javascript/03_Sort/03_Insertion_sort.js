function insertionSort(arr) {
    // selects next, lineary sort to sorted part at the beginnig of array
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        let currentValue = arr[i]; // Value to insert
        let j = i - 1;
        
        // Shift larger elements to the right
        while (j >= 0 && arr[j] > currentValue) {
            arr[j + 1] = arr[j];
            j--;
        }
        
        // Insert the value into the correct position
        arr[j + 1] = currentValue;
    }
}


