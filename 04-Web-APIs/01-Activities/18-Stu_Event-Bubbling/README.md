# 🧭 Event Bubbling — Carousel (Starter)

## Objective
Add comments to describe how **`stopPropagation()`** works and why it’s needed in nested event listeners.

## Instructions
1. Open `assets/js/script.js`.
2. Review the event listeners for:
   - The carousel container (`click` on the image)
   - The **Next** and **Previous** buttons
3. Add comments explaining:
   - What event bubbling is.
   - What happens if we *don’t* call `event.stopPropagation()`.
   - Why the `navigate()` function works correctly when bubbling is stopped.

---

## 💡 Hints
- Click the **Next** or **Previous** buttons and observe what happens.
- Comment out `event.stopPropagation()` lines, then refresh — what changes?
- Read [MDN Web Docs: stopPropagation()](https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation).

---

## 🏆 Bonus
- Add a counter that shows the current image number (e.g., “Image 2 of 4”).
- Research **event delegation** — how it differs from bubbling.
