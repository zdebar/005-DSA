const myHashSet = [null, 'Jones', null, 'Lisa', null, 'Bob', null, 'Siri', 'Pete', null];

function hashFunction(value) {
    let sumOfChars = 0;
    for (let char of value) {
        sumOfChars += char.charCodeAt(0);
    }
    return sumOfChars % 10;
}

function contains(name) {
    const index = hashFunction(name);
    return myHashSet[index] === name;
}

console.log("'Pete' is in the Hash Set:", contains('Pete'));




