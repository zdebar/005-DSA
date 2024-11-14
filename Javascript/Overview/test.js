const arrayA = [1, 2, 3, 4, 5];

// Question 6 REVERSE ARRAY ----- OK
function reverse(array) {
  newArray = [...array]
  for (let i = 0; i < array.length/2; i++) {
    [newArray[i], newArray[-1-i]] = [newArray[-1-i], newArray[i]]
  }  
  return newArray
}

console.log(reverse(arrayA));