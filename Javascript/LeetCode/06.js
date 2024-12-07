// Missing Number 
const myList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];

function missingNumber(lst, n) {
    total = Math.floor (n * (n + 1) / 2);
    sum = lst.reduce((a, b) => a + b, 0);
    return total - sum;
}

// Find Pairs - LeetCode Two Sum
function findPairs(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                continue;
            }
            if (nums[i] + nums[j] === target) {
                console.log(nums[i], nums[j]);
            }
        }
    }
}

// Find a number ---- OK
function findNumber(array, number) {
    array.forEach((item, index) => {
        if (item === number) console.log(index);
    });
}

function findNumber2(array, number) {
    return array.indexOf(number)
}

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

// Middle ---- OK
function middle(lst) {
    return lst.slice(1, -1);
}

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

// Contains Duplicate ---- OK
function containsDuplicate(nums) {
    const seen = new Set();
    for (let num of nums) {
        if (seen.has(num)) return true;
        seen.add(num);
    }
    return false;
}

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
