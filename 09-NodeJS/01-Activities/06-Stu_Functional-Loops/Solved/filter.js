// filter.js — Solved

const originalArray = [1, 3, 2, 5, 10];

console.log("Original array:", originalArray);

// ------------------------------------------------------------
// 1. Filter even numbers
// ------------------------------------------------------------

const evenNumbers = originalArray.filter(num => num % 2 === 0);

console.log("\nEven numbers:");
console.log(evenNumbers);

// ------------------------------------------------------------
// 2. Filter prime numbers with a clean helper function
// ------------------------------------------------------------

const isPrime = num => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const primeArray = originalArray.filter(isPrime);

console.log("\nPrime numbers:");
console.log(primeArray);

// ------------------------------------------------------------
// 3. Filter numbers greater than 5
// ------------------------------------------------------------

const overFive = originalArray.filter(num => num > 5);

console.log("\nNumbers greater than 5:");
console.log(overFive);

// ------------------------------------------------------------
// Summary (optional for demo)
// ------------------------------------------------------------

console.log("\nFinal Results:");
console.log({ evenNumbers, primeArray, overFive });
