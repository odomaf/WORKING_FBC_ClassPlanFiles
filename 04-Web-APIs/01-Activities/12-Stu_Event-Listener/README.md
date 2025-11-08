# 🏗️ Implement Event Handler on Mouse Click — Starter

## Objective
Use `addEventListener()` to listen for `click` events and update a counter displayed on the page.

## Acceptance Criteria
- When the **Increment** button is clicked, the counter increases by 1.
- When the **Decrement** button is clicked and the counter is greater than 0, the counter decreases by 1.
- The count is displayed in the `<span>` with `id="count"`.

## Steps
1. Open `assets/js/script.js`.
2. Select the Increment, Decrement, and Count elements using `document.querySelector()`.
3. Write a `setCounterText()` function to update the displayed count.
4. Add two click listeners — one for increment, one for decrement.
5. Test the behavior in the browser.

## 💡 Hints
- Use `addEventListener("click", function() { ... });`
- Always update the DOM using your helper function instead of repeating code.

## 🏆 Bonus
- Add a **Reset** button that sets the count back to 0.
- Display a message when the count reaches 10 (e.g., “🎉 You reached 10!”).
- Research other event types like `"mouseover"`, `"keydown"`, or `"submit"` and discuss how they differ from `"click"`.
