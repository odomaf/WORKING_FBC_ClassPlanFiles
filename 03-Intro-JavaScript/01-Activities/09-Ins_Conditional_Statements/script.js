// 🥗 Imagine this as part of a food delivery or meal tracker app.

const hungerLevel = 50;     // Scale from 0–100
const isLunchTime = true;   // Boolean to check if it’s lunchtime
const mealCost = 11;        // Average cost of lunch in dollars

// 🍽️ Basic if statement
// Evaluates to true, so "Hungry!" will log
if (hungerLevel >= 50) {
  console.log("Hungry!");
}

// Evaluates to false, so nothing is logged
if (hungerLevel < 50) {
  console.log("I'm full!");
}

// ⏰ Using if...else to check the time of day
// Evaluates to true, so "Time for lunch!" logs
if (isLunchTime === true) { 
  console.log("Time for lunch!");
} else {
  console.log("Not lunch time yet.");
}

// This shorthand form works the same — no need to write `=== true`
if (isLunchTime) {
  console.log("Grabbing lunch now!");
} else {
  console.log("Maybe later!");
}

// 🚫 Using logical NOT (!) flips the condition
// Evaluates to false, so the else statement runs
if (!isLunchTime) { 
  console.log("Still waiting for lunch...");
} else {
  console.log("Already lunchtime!");
}

// 💵 Using if...else if...else for multi-condition logic
// The first condition is false, the second is true, so it logs "$$"
if (mealCost < 10) {
  console.log("Cost Rating: $");
} else if (mealCost >= 10 && mealCost < 15) {
  console.log("Cost Rating: $$");
} else {
  console.log("Cost Rating: $$$");
}
