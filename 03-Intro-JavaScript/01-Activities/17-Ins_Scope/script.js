// 🌐 Global scope — available anywhere in your program
const appName = "FocusTimer";

function showAppName() {
  console.log(`Welcome to ${appName}!`);
}

const displayAppName = function () {
  console.log(`Opening ${appName}...`);
};

// ✅ These both work because appName is in the global scope
showAppName();
displayAppName();

// 🔒 Local scope — only accessible inside the function
function showLogoutMessage() {
  const logoutMessage = "You’ve been logged out.";
  console.log(logoutMessage);
}

// ❌ This will throw an error if uncommented because logoutMessage is not in global scope
console.log(logoutMessage);


// ⚡ Shadowing — a local variable with the same name as a global one
const status = "Online";
console.log(`Current status: ${status}`);

// Logs "Online" — uses the global variable
function checkStatus() {
  console.log(`User status (global): ${status}`);
  return;
}

// Logs "Offline" — uses the local variable that *shadows* the global one
const updateStatus = function () {
  const status = "Offline";
  console.log(`User status (local): ${status}`);
};

// 🧠 Test each function
showLogoutMessage(); // "You’ve been logged out."
checkStatus();        // "User status (global): Online"
updateStatus();       // "User status (local): Offline"
