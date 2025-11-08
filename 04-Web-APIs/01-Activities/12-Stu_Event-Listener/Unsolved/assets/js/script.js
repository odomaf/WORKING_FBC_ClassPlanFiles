// 12-Stu_Event-Listener — STARTER
// GOAL: Increment or decrement a counter when a button is clicked.
// Use addEventListener() for both buttons.

var count = 0;

// TODO: Select the increment and decrement button elements
// Example: var incrementEl = document.querySelector("#increment");
var incrementEl = document.getElementById('increment');
var decrementEl = document.getElementById('decrement');


// TODO: Select the <span> element that shows the count
var spanEl = document.getElementById('count');


// TODO: Write a function named setCounterText() that updates #count’s textContent
function setCountertext () {
  spanEl.textContent = count;
}

// TODO: Attach an event listener to the increment button
// When clicked: increase count by 1, then call setCounterText().
incrementEl.addEventListener("mouseover", function () {
  count++;
  setCountertext();
 });

decrementEl.addEventListener("click", function () {
  count--;
  setCountertext();
 });

// TODO: Attach an event listener to the decrement button
// When clicked: decrease count by 1 *only* if count > 0, then call setCounterText().

