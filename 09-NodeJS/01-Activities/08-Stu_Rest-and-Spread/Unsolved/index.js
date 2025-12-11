// Unsolved Version — Rest & Spread Practice
// Add your code and comments where indicated.

// ------------------------------------------------------------
// Exercise 1 — Spread operator to copy an array
// ------------------------------------------------------------

const songs = ["Creep", "Everlong", "Bulls On Parade", "Song 2", "What I Got"];

//spread syntax will merge songs with the new songs in this newSongs array
const newSongs = [...songs, "W.I.T.C.H.", "This Is Me", "Ain't No Man"];

console.log("Array: ", newSongs);

// TODO:
// 1. Create a NEW array named `newSongs` using the spread operator.
// 2. Add a comment explaining what the spread operator does.
// 3. Log the new array.

// ------------------------------------------------------------
// Exercise 2 — Summing values with reduce()
// ------------------------------------------------------------

// TODO:
// Create a function named `sumThree` that accepts exactly three parameters (x, y, z).
// Inside the function:
//  - Place the values into an array
//  - Use reduce() to return the sum
//  - Add comments describing how reduce() works
const sumThree = (x, y, z) => {
  const threeNums = [x, y, z];
  return threeNums.reduce((init, value) => init + value, 0);
};
console.log("Sum of three nums ONLY: ", sumThree(1, 2, 3)); // Expected: 6

// ------------------------------------------------------------
// Exercise 3 — Rest parameters for flexible arguments
// ------------------------------------------------------------

// TODO:
// Create a function named `sumAll` that uses rest parameters (...nums).
// The function should:
//  - Accept ANY number of arguments
//  - Use reduce() to sum them
//  - Add comments explaining:
//      • What rest parameters do
//      • How reduce processes the collected values

const sumAll = (...nums) => {
  return nums.reduce((start, value) => start + value, 0);
};
console.log("Summing three via rest parameter: ", sumAll(1, 2, 3)); // Expected: 6
console.log(
  "Summing 5 via same function using rest parameters: ",
  sumAll(1, 2, 3, 4, 100)
); // Expected: 110

// ------------------------------------------------------------
// Optional Bonus
// ------------------------------------------------------------

// TODO (optional):
// Try spreading other data types (like strings or objects) and log the results.
// Example ideas:
//  - const letters = [..."hello"]
//  - const userCopy = { ...user }
// Add comments describing what spread is doing in each case.
const letters = [..."Anne"];
const userCopy = [...letters, 0, 1, 2];

console.log("letters: ", letters);
console.log("user copy plus other elements: ", userCopy);
