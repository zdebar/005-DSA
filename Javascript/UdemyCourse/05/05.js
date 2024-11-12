// Missing Number
function missingNumber(arr, n) {
  let total = (n * (n + 1)) / 2;
  let sumArr = arr.reduce((a, b) => a + b, 0);
  return total - sumArr;
}

// Example usage
let myList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];
console.log(missingNumber(myList, 100));

// Find Pairs
function findPairs(nums, target) {
  for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
          if (nums[i] + nums[j] === target) {
              console.log(i, j);
          }
      }
  }
}

// Example usage
findPairs([1, 2, 3, 2, 3, 4, 5, 6], 6);

// LeetCode Two Sum
function twoSum(nums, target) {
  let seen = {};
  for (let i = 0; i < nums.length; i++) {
      let complement = target - nums[i];
      if (complement in seen) {
          return [seen[complement], i];
      }
      seen[nums[i]] = i;
  }
}

// Find a Number
function findNumber(array, number) {
  for (let i = 0; i < array.length; i++) {
      if (array[i] === number) {
          console.log(i);
          return i;  // Optional return to indicate found position
      }
  }
}

// Max Product of Two Integers
function maxProduct(arr) {
  let max1 = 0, max2 = 0;
  for (let num of arr) {
      if (num > max1) {
          max2 = max1;
          max1 = num;
      } else if (num > max2) {
          max2 = num;
      }
  }
  return max1 * max2;
}

// Example usage
console.log(maxProduct([1, 7, 3, 4, 9, 5]));

// Middle
function middle(lst) {
  return lst.slice(1, -1);
}

// Example usage
console.log(middle([1, 2, 3, 4]));

// 2D List Diagonal Sum
function diagonalSum(matrix) {
  let total = 0;
  for (let i = 0; i < matrix.length; i++) {
      total += matrix[i][i];
  }
  return total;
}

// Best Score
function firstSecond(myList) {
  let max1 = -Infinity, max2 = -Infinity;
  for (let num of myList) {
      if (num > max1) {
          max2 = max1;
          max1 = num;
      } else if (num > max2 && num !== max1) {
          max2 = num;
      }
  }
  return [max1, max2];
}

// Example usage
console.log(firstSecond([84, 85, 86, 87, 85, 90, 85, 83, 23, 45, 84, 1, 2, 0]));

// Remove Duplicates
function removeDuplicates(lst) {
  let uniqueLst = [];
  let seen = new Set();
  for (let item of lst) {
      if (!seen.has(item)) {
          uniqueLst.push(item);
          seen.add(item);
      }
  }
  return uniqueLst;
}

// Example usage
console.log(removeDuplicates([1, 1, 2, 2, 3, 4, 5]));

// Pair Sum
function pairSum(arr, targetSum) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
          if (arr[i] + arr[j] === targetSum) {
              result.push(`${arr[i]}+${arr[j]}`);
          }
      }
  }
  return result;
}

// Example usage
console.log(pairSum([2, 4, 3, 5, 6, -2, 4, 7, 8, 9], 7));

// Contains Duplicate
function containsDuplicate(nums) {
  let seen = new Set();
  for (let num of nums) {
      if (seen.has(num)) {
          return true;
      }
      seen.add(num);
  }
  return false;
}

// Example usage
console.log(containsDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 1]));

// Permutation
function permutation(list1, list2) {
  if (list1.length !== list2.length) return false;
  list1.sort();
  list2.sort();
  return JSON.stringify(list1) === JSON.stringify(list2);
}

// Rotate Matrix
function rotate(matrix) {
  let n = matrix.length;
  for (let i = 0; i < n; i++) {
      for (let j = i; j < n; j++) {
          [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
      }
  }
  matrix.forEach(row => row.reverse());
}

