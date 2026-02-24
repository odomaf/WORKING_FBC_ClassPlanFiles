# 🐛 Fix Event Handling in JSX

## 🎯 Activity

Work with a partner to fix the following issue:

- As a user, I want to click a button and see a welcome message for the selected student.
- As a developer, I want my click handlers to run **only when the user clicks**, not during page load.

---

## ✅ Expected Behavior

When you click a button, an alert should appear that says:

`Welcome, <studentName>!`

…and the name should match the button you clicked.

---

## ❌ Actual Behavior

The page shows alerts immediately when it loads, and the buttons don’t respond to clicks.

---

## 💡 Hints

- In React, `onClick` expects a **function** (a callback).
- If you write `onClick={someFunction()}`, you are **calling the function immediately**.
- If your handler needs an argument, wrap it in an arrow function:

  `onClick={() => someFunction('value')}`

Helpful reference:
https://react.dev/learn/responding-to-events

---

## 🏆 Bonus

Explore other React events you can attach to elements:

- `onChange`
- `onSubmit`
- `onMouseEnter`
- `onKeyDown`

Try one and explain what it does.
