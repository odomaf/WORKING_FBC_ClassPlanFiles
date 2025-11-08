# ⏱️ Speed Reader — Timers & Intervals (Starter)

## Objective
Use `setInterval()` and `clearInterval()` to:
1) run a countdown, and then
2) display a sentence **one word at a time**.

## Acceptance Criteria
- A countdown (starting around 5 seconds) appears in `#countdown`.
- When the countdown reaches 0, it stops and the words begin appearing in `#main`.
- Words appear sequentially until the sentence is finished, then the interval stops.

## Steps
1. Open `assets/js/script.js`.
2. Implement `countdown()`:
   - create a numeric counter,
   - use `setInterval(..., 1000)` to update it,
   - when it reaches 0: `clearInterval()` and call `displayMessage()`.
3. Implement `displayMessage()`:
   - use an index to read from the `words` array,
   - display one word per tick,
   - stop with `clearInterval()` when no words remain.
4. Open `index.html` in your browser to test.

## Hints
- Use `split(" ")` to turn the message into an array of words (already provided).
- Always save the result of `setInterval(...)` to a variable so you can `clearInterval(...)` later.
- Use simple printouts (`console.log(...)`) to debug timer behavior.

## Bonus
- Ask the user for:
  - how long the countdown should run (seconds),
  - how fast to show words (ms per word).
- Add a **Restart** button that runs the whole process again.

