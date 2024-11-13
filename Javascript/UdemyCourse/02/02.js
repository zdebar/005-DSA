const array = [1, 2, 3, 4, 5];

console.log("######  Constant time complexity  #######");
console.log(array[0]);

console.log("######  Linear time complexity  #######");
array.forEach(element => console.log(element));

console.log("######  Logarithmic time complexity  #######");
for (let index = 0; index < array.length; index += 3) {
    console.log(array[index]);
}

console.log("######  Quadratic time complexity  #######");
array.forEach(x => {
    array.forEach(y => {
        console.log(x, y);
    });
});

console.log("######  Exponential time complexity  #######");
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("######  Add vs Multiply #######");
const arrayA = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrayB = [11, 12, 13, 14, 15, 16, 17, 18, 19];

arrayA.forEach(a => console.log(a));
arrayB.forEach(b => console.log(b));

arrayA.forEach(a => {
    arrayB.forEach(b => {
        console.log(a, b);
    });
});

console.log("######  Iterative algorithm - finding the biggest number in the array #######");
const sample1Array = [1, 10, 45, 33, 23, 45, 67, 2, 3, 33, 55, 11, 65, 76, 34, 35, 27, 99];

function findBiggestNumber(sampleArray) {
    let biggestNumber = sampleArray[0];
    for (let index = 1; index < sampleArray.length; index++) {
        if (sampleArray[index] > biggestNumber) {
            biggestNumber = sampleArray[index];
        }
    }
    console.log(biggestNumber);
}

findBiggestNumber(sample1Array);

console.log("######  Recursive algorithm - finding the biggest number in the array #######");
function findMaxNumRec(sampleArray, n) {
    if (n === 1) return sampleArray[0];
    return Math.max(sampleArray[n - 1], findMaxNumRec(sampleArray, n - 1));
}

console.log(findMaxNumRec(sample1Array, sample1Array.length));

console.log("######  Recursive algorithm multiple calls #######");
function f(n) {
    if (n <= 1) return 1;
    return f(n - 1) + f(n - 1);
}

console.log(f(3));

console.log("######  Quiz Questions #######");

function f1(n) {
    if (n <= 0) return 1;
    else return 1 + f1(n - 1);
}

function f2(n) {
    if (n <= 0) return 1;
    else return 1 + f2(n - 5);
}

function f3(n) {
    if (n <= 0) return 1;
    else return 1 + f3(n / 5);
}

function f4(n, m, o) {
    if (n <= 0) {
        console.log(n, m, o);
    } else {
        f4(n - 1, m + 1, o);
        f4(n - 1, m, o + 1);
    }
}

function f5(n) {
    for (let i = 0; i < n; i += 2) {
        console.log(i);
    }
    if (n <= 0) return 1;
    else return 1 + f5(n - 5);
}
