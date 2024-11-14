// How to create a Tuple (using arrays since JavaScript does not have tuples)

const newTuple = ['a', 'b', 'c', 'd', 'e'];
const newTuple1 = Array.from('abcde'); // Creates an array of characters

console.log(newTuple1);

// Access Tuple elements
console.log(newTuple[0]);

// Traverse through tuple
for (let i of newTuple) {
    console.log(i);
}

for (let index = 0; index < newTuple.length; index++) {
    console.log(newTuple[index]);
}

// How to search for an element in Tuple
console.log(newTuple.includes('a'));

function searchInTuple(pTuple, element) {
    for (let i of pTuple) {
        if (i === element) {
            return pTuple.indexOf(i);
        }
    }
    return 'The element does not exist';
}

console.log(searchInTuple(newTuple, 'a'));

// Tuple Operations / Functions
const myTuple = [1, 4, 3, 2, 5];
const myTuple1 = [1, 2, 6, 9, 8, 7];

console.log(myTuple.concat(myTuple1)); // Concatenation
console.log(Array(4).fill(myTuple).flat()); // Repeating the array 4 times
console.log(myTuple1.includes(2)); // Checking if 2 is in myTuple1

console.log(myTuple1.filter(x => x === 2).length); // Counting occurrences of 2
console.log(myTuple1.indexOf(2)); // Finding the index of 2
