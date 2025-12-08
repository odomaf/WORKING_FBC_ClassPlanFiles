// Solved Version — Implementing process.argv

// ------------------------------------------------------------
// 1. Log the full argv array
// ------------------------------------------------------------

console.log("Full argv:", process.argv);


// ------------------------------------------------------------
// 2. Extract user-provided arguments
// ------------------------------------------------------------

const a = process.argv[2];
const b = process.argv[3];

console.log("\nArgument A:", a);
console.log("Argument B:", b);


// ------------------------------------------------------------
// 3. Compare the values (multiple approaches shown)
// ------------------------------------------------------------

console.log("\nComparison results:");

// Method 1 — if/else
if (a === b) {
  console.log("Match (if/else):", true);
} else {
  console.log("Match (if/else):", false);
}

// Method 2 — ternary operator
console.log("Match (ternary):", a === b ? true : false);

// Method 3 — direct comparison
console.log("Match (direct a === b):", a === b);

// Method 4 — compare directly inside process.argv
console.log("Match (direct argv compare):", process.argv[2] === process.argv[3]);


// ------------------------------------------------------------
// Bonus talking point:
// === compares both value AND type
// == performs type coercion (rarely desirable in Node apps)
// ------------------------------------------------------------
