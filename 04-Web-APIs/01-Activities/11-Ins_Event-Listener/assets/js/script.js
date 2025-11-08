// 11-Ins_Event-Listener
// Demonstrates how to attach a click event to toggle themes between dark and light.

// Select elements
var themeSwitcher = document.querySelector("#theme-switcher");
var container = document.querySelector(".container");

// Set default mode to dark
var mode = "dark";

// Add event listener for click
themeSwitcher.addEventListener("click", function () {
  if (mode === "dark") {
    mode = "light";
    container.setAttribute("class", "container light");
  } else {
    mode = "dark";
    container.setAttribute("class", "container dark");
  }
  console.log("Theme changed to:", mode);
});
