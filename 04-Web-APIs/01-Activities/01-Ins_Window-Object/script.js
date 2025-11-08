// Week 4 - Activity 01: Window Object

// Logs "this" at the global scope. In a browser, this is the window object.
console.log("this:");
console.log(this);

// Logs the document object.
console.log("window.document:");
console.log(window.document);

// Logs the <body> element.
console.log("document.body:");
console.log(document.body);

// A tiny demo function to show reading simple window properties.
function logViewportInfo() {
  console.log("Viewport (innerWidth x innerHeight):", window.innerWidth, "x", window.innerHeight);
}

// Call it once now:
logViewportInfo();

// And again on resize to show that window properties change over time.
window.addEventListener("resize", function () {
  logViewportInfo();
});
