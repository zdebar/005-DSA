function countingSort2(array) {
    // counting object
    let max = Math.max(...array);
    let count = {};

    for (let num of array) {
        count[num] = (count[num] || 0) + 1;
    }

    let index = 0;
    for (let num in count) {
        while (count[num]-- > 0) {
            array[index++] = Number(num);
        }        
    }

    return array;
}
