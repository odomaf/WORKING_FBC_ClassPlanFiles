// 16_Stu-Keyboard-Events — SOLVED

var keyEl = document.querySelector("#key");
var codeEl = document.querySelector("#code");
var statusEl = document.querySelector("#status");
var container = document.querySelector("#container");

// Utility: random pastel for fun feedback
function randomPastel() {
  var r = Math.floor(Math.random() * 127 + 128);
  var g = Math.floor(Math.random() * 127 + 128);
  var b = Math.floor(Math.random() * 127 + 128);
  return "rgb(" + r + "," + g + "," + b + ")";
}

// Handle keydown
function keydownAction(event) {
  // Show key and code (fallbacks for undefined)
  var k = event.key !== undefined ? event.key : "";
  var c = event.code !== undefined ? event.code : "";

  keyEl.textContent = k === " " ? "Space" : k;
  codeEl.textContent = c;
  statusEl.textContent = "KEYDOWN Event";

  // Visual feedback
  container.style.backgroundColor = randomPastel();
}

// Handle keyup
function keyupAction() {
  statusEl.textContent = "KEYUP Event";
  // Optional: reset background subtly
  container.style.backgroundColor = "#f0ead6";
}

// Listeners on the whole document
document.addEventListener("keydown", keydownAction);
document.addEventListener("keyup", keyupAction);
