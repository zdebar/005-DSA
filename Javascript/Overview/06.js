// Missing Number ---- OK
const myList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];

function missingNumber(arr, n) {
    let total = (n * (n + 1)) / 2;
    let sumArr = arr.reduce((a, b) => a + b, 0);
    return total - sumArr;
}

// Find Pairs - LeetCode Two Sum ---- OK
function findPairs(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) continue;
            if (nums[i] + nums[j] === target) console.log(i, j);
        }
    }
}

const myListPairs = [1, 2, 3, 2, 3, 4, 5, 6];
findPairs(myListPairs, 6);

function twoSum(nums, target) {
    const seen = {};
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (seen.hasOwnProperty(complement)) {
            return [seen[complement], i];
        }
        seen[nums[i]] = i;
    }
}

// Find a number ---- OK
function findNumber(array, number) {
    array.forEach((item, index) => {
        if (item === number) console.log(index);
    });
}

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Find max product of two integers ---- OK
function maxProduct(arr) {
    let max1 = 0, max2 = 0;
    arr.forEach(num => {
        if (num > max1) {
            max2 = max1;
            max1 = num;
        } else if (num > max2) {
            max2 = num;
        }
    });
    return max1 * max2;
}

const arrProduct = [1, 7, 3, 4, 9, 5];
console.log(maxProduct(arrProduct));  // Output: 63

// Middle ---- OK
function middle(lst) {
    return lst.slice(1, -1);
}

const myListMiddle = [1, 2, 3, 4];
console.log(middle(myListMiddle));  // Output: [2, 3]

// Diagonal sum of 2D List ---- OK
function diagonalSum(matrix) {
    let total = 0;
    for (let i = 0; i < matrix.length; i++) {
        total += matrix[i][i];
    }
    return total;
}

// Best Score - First and Second highest ---- OK
function firstSecond(myList) {
    let max1 = -Infinity, max2 = -Infinity;
    myList.forEach(num => {
        if (num > max1) {
            max2 = max1;
            max1 = num;
        } else if (num > max2 && num !== max1) {
            max2 = num;
        }
    });
    return [max1, max2];
}

const myListBestScore = [84, 85, 86, 87, 85, 90, 85, 83, 23, 45, 84, 1, 2, 0];
console.log(firstSecond(myListBestScore));  // Output: [90, 87]

// Remove duplicates ---- OK
function removeDuplicates(lst) {
    const uniqueLst = [];
    const seen = new Set();
    lst.forEach(item => {
        if (!seen.has(item)) {
            uniqueLst.push(item);
            seen.add(item);
        }
    });
    return uniqueLst;
}

const myListDuplicates = [1, 1, 2, 2, 3, 4, 5];
console.log(removeDuplicates(myListDuplicates));  // Output: [1, 2, 3, 4, 5]

// Pairs that sum to target ---- OK
function pairSum(arr, targetSum) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === targetSum) {
                result.push(`${arr[i]}+${arr[j]}`);
            }
        }
    }
    return result;
}

const arrPairSum = [2, 4, 3, 5, 6, -2, 4, 7, 8, 9];
const targetSum = 7;
console.log(pairSum(arrPairSum, targetSum));  // Output: ['2+5', '4+3', '3+4', '-2+9']

// Contains Duplicate ---- OK
function containsDuplicate(nums) {
    const seen = new Set();
    for (let num of nums) {
        if (seen.has(num)) return true;
        seen.add(num);
    }
    return false;
}

const numsDuplicate = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1];
console.log(containsDuplicate(numsDuplicate));  // Output: true

// Check if two lists are permutations ---- OK
function permutation(list1, list2) {
    if (list1.length !== list2.length) return false;
    list1.sort();
    list2.sort();
    return JSON.stringify(list1) === JSON.stringify(list2);
}

// Rotate Matrix (90 degrees clockwise) ---- OK
function rotate(matrix) {
    const n = matrix.length;
    // Transpose the matrix
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    // Reverse each row
    matrix.forEach(row => row.reverse());
}
