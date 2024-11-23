function gcd(a, b) {
  while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
  }
  return Math.abs(a); // Ensure the GCD is always positive
}

// Example usage:
const num1 = 56;
const num2 = 98;
console.log(`The GCD of ${num1} and ${num2} is: ${gcd(num1, num2)}`);
