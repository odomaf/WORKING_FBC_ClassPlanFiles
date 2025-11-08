# 🐛 Prevent Default — Tip Calculator (Starter)

## Objective
Fix the form so clicking **Calculate Tip**:
1) does **not** reload the page, and  
2) shows the **tip amount** and **new total** on screen.

## Expected Behavior
- When the user enters a meal total and tip percentage and submits:
  - Tip amount is calculated and displayed.
  - New total (meal + tip) is calculated and displayed.
  - The page **does not** refresh.

## Actual Behavior (to fix)
- Submitting the form refreshes the page, clearing any results.

## Acceptance Criteria
- The form submission is canceled with `event.preventDefault()`.
- Tip amount and total are computed and rendered into `#tip-amount` and `#new-total`.
- Totals show **two decimal places**.

## Steps
1. Open `assets/js/script.js`.
2. Implement `addTip(event)`:
   - Use `event.preventDefault()` to stop page refresh.
   - Read inputs and convert values to numbers.
   - Compute:
     - `tipAmount = calculateTip(total, (tipPct / 100))`
     - `newTotal = calculateTotal(total, tipAmount)`
   - Update the DOM with results (`.textContent`).
3. Test in the browser.

## 💡 Hints
- `parseFloat("10.00")` → `10`.
- Guard against `NaN` (e.g., empty fields). Show a helpful message if inputs are invalid.
- Listening to the **form’s** `"submit"` event is the most reliable pattern.

## 🏆 Bonus
- Add input validation messages (e.g., red border if invalid).
- Disable the button until both fields have valid numbers.
- Add a **Reset** button to clear the form and outputs.

