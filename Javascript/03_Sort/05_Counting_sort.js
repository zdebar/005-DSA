function countingSort(array) {
    // counting array
    let max = Math.max(...array);
    let count = new Array(max + 1).fill(0);

    for (let num of array) {
        count[num]++;
    }

    let index = 0;
    for (let i = 0; i < count.length; i++) {
        while (count[i] > 0) {
            array[index++] = i;
            count[i]--;
        }
    }

    return array;
}  

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
