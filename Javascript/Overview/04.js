// Accessing/Traversing the list ----- OK
let shoppingList = ['Milk', 'Cheese', 'Butter'];

for (let i = 0; i < shoppingList.length; i++) {
    shoppingList[i] = shoppingList[i] + "+";
    // console.log(shoppingList[i]);
}

let empty = [];
for (let i of empty) {
    console.log("I am empty");
}


// Update/Insert - List ----- OK
let myList = [1, 2, 3, 4, 5, 6, 7];
console.log(myList);
myList.splice(4, 0, 15);  // Insert 15 at index 4

myList.push(55);  // Append 55

let newList = [11, 12, 13, 14];
myList = myList.concat(newList);  // Extend myList with newList
console.log(myList);


// Searching for an element in the List ----- OK
myList = [10, 20, 30, 40, 50, 60, 70, 80, 90];

function searchInList(list, value) {
    let index = list.indexOf(value);
    return index !== -1 ? index : 'The value does not exist in the list';
}

console.log(searchInList(myList, 100));


// List operations / functions ----- OK
let total = 0;
let count = 0;

while (true) {
    let inp = prompt('Enter a number:');
    if (inp.toLowerCase() === 'done') break;
    let value = parseFloat(inp);
    total += value;
    count += 1;
    let average = total / count;
    console.log('Average:', average);
}


// Alternative approach with a list ----- OK
let numList = [];

while (true) {
    let inp = prompt('Enter a number:');
    if (inp.toLowerCase() === 'done') break;
    let value = parseFloat(inp);
    numList.push(value);
}

let average = numList.reduce((a, b) => a + b, 0) / numList.length;
console.log('Average:', average);
