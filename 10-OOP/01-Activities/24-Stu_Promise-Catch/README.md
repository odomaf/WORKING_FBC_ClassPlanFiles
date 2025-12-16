# 📖 Handling Errors in Promises

## Overview
In this activity, you’ll practice **debugging and handling errors** that occur during asynchronous operations.

Proper error handling makes your code more reliable and much easier to debug when something goes wrong.

---

## 🧠 User Story
As a developer, I want to catch and handle errors in a Promise so that I can debug my code more efficiently when an error occurs.

---

## ✅ Acceptance Criteria
Your solution is complete when:

- An exception thrown inside asynchronous code is properly caught
- The error is logged to the terminal
- The message `Unable to read post data` appears in the terminal output

---

## 📝 Helpful Notes
Use the documentation below as a reference while working through this activity:

MDN — Promise `.catch()`  
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch

---

## 🖼️ Expected Output
When an error occurs, the terminal should display a clear error message instead of crashing the program.

(See the example screenshot for reference.)

---

## 💡 Helpful Hints
- When chaining multiple `.then()` calls, how can a single `.catch()` handle errors from anywhere in the chain?
- Where should error-handling logic live to avoid duplicating code?

---

## 🛠️ What You’re Practicing
- Handling errors in asynchronous JavaScript
- Using `.catch()` with Promises
- Writing safer, more debuggable code
- Understanding how Promise chains propagate errors

---

## 🏆 Bonus Challenge
Research the Node.js `promisify` utility.

Be ready to explain:
- What `promisify` does
- When it’s useful
- How it helps modernize callback-based code
