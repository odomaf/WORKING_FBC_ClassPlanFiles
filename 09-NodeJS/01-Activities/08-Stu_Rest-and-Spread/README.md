# 🧩 Rest & Spread Practice — Unsolved Version

In this activity, you will practice using **spread syntax**, **rest parameters**, and **reduce()** to work with arrays and function arguments.

Your goal is to complete the tasks inside `index.js` by adding the missing logic and comments.

---

## 🎯 LEARNING GOALS

By the end of this activity, you should be able to:

- Use the **spread operator** to copy and merge arrays.
- Use **rest parameters** to collect an arbitrary number of arguments.
- Use **reduce()** to transform an array into a single value.
- Explain the difference between rest (`...args`) and spread (`...array`).

---

## 📂 FILES YOU WILL EDIT

- `index.js` — Contains exercises that you must complete and comment.

---

## 🧪 TASKS

1. **Exercise 1 — Spread Operator**

   - Copy an existing array using the spread operator.
   - Log the new array.
   - Add a comment explaining what the spread operator does.

2. **Exercise 2 — Using reduce()**

   - Use reduce to compute the sum of exactly three numbers.
   - Add comments describing how reduce works.

3. **Exercise 3 — Rest Parameters**

   - Rewrite the sum function to accept _any number of arguments_ using rest parameters.
   - Add comments explaining:
     - What rest parameters do.
     - How reduce processes the collected values.

4. Log all results to verify correctness.

---

## 💡 HINTS

- Spread copies values _out_ into a new array.
- Rest collects function arguments _into_ an array.
- `reduce()` repeatedly combines array elements into a single result.

Examples to think about:

- `const copy = [...array]`
- `const merge = [...a, ...b]`
- `const sum = (...nums) => nums.reduce((t, n) => t + n, 0)`

---

## 🏆 BONUS CHALLENGE

Research and answer:

**What other data types support the spread operator (e.g., strings, objects)?  
How is spreading an object different from spreading an array?**

Try adding example code to `index.js` if time allows.
