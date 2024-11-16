function nthFibonnaci(n) {
  if (n <= 2) return 1;
  return nthFibonnaci(n-1) + nthFibonnaci(n-2)
}

function nthFibonnaciMem(n, memo = {}) {
  if (n <= 2) return 1;
  if (memo[n]) return memo[n];
  memo[n] = nthFibonnaciMem(n-1, memo) + nthFibonnaciMem(n-2, memo);
  return memo[n]
}

function nthFibonnaciIter(n) {
  if (n <= 1) return 1;
  let a = 1, b = 1;
  for (let i = 2; i < n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}

console.log(nthFibonnaci(8))
console.log(nthFibonnaciMem(8))
console.log(nthFibonnaciIter(8))