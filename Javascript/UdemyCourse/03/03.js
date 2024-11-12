// 1. Create an array and traverse
let myArray = [1, 2, 3, 4, 5];

console.log("Step 1");
myArray.forEach(item => console.log(item));

// 2. Access individual elements through indexes
console.log("Step 2");
console.log(myArray[3]);

// 3. Append any value to the array using push() method
console.log("Step 3");
myArray.push(6);
console.log(myArray);

// 4. Insert value in an array using splice() method
console.log("Step 4");
myArray.splice(3, 0, 11); // Inserts 11 at index 3
console.log(myArray);

// 5. Extend JavaScript array using concat() method
console.log("Step 5");
let myArray1 = [10, 11, 12];
myArray = myArray.concat(myArray1);
console.log(myArray);

// 6. Add items from list into array using push and spread operator
console.log("Step 6");
let tempList = [20, 21, 22];
myArray.push(...tempList);
console.log(myArray);

// 7. Remove any array element using filter() method
console.log("Step 7");
myArray = myArray.filter(item => item !== 11); // Removes first occurrence of 11
console.log(myArray);

// 8. Remove last array element using pop() method
console.log("Step 8");
myArray.pop();
console.log(myArray);

// 9. Fetch any element through its index using indexOf() method
console.log("Step 9");
console.log(myArray.indexOf(21));

// 10. Reverse a JavaScript array using reverse() method
console.log("Step 10");
myArray.reverse();
console.log(myArray);

// 11. Get array length as a substitute for buffer information
console.log("Step 11");
console.log("Array length:", myArray.length);

// 12. Check for number of occurrences of an element using filter and length
console.log("Step 12");
myArray.push(11);
console.log(myArray.filter(item => item === 11).length);
console.log(myArray);

// 13. Convert array to string using join() method
console.log("Step 13");
let strTemp = myArray.join(",");
console.log(strTemp);

// 14. Convert array to a list (array) with the same elements
console.log("Step 14");
let arrayList = Array.from(myArray); // Creates a new array with the same elements
console.log(arrayList);

// 15. Append a string to an array of characters (string to array)
console.log("Step 15");
let charArray = ['a', 'b', 'c'];
charArray.push(...'def'); // Spreads the string into individual characters
console.log(charArray);

// 16. Slice elements from an array
console.log("Step 16");
console.log(myArray.slice(0, myArray.length));
