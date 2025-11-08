// 17-Ins_Event-Bubbling — Instructor Demo

var outer = document.querySelector(".outer-div");
var inner = document.querySelector(".inner-div");
var button = document.querySelector(".button");

// Functions that change background color
function changeBlue(event) {
  // Uncomment the next line to stop bubbling at the button level:
  // event.stopPropagation();
  event.currentTarget.style.backgroundColor = "blue";
  console.log(
    "Button clicked — event bubbling continues upward unless stopped."
  );
}

function changePurple(event) {
  // Uncomment to stop bubbling at outer level
  // event.stopPropagation();
  event.currentTarget.style.backgroundColor = "#601A4A";
  console.log("Outer div handled the event.");
}

function changeOrange(event) {
  // Uncomment to stop bubbling at inner level
  // event.stopPropagation();
  event.currentTarget.style.backgroundColor = "#EE442F";
  event.currentTarget.style.color = "white";
  console.log("Inner div handled the event.");
}

// Attach event listeners
outer.addEventListener("click", changePurple);
inner.addEventListener("click", changeOrange);
button.addEventListener("click", changeBlue);
