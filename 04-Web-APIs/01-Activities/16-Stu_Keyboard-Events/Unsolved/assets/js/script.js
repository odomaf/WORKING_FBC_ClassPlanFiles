// 16-Stu_Keyboard-Events — Starter (Unsolved)

// The goal: Display which key was pressed, its key code, and update the "status" text
// when keys are pressed down and released.

var keyEl = document.querySelector("#key");
var codeEl = document.querySelector("#code");
var statusEl = document.querySelector("#status");
var container = document.querySelector("#container");

function randomPastel() {
  var r = Math.floor(Math.random() * 127 + 128);
  var g = Math.floor(Math.random() * 127 + 128);
  var b = Math.floor(Math.random() * 127 + 128);
  return "rgb(" + r + "," + g + "," + b + ")";
}

// Function for handling the "keydown" event
function keydownAction(event) {
  // TODO: Display the key value (event.key) inside the span#key
  var key = event.key;
  var code = event.code;
  keyEl.textContent = key;
  codeEl.textContent = code;
  statusEl = "KEYDOWN Event";
  container.style.backgroundColor = randomPastel();

  // TODO: Display the key code (event.code) inside the span#code
  // TODO: Set the status textContent to "KEYDOWN Event"
  // Optional: You can change the color or background briefly to show the press visually.
}

// Function for handling the "keyup" event (already implemented)
function keyupAction() {
  document.querySelector("#status").textContent = "KEYUP Event";
}

// Listen for key events on the entire document
document.addEventListener("keyup", keyupAction);
// TODO: Add an event listener for "keydown" and call keydownAction
document.addEventListener("keydown", keydownAction);
