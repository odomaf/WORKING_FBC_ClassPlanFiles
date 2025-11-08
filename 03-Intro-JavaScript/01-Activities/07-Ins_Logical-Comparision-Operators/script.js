// 🎮 Imagine this as part of a game or scoring system.

const playerScore = 100;
const bonusPoints = 10;
const bonusString = "10";

// ➕ Arithmetic operators: combine numbers to return a single numeric result
console.log(playerScore + bonusPoints);  // Addition → 110
console.log(playerScore - bonusPoints);  // Subtraction → 90
console.log(playerScore / bonusPoints);  // Division → 10
console.log(playerScore * bonusPoints);  // Multiplication → 1000

// ➗ Modulus operator: returns the remainder of a division

// 4 / 2 = 2 r 0 EVEN

// 3/2 = 2 r 1 ODD
console.log(playerScore % bonusPoints);  // Remainder → 0

// 🧠 Comparison operators: compare values and return true or false
// Equality (==) compares *values* only, not types
console.log(bonusPoints == bonusString);   // true (both are “10” when converted)

// Inequality (!=) checks if values are *not equal*
console.log(bonusPoints != bonusString);   // false

// Strict equality (===) compares both *value and type*
console.log(bonusPoints === bonusString);  // false (number vs string)

// Strict inequality (!==) checks both value and type
console.log(bonusPoints !== bonusString);  // true

// Greater than / Less than comparisons
console.log(playerScore > bonusPoints);    // true
console.log(playerScore < bonusPoints);    // false

// Greater than or equal to / Less than or equal to
console.log(playerScore >= bonusPoints);   // true
console.log(playerScore <= bonusPoints);   // false

// ⚙️ Logical operators: combine expressions and return true or false

const hasBonus = (bonusPoints == bonusString); // true
const isHighScore = (playerScore > bonusPoints); // true

// AND (&&): true only if *both* expressions are true
console.log(hasBonus && isHighScore); // true

// OR (||): true if *either* expression is true
console.log(hasBonus || isHighScore); // true

// NOT (!): reverses the truth value
console.log(isHighScore);   // true
console.log(!isHighScore);  // false
