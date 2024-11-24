function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

function factorialTabulation(n) {
  let factorials =  [1]
  for (let i = 1; i <= n; i++) {
    factorials[i] = factorials[i - 1] * i;
  }
  return factorials[n];
}

function factorialRecursive(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorialRecursive(n - 1);
}

function factorialRecursiveMemo(n, memo = []) {
  if (n === 0 || n === 1) return 1;
  if (n in memo) return memo[n];
  memo[n] = n * factorialRecursiveMemo(n - 1, memo);
  return memo[n]
}

function factorialTailRecursive(n, accumulator = 1) {
  if (n === 0 || n === 1) return accumulator;
  return factorialTailRecursive(n - 1, n * accumulator); // Recursive call is the last operation
}