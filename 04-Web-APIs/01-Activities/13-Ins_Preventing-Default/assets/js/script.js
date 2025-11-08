// 13-Ins_Preventing-Default
// Demonstrates preventing default form submission and handling events safely.

var submitEl = document.querySelector("#submit");
var nameInput = document.querySelector("#name");
var emailInput = document.querySelector("#email");
var submissionResponseEl = document.querySelector("#response");

// Named event handler function
function showResponse(event) {
  // Prevents the form from reloading the page
  event.preventDefault();

  console.log("Form submit event object:", event);

  var response =
    "Thank you for your submission, " +
    nameInput.value +
    "! We’ll reach out to you at " +
    emailInput.value +
    ".";

  submissionResponseEl.textContent = response;
}

// Attach event listener to button
submitEl.addEventListener("click", showResponse);
