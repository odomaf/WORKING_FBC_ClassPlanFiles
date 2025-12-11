// Unsolved Version — Implementing process.argv

// ------------------------------------------------------------
// 1. TODO: Log the full argv array so you can see what it contains.
// ------------------------------------------------------------
console.log("Full argv array: ", process.argv);

// ------------------------------------------------------------
// 2. TODO: Pull two arguments from the command line.
//    Example usage:
//      node index.js hello world
//
//    Store them in variables named a and b.
// ------------------------------------------------------------

const a = process.argv[2];
const b = process.argv[3];
console.log("a: ", a);
console.log("b: ", b);
// ------------------------------------------------------------
// 3. TODO: Compare the two values.
//    Print true if they match, false if they do not.
//    You may use any of the following:
//      • if/else
//      • ternary operator
//      • direct comparison inside console.log
//
//    Choose at least ONE method.
// ------------------------------------------------------------

let match = false;

a == b ? (match = true) : (match = false);
console.log("A and B match? ", match);

// ------------------------------------------------------------
// 4. BONUS:
//    Try comparing them multiple ways, such as:
//      console.log(a === b)
//      console.log(a == b)
//    Then research the difference.
// ------------------------------------------------------------
console.log("three = comes out: ", a === b);
console.log("two = comes out: ", a == b);