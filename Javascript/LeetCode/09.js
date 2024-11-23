// Count word frequency
words = ['apple', 'orange', 'banana', 'apple', 'orange', 'apple'] 
console.log(countWordFrequency(words))

function countWordFrequency(words) {
  const wordCount = {};
  for (let word of words) {
    wordCount[word] = (wordCount[word] || 0) + 1;
  }
  return wordCount;
}


// Common keys
function mergeDicts(dict1, dict2) {
  const result = { ...dict1 }; 
  for (let [key, value] of Object.entries(dict2)) {
    result[key] = (result[key] || 0) + value; 
  }
  return result;
}

const dict1 = { a: 1, b: 2, c: 3 };
const dict2 = { b: 3, c: 4, d: 5 };
console.log(mergeDicts(dict1, dict2)); 


// Keys with highest values
function maxValueKey(myDict) {
  let maxKey = null;
  let maxValue = -Infinity;

  for (let [key, value] of Object.entries(myDict)) {
    if (value > maxValue) {
      maxValue = value;
      maxKey = key;
    }
  }

  return maxKey;
}
const myDict = { a: 10, b: 20, c: 5 };
console.log(maxValueKey(myDict)); // Output: 'b'


// Reverse dictionary
function reverseDict(myDict) {
  return Object.entries(myDict).reduce((reversedDict, [key, value]) => {
    reversedDict[value] = key; 
    return reversedDict;
  }, {});
}

// Reverse dictionary MY VARIANT
function reverseDict(myDict) {
  const reversedDict = {}
  for (let key in myDict) {
    reversedDict[myDict[key]] = key;
  }
  return reversedDict;
}

const myDict2 = { a: 1, b: 2, c: 3 };
console.log(reverseDict(myDict2)); 


// Conditional filter
function filterDict(myDict, condition) {
  const filteredObj = {};
  for (const key in myDict) {
    if (condition(key, myDict[key])) {
      filteredObj[key] = myDict[key];
    }
  }
  return filteredObj;
}

const myDict3 = { a: 10, b: 20, c: 5 };
const condition = (key, value) => value > 10;
console.log(filterDict(myDict3, condition)); 



// Check same frequency
function checkSameFrequency(list1, list2) {
  function countElements(lst) {
    const counter = {};
    for (let element of lst) {
      counter[element] = (counter[element] || 0) + 1;
    }
    return counter;
  }

  const count1 = countElements(list1);
  const count2 = countElements(list2);
  return JSON.stringify(count1) === JSON.stringify(count2);
}

const list1 = [1, 2, 3, 2, 1];
const list2 = [1, 2, 2, 3, 1];
console.log(checkSameFrequency(list1, list2));