// Count word frequency
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