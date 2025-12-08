// Modernized Instructor Solution — Modular CLI Calculator

const basicmath = require("./basicmath");

// Operation comes from command-line input.
// Example usage:
//   node index.js sum 5 10
//   node index.js product 7 4

const operation = process.argv[2];
const numOne = Number(process.argv[3]);
const numTwo = Number(process.argv[4]);

// Validate numeric input
if (Number.isNaN(numOne) || Number.isNaN(numTwo)) {
  console.log("Both values must be valid numbers.");
  process.exit(1);
}

switch (operation) {
  case "sum":
    console.log(basicmath.sum(numOne, numTwo));
    break;

  case "difference":
    console.log(basicmath.difference(numOne, numTwo));
    break;

  case "product":
    console.log(basicmath.product(numOne, numTwo));
    break;

  case "quotient":
    if (numTwo === 0) {
      console.log("Cannot divide by zero!");
      break;
    }
    console.log(basicmath.quotient(numOne, numTwo));
    break;

  default:
    console.log("Invalid operation! Use one of:");
    console.log("sum | difference | product | quotient");
}
