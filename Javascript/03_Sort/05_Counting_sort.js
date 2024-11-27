function countingSort(array) {
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