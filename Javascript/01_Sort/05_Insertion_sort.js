let myArray = [64, 34, 25, 12, 22, 11, 90, 5];

function insertionSort(array) {
    // select from unsorted, insert lineary into sorted part of array
    let n = array.length;
    for (let i = 1; i < n; i++) {
        let insertIndex = i;
        let currentValue = array[i];
        for (let j = i - 1; j >= 0; j--) {
            if (array[j] > currentValue) {
                insertIndex = j;
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            } else {
                break;
            }
        }
    }
}

console.log("Sorted array:", sort);
