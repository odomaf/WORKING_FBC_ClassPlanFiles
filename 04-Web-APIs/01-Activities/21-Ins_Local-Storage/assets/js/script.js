// 21-Ins_Local-Storage (Instructor)
// Demonstrates reading/writing/removing simple values with localStorage.

var STORAGE_KEY = "count";
var MIN = 0;
var MAX = 24;

var counterEl = document.querySelector("#counter");
var addButton = document.querySelector("#add");
var subtractButton = document.querySelector("#subtract");
var resetButton = document.querySelector("#reset");

// Read 'count' from localStorage, defaulting to 0 on first run or invalid values
function loadCount() {
  var raw = localStorage.getItem(STORAGE_KEY);
  var num = parseInt(raw, 10);

  if (isNaN(num)) {
    num = 0;
  }
  return clamp(num, MIN, MAX);
}

// Write 'count' to localStorage
function saveCount(value) {
  localStorage.setItem(STORAGE_KEY, String(value));
}

// Remove the key entirely (demonstrates removeItem)
function clearCount() {
  localStorage.removeItem(STORAGE_KEY);
}

// Ensure the value stays within bounds
function clamp(value, min, max) {
  if (value < min) return min;
  if (value > max) return max;
  return value;
}

// Update the UI and button enabled states
function render(value) {
  counterEl.textContent = value;

  // disable at limits for clarity
  subtractButton.disabled = value <= MIN;
  addButton.disabled = value >= MAX;
}

// --- Initialize ---
var count = loadCount();
render(count);

// --- Events ---
addButton.addEventListener("click", function () {
  if (count < MAX) {
    count = count + 1;
    render(count);
    saveCount(count);
  }
});

subtractButton.addEventListener("click", function () {
  if (count > MIN) {
    count = count - 1;
    render(count);
    saveCount(count);
  }
});

resetButton.addEventListener("click", function () {
  count = 0;
  render(count);
  // Either set to 0 or remove the key entirely (teaching moment):
  // saveCount(count);
  clearCount(); // demonstrates removeItem()
});
