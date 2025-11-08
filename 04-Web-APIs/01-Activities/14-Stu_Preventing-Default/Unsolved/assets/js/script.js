// 14-Stu_Preventing-Default — Tip Calculator (STARTER)
// GOAL: Prevent the form's default submit (page refresh) and show computed results.
// Use event.preventDefault() in your submit handler.

// 1) Grab DOM elements
var formEl = document.querySelector("#tip-form");
var totalEl = document.querySelector("#total");
var tipEl = document.querySelector("#tip-percentage");
var submitEl = document.querySelector("#submit");
var tipOutEl = document.querySelector("#tip-amount");
var totalOutEl = document.querySelector("#new-total");

// 2) Helper functions (provided)
function calculateTip(total, tipPercentage) {
  var roundedResult = (total * tipPercentage).toFixed(2);
  return roundedResult;
}
function calculateTotal(total, tipAmount) {
  return parseFloat(total) + parseFloat(tipAmount);
}

// 3) Submit handler — TODOs inside
function addTip(event) {
  // TODO: Stop the form from reloading the page
  event.preventDefault();

  // TODO: Read input values
  //  - Convert total to a number (parseFloat)
  //  - Convert tip percentage to a decimal (value / 100)
  var total = parseFloat(totalEl.value);
  var tip = parseFloat(tipEl.value);
  var tipPct = tip/100;

  // TODO: Guard against invalid inputs (NaN). If invalid, show a friendly message
  //  in tipOutEl/totalOutEl and return early.
  if (isNaN(total) || isNaN(tipPct) || total < 0 || tipPct < 0) {
    tipOutEl.textContent = "Please enter valid numbers.";
    totalOutEl.textContent = "";
    return;
  }

  // TODO: Compute tipAmount using calculateTip(total, tipPctDecimal)
  // TODO: Compute newTotal using calculateTotal(total, tipAmount)
  var tipAmount = calculateTip(total, tipPct);
  var newTotal = calculateTotal(total, tipAmount)

  // TODO: Render both numbers into #tip-amount and #new-total
  //  - Ensure total shows 2 decimal places (toFixed(2))
  tipOutEl.textContent = tipAmount;
  totalOutEl.textContent = newTotal;
}

// 4) Attach the event listener
// Prefer listening on the FORM 'submit' event (not just button 'click').
formEl.addEventListener("submit", addTip);

// (Optional) You could also listen on the button:
// submitEl.addEventListener("click", addTip);
