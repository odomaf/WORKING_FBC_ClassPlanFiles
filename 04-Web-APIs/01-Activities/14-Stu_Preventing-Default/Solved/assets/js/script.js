// 14-Stu_Preventing-Default — Tip Calculator (SOLVED)

var formEl = document.querySelector("#tip-form");
var totalEl = document.querySelector("#total");
var tipEl = document.querySelector("#tip-percentage");
var tipOutEl = document.querySelector("#tip-amount");
var totalOutEl = document.querySelector("#new-total");

// Helpers
function calculateTip(total, tipPercentage) {
  var roundedResult = (total * tipPercentage).toFixed(2);
  return roundedResult;
}
function calculateTotal(total, tipAmount) {
  return parseFloat(total) + parseFloat(tipAmount);
}

// Submit handler
function addTip(event) {
  // 1) Stop default form submission (prevents page refresh)
  event.preventDefault();

  // 2) Read and normalize inputs
  var total = parseFloat(totalEl.value);
  var tipPct = parseFloat(tipEl.value);

  // 3) Basic validation
  if (isNaN(total) || isNaN(tipPct) || total < 0 || tipPct < 0) {
    tipOutEl.textContent = "Please enter valid numbers.";
    totalOutEl.textContent = "";
    return;
  }

  // 4) Compute amounts
  var tipDecimal = tipPct * 0.01;
  var tipAmount = calculateTip(total, tipDecimal);         // returns string with 2dp
  var newTotal = calculateTotal(total, tipAmount);         // numeric sum

  // 5) Render results
  tipOutEl.textContent = tipAmount;                        // already 2dp
  totalOutEl.textContent = newTotal.toFixed(2);            // ensure 2dp
}

// Listen on the FORM submit event
formEl.addEventListener("submit", addTip);
