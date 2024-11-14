// Remove duplicates ---- OK
function removeDuplicates(lst) {
  return Array.from(new Set(lst))
}

const myListDuplicates = [1, 1, 2, 2, 3, 4, 5];
console.log(removeDuplicates(myListDuplicates));  // Output: [1, 2, 3, 4, 5]