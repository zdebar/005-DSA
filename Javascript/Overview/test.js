
// Reverse dictionary
function reverseDict(myDict) {
  const reversedDict = {}
  for (let key in myDict) {
    reversedDict[myDict[key]] = key;
  }
  return reversedDict;
}

const myDict2 = { a: 1, b: 2, c: 3 };
console.log(reverseDict(myDict2)); 

