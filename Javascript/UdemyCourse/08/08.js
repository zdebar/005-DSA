// Update / add an element to the dictionary (JavaScript object) ----- OK
const myDict = { name: 'Edy', age: 26 };
myDict['address'] = 'London';
console.log(myDict);

// Traverse through a dictionary ----- OK
function traverseDict(dict) {
    for (let key in dict) {
        console.log(key, dict[key]);
    }
}

traverseDict(myDict);

// Searching a dictionary ----- OK
function searchDict(dict, value) {
    for (let key in dict) {
        if (dict[key] === value) {
            return { key, value };
        }
    }
    return 'The value does not exist';
}

console.log(searchDict(myDict, 27));

// Delete or remove a dictionary entry ----- OK
delete myDict['name'];
console.log(myDict);

// Sorted method by key length ----- OK
const anotherDict = { eooooa: 1, aas: 2, udd: 3, sseo: 4, werwi: 5 };
const sortedKeys = Object.keys(anotherDict).sort((a, b) => a.length - b.length);
console.log(sortedKeys);
