myArray = [7, 12, 9, 4, 11]
minVal = myArray[0]

for (let i of myArray) {
  if (i < minVal) {
    minVal = i;
  }
}

console.log(minVal);