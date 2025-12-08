// Demo: Rest & Spread Operators

// ------------------------------------------------------------
// 1. Rest parameters: collect any number of arguments
// ------------------------------------------------------------

// Without rest: only the first two arguments are used
const add = (x, y) => x + y;
console.log("add(1, 2, 3, 4, 5):", add(1, 2, 3, 4, 5));
// -> 3 (extra arguments ignored)

// With rest: accept unlimited numbers
const addAll = (...nums) => {
  return nums.reduce((sum, n) => sum + n, 0);
};

console.log("\nUsing rest parameters:");
console.log(addAll(1));                 // -> 1
console.log(addAll(3, 3));              // -> 6
console.log(addAll(1, 1, 4, 5));        // -> 11

// ------------------------------------------------------------
// 2. Rest for introspection: count arguments
// ------------------------------------------------------------

const countArgs = (...args) => `You passed ${args.length} arguments.`;

console.log("\nCounting arguments:");
console.log(countArgs(0, 1));
console.log(countArgs("hello", null, ["a", "b"], { key: "value" }));

// ------------------------------------------------------------
// 3. Spread operator: expand iterable values
// ------------------------------------------------------------

// Example: merging arrays cleanly
const starters = ["chips", "salsa"];
const entrees = ["tacos", "burritos"];
const fullMenu = [...starters, "guacamole", ...entrees];

console.log("\nMenu with spread:");
console.log(fullMenu);

// Another example: cloning arrays (avoids mutation)
const originalTeam = ["Rex", "Nova", "Bolt"];
const clonedTeam = [...originalTeam];   // shallow copy

clonedTeam.push("Shadow");

console.log("\nTeam cloning example:");
console.log("Original:", originalTeam);
console.log("Clone:", clonedTeam);

// ------------------------------------------------------------
// 4. Spread inside objects
// ------------------------------------------------------------

const baseUser = { id: 7, role: "member" };
const updatedUser = { ...baseUser, role: "admin", active: true };

console.log("\nObject spread example:");
console.log("Base user:", baseUser);
console.log("Updated user:", updatedUser);
