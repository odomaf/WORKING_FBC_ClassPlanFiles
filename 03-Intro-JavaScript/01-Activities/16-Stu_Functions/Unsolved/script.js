// ✅ Function Declaration — checks if two inputs are equal

// Logs: "✅ Inputs match exactly (same type and value)."

// Logs: "⚠️ Inputs match in value, but not in type."
// Logs: "❌ Inputs do not match."

function matchCase(a, b){
    if(a === b){
        console.log("✅ Inputs match exactly (same type and value).");
    } else if(a == b){
        console.log("⚠️ Inputs match in value, but not in type.");
    } else if( a != b){
        console.log("❌ Inputs do not match.");
    }
}

matchCase(10, 10);
matchCase("10", 10);
matchCase('x', 'y');