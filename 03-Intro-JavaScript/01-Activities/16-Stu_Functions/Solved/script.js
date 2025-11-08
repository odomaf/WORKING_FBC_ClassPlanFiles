// ✅ Function Declaration — checks if two inputs are equal
function validateInput(inputA, inputB) {
  if (inputA === inputB) {
    console.log("✅ Inputs match exactly (same type and value).");
  } else if (inputA == inputB) {
    console.log("⚠️ Inputs match in value, but not in type.");
  } else {
    console.log("❌ Inputs do not match.");
  }
  console.log("-----------------------------------");
  return;
}

// Logs: "✅ Inputs match exactly (same type and value)."
validateInput("password123", "password123");

// Logs: "⚠️ Inputs match in value, but not in type."
validateInput(42, "42");

// ⚙️ Function Expression — same logic, different syntax
const checkEquality = function (inputA, inputB) {
  if (inputA === inputB) {
    console.log("✅ Inputs match exactly (same type and value).");
  } else if (inputA == inputB) {
    console.log("⚠️ Inputs match in value, but not in type.");
  } else {
    console.log("❌ Inputs do not match.");
  }
  console.log("-----------------------------------");
  return;
};

// Logs: "❌ Inputs do not match."
checkEquality(false, 0);
