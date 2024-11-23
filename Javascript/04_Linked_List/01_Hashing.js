function mod(number, cellNumber) {
  return number % cellNumber;
}

// console.log(mod(400, 24));

function modASCII(string, cellNumber) {
  let total = 0;
  for (let i = 0; i < string.length; i++) {
      total += string.charCodeAt(i);
  }
  return total % cellNumber;
}

console.log(modASCII("ABC", 24));  // Output: 6
