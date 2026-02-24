# Week 18 — React Hooks: useEffect

## 🎯 Objective

In this activity, you will use the `useEffect` Hook to synchronize your React state with something **outside of React** — the browser tab title.

This reinforces the idea that:

> `useEffect` runs AFTER a component renders and is used for side effects.

---

## 🧠 User Story

As a developer,  
I want to use the `useEffect` Hook  
So that the browser tab updates to reflect the current temperature.

---

## ✅ Acceptance Criteria

This activity is complete when:

- You have imported `useEffect` into `Thermostat.jsx`.
- You have created state for a `temp` value (start at 72).
- You have used the `useEffect` Hook to set `document.title`.
- The browser tab updates when the temperature changes.
- The dependency array correctly includes `temp`.

---

## 💡 What You’re Practicing

- Using `useState`
- Importing and implementing `useEffect`
- Understanding dependency arrays
- Synchronizing React state → external systems (the browser)

---

## 📝 Helpful Reminder

`useEffect` runs:

- After the first render
- After any dependency changes

Basic structure:

useEffect(() => {
// side effect here
}, [dependency]);

Important patterns:

- No dependency array → runs after EVERY render
- Empty array [] → runs once on mount
- [temp] → runs whenever temp changes

---

## 🏆 Bonus

Research and discuss with your partner:

- What other real-world things might require `useEffect`?
  - API calls
  - localStorage
  - Event listeners
  - Timers
  - Subscriptions
  - Updating the document title

Why shouldn’t we place those directly inside the component body?

---

Week 18 — React Fundamentals
