// map.js — Solution

const originalArray = [1, 3, 2, 5, 10];

console.log("Original array:", originalArray);

// ------------------------------------------------------------
// 1. Double each number
// ------------------------------------------------------------

const doubled = originalArray.map(num => num * 2);

console.log("\nDoubled values:");
console.log(doubled);

// ------------------------------------------------------------
// 2. Triple each number
// ------------------------------------------------------------

const tripled = originalArray.map(num => num * 3);

console.log("\nTripled values:");
console.log(tripled);

// ------------------------------------------------------------
// 3. Create an array describing odd/even status
// ------------------------------------------------------------

const oddOrEven = originalArray.map(num =>
  num % 2 === 0 ? "even" : "odd"
);

console.log("\nOdd/Even labels:");
console.log(oddOrEven);

// ------------------------------------------------------------
// Summary
// ------------------------------------------------------------

console.log("\nFinal Results:");
console.log({ doubled, tripled, oddOrEven });
