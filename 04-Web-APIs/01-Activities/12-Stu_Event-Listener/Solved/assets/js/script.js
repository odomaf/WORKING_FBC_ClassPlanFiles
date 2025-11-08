// 12-Stu_Event-Listener — SOLVED

var count = 0;

// Select elements
var incrementEl = document.querySelector("#increment");
var decrementEl = document.querySelector("#decrement");
var countEl = document.querySelector("#count");

// Update DOM with current count
function setCounterText() {
  countEl.textContent = count;
}

// Increment
incrementEl.addEventListener("click", function () {
  count++;
  setCounterText();
});

// Decrement (guard against negatives)
decrementEl.addEventListener("click", function () {
  if (count > 0) {
    count--;
    setCounterText();
  }
});

// Initialize UI
setCounterText();
