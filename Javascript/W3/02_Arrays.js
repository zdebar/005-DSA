let myArray = [7, 12, 9, 4, 11];
let minVal = -Infinity;

for (let i of myArray) {
  if (i < minVal) {
    minVal = i;
  }
}

console.log(minVal);

