// Question 1 PRODUCT AND SUM ----- OK
function foo(array) {
    let sum = 0;
    let product = 1;
    for (let i of array) {
        sum += i;
        product *= i;
    }
    console.log("Sum = " + sum + ", Product = " + product);
}

const ar1 = [1, 2, 3, 4];
foo(ar1);

// Question 2 PRINT PAIRS ----- OK
function printPairs(array) {
    for (let i of array) {
        for (let j of array) {
            console.log(i + "," + j);
        }
    }
}

// Question 3 PRINT UNORDERED PAIRS ----- OK
function printUnorderedPairs(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            console.log(array[i] + "," + array[j]);
        }
    }
}

// Question 4 PRINT UNORDERED PAIRS 2 ARRAYS ----- OK
function printUnorderedPairs(arrayA, arrayB) {
    for (let i = 0; i < arrayA.length; i++) {
        for (let j = 0; j < arrayB.length; j++) {
            if (arrayA[i] < arrayB[j]) {
                console.log(arrayA[i] + "," + arrayB[j]);
            }
        }
    }
}

const arrayA = [1, 2, 3, 4, 5];
const arrayB = [2, 6, 7, 8];

// Question 5 PRINT UNORDERED PAIRS 2 ARRAYS ----- OK
function printUnorderedPairsWithLoop(arrayA, arrayB) {
    for (let i = 0; i < arrayA.length; i++) {
        for (let j = 0; j < arrayB.length; j++) {
            for (let k = 0; k < 100000; k++) {
                console.log(arrayA[i] + "," + arrayB[j]);
            }
        }
    }
}
// Uncomment to test this function, but be aware of the loop size
// printUnorderedPairsWithLoop(arrayA, arrayB);

// Question 6 REVERSE ARRAY ----- OK
function reverse(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        let other = array.length - i - 1;
        let temp = array[i];
        array[i] = array[other];
        array[other] = temp;
    }
    console.log(array);
}

reverse(arrayA);
