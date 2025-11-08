# ⌨️ Keyboard Events — Student Starter

## Objective
Observe how `keydown` and `keyup` events work by showing which key was pressed and released.

## Acceptance Criteria
- It's done when the page displays:
  - The **key** pressed (e.g., "a", "Shift", "Enter").
  - The **code** of that key (e.g., "KeyA", "ShiftLeft", "Enter").
  - The current **event status** — "KEYDOWN Event" or "KEYUP Event".
- It's done when releasing a key updates the status to `"KEYUP Event"`.

---

## 💡 Hints
- `event.key` returns the printable value (e.g., `"a"`, `"1"`, `" "`, `"Enter"`).
- `event.code` returns the physical key name (e.g., `"KeyA"`, `"Digit1"`).
- Try logging the `event` object to inspect what else it contains.

---

## 🏆 Bonus
Add visual feedback:
- Change the container background to a random color on `keydown`.
- Reset it back on `keyup`.
