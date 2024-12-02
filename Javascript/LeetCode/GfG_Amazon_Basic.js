// Reverse a string
function reverseString(str) {
  return str.split('').reverse().join('');
}


// Sum highest and lowest value
function findSum(arr) {
  if (arr.length === 0) return null;

  let max = arr[0], min = arr[0];
  for (let value of arr) {
    if (value > max) {
      max = value;
    } else if (value < min) {
      min = value;
    }
  }

  return max + min;
}


// Return first unique item of array
function findFirstUnique(arr) {
  const countMap = new Map();

  // Count occurrences
  for (const item of arr) {
    countMap.set(item, (countMap.get(item) || 0) + 1);
  }

  // Iterate through the Map to find the first unique element
  for (const [key, count] of countMap) {
    if (count === 1) {
      return key;
    }
  }

  return null;
}


// Function to find elements in the array that are equal to their index
function valueEqualToIndex(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === i) {
      result.push(i);
    }
  }
  return result;
}


// Function to locate the occurrence of the string x in the string s.
firstOccurence(txt, pat) {
  if (typeof txt !== 'string' || typeof pat !== 'string' || txt === '' || pat === '') {
  return -1;
  }
  for (let i = 0; i <= txt.length - pat.length; i++) {
    if (pat[0] === txt[i]) {
      let found = true;
      for (let j = 1; j < pat.length; j++) {
        if (txt[i + j] !== pat[j]) {
          found = false;
          break;
        }
      }
    if (found) return i;
    }
  }
  return -1;
}
 

// For each element in the array, check whether the right adjacent element (on the next immediate position) of the array is smaller. If next element is smaller, update the current index to that element. If not, then update to -1.
function immediateSmaller(arr) {
  if (arr.length === 0) return arr;
  
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      arr[i] = arr[i + 1]
    } else {
      arr[i] = -1;
    }
  }
  
  arr[arr.length - 1] = -1;
  return arr;
}


// find first and second smallest
function minAnd2ndMin(arr) {
  if (arr.length <= 1) return [-1];
  
  let first = Infinity, second = Infinity;
  
  for (const value of arr) {
      if (value < first) {
          second = first;
          first = value;
      } else if (value < second && value !== first) {
          second = value;
      }
  }
  
  return (second === Infinity) ? [-1] : [first, second];
}


// convert all 0 to 5 in integer
function convertFive(num) {
  return +num.toString().replace(/0/g, '5');
}


// remove characters of string s2 from sting s1
function removeChars(s1, s2){
  const charSet = new Set(s2.split(""));  
  return s1.split("").filter(char => !charSet.has(char)).join("");
}


// find uncommon characters in two strings
function UncommonChars(A, B) {
  const setA = new Set(A), setB = new Set(B);
  const uncommon = [...setA].filter(x => !setB.has(x)).concat([...setB].filter(x => !setA.has(x))).sort();
  return uncommon.length === 0 ? -1 : uncommon.join("");
}


// checks if all number in range A, B are present in array arr
function check_elements(arr, n, A, B) {
  const numberSet = new Set();

  for (let i = A; i <= B; i++) {
    numberSet.add(i);
  }

  for (const num of arr) {
      if (numberSet.has(num)) numberSet.delete(num);
      if (numberSet.size === 0) return true;
  }

  return false;
}


// find odd occurence (only number appearing odd times)
function getOddOccurrence(arr) {
  let result = 0;
  for (const num of arr) {
    result = num; // XOR each number
  }
  return result;
}

