// 💰 Imagine this code helps compare your spending and savings.

const budgetGoal = "500";   // String version (e.g., from user input)
const currentSavings = 500; // Number version
const totalIncome = 1000;
const remainder = totalIncome % currentSavings;
const halfIncome = totalIncome / 2;

// ✅ Evaluates to true
const isHalfGoalMet = (currentSavings === halfIncome);

// 🚫 Evaluates to false
const isHalfLessThanRemainder = (halfIncome < remainder);

// 🧮 Use comparison operators so all expressions below log to the console as true

// Strict equality (===) returns false; loose equality (==) returns true
console.log(budgetGoal == currentSavings); // true (string converted to number)

// Both values are the number 500 and strictly equal
console.log(currentSavings === halfIncome); // true

// totalIncome is greater than currentSavings → true
console.log(totalIncome > currentSavings); // true

// remainder is less than 1 → true
console.log(remainder < 1); // true

// ⚙️ Use logical operators so all expressions below log to the console as true

// Use || (OR) → true if either expression is true
console.log(isHalfGoalMet || isHalfLessThanRemainder); // true

// Use ! (NOT) and && (AND) → true when both conditions are true
console.log(isHalfGoalMet && !isHalfLessThanRemainder); // true

// Remove (!) from one to keep at least one true expression
console.log(isHalfGoalMet || isHalfLessThanRemainder); // true
