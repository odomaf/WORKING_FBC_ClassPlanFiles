// 🧰 Developer Toolkit Example — Working with Arrays and Strings

// Arrays of common operators and tools
const comparisonOps = ["Equal", "Not Equal", "Strict Equal", "Strict Not Equal", "Greater Than", "Less Than"];
const mathOps = ["+", "-", "%"];
const logicOps = ["and", "or", "not"];
const statusMessage = "Welcome, Developer";
const numString = "2025";

// ---------------------
// 🧮 Array Methods
// ---------------------

// Sorts the comparisonOps array alphabetically and returns the sorted array
comparisonOps.sort();
console.log("🔤 Sorted Comparison Operators:", comparisonOps);

// Adds a new operator to the end of the mathOps array
mathOps.push("*");
console.log("➕ Updated Math Operators:", mathOps);

// Creates a new array using slice — copies part of an array
const logicOpsPreview = logicOps.slice(0, 2);
console.log("🧩 Logic Operators (Preview):", logicOpsPreview);

// The original array remains unchanged
console.log("📦 Original Logic Operators:", logicOps);

// ---------------------
// ✍️ String Methods
// ---------------------

// Replaces a word and returns a new string (does not modify the original)
const newMessage = statusMessage.replace("Developer", "Coder");
console.log("💬 Updated Message:", newMessage);

// The original string stays the same
console.log("📜 Original Message:", statusMessage);

// ---------------------
// 🔢 Type Conversion
// ---------------------

// parseInt() converts a string to an integer
const convertedNumber = parseInt(numString);
console.log("🔎 Converted Type:", typeof convertedNumber); // "number"

// The original string remains unchanged
console.log("📜 Original numString:", numString);
