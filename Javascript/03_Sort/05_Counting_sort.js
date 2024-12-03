function countingSort2(array) {
    // counting object
    let count = {};

    for (const num of array) {
        count[num] = (count[num] || 0) + 1;
    }

    let index = 0;
    for (const num in count) {
        while (count[num]-- > 0) {
            array[index++] = Number(num);
        }        
    }
}
