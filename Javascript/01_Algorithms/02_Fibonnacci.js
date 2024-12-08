function nthFibonnaciRecursive(n) {
  if (n <= 2) return 1;
  return nthFibonnaciRecursive(n-1) + nthFibonnaciRecursive(n-2)
}

function nthFibonnaciMem(n, memo = {}) {
  if (n <= 2) return 1;
  if (memo[n]) return memo[n];
  memo[n] = nthFibonnaciMem(n-1, memo) + nthFibonnaciMem(n-2, memo);
  return memo[n]
}

function nthFibonacciMemArr(n, memo = []) {
  if (n <= 2) return 1;
  if (memo[n] !== undefined) return memo[n];
  memo[n] = nthFibonacciMemArr(n - 1, memo) + nthFibonacciMemArr(n - 2, memo);
  return memo[n];
}

function nthFibonacciTailRecursive(n, a = 1, b = 1) {
  if (n <= 1) return a; 
  return nthFibonacciTailRecursive(n - 1, b, a + b); 
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
console.log(nthFibonacciMemArr(8))
console.log(nthFibonnaciIter(8))