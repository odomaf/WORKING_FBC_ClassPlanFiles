// 🔔 Functions are reusable blocks of code that perform a specific task.

// 🧱 Function Declaration
function sendNotification() {
  console.log("📨 Notification: You’ve got a new message!");
  console.log("-----------------------------------");
  // Return stops the function’s execution
  return;
}

// ⚙️ Function Expression (stored in a variable)
const alertUser = function() {
  console.log("🚨 Alert: Your battery is running low!");
  console.log("-----------------------------------");
  return;
};

// ▶️ Calling functions to execute them
sendNotification();
alertUser();

// Functions can be called multiple times to reuse the same logic
sendNotification();

// 🧩 Functions can take parameters to make them flexible.
function sendCustomNotification(type, message, isImportant) {
  console.log(`📢 ${type.toUpperCase()} — ${message}`);
  if (isImportant) {
    console.log("⚡ Marked as high priority!");
  }
  console.log("-----------------------------------");
  return;
}

// 🧠 Function arguments give parameters their values
// Passing different data into the same function
sendCustomNotification("update", "Your profile has been saved.", false);
sendCustomNotification("reminder", "Team meeting at 3 PM!", true);
