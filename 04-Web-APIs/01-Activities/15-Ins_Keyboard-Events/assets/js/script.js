// 15-Ins_Keyboard-Events — Instructor Version

var typefaceEl = document.querySelector("#typeface");
var clearEl = document.querySelector("#clear");
var h1El = document.querySelector("#h1");
var h2El = document.querySelector("#h2");
var h3El = document.querySelector("#h3");
var pEl = document.querySelector("#p");
var textAreaEl = document.querySelector("#textarea");

var containerEl = document.querySelector(".container");
var elements = [h1El, h2El, h3El, pEl];
var currentTypeface = "serif";

// 1) Change event — update container font
typefaceEl.addEventListener("change", function (event) {
  event.preventDefault();
  currentTypeface = typefaceEl.value;
  containerEl.style.fontFamily = currentTypeface;
});

// 2) Keydown event — mirror user input across headings/paragraph
textAreaEl.addEventListener("keydown", function (event) {
  // Normalize to lowercase for alpha test
  var key = event.key.toLowerCase();

  // Acceptable characters
  var validKeys = "abcdefghijklmnopqrstuvwxyz0123456789 ".split("");

  // Ignore special keys like Shift, Enter, etc.
  if (validKeys.includes(key)) {
    for (var i = 0; i < elements.length; i++) {
      elements[i].textContent += event.key;
    }
  }
});

// 3) Click event — clear all content
clearEl.addEventListener("click", function (event) {
  event.preventDefault();
  textAreaEl.value = "";
  for (var i = 0; i < elements.length; i++) {
    elements[i].textContent = "";
  }
});
