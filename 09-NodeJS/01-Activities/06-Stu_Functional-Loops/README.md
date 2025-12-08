# 🔁 Practicing filter() and map()

In this activity, you’ll practice using the **Array.filter()** and **Array.map()** methods to create new arrays from an existing one.

You’ll work in two files:

- filter.js
- map.js

---

## 🎯 LEARNING GOALS

By the end of this activity, you should be able to:

- Use `filter()` to keep only the elements that match a condition.
- Use `map()` to transform each element into a new value.
- Write small, focused arrow functions as callbacks.
- Read and reason about how data flows through an array pipeline.

---

## ✅ ACCEPTANCE CRITERIA

You are done when:

1. In filter.js:

   - `evenNumbers` contains only the even numbers from `originalArray`.
   - `isPrime` correctly identifies prime numbers.
   - `primeArray` contains only prime numbers from `originalArray`.
   - `overFive` contains only numbers greater than 5.

2. In map.js:

   - `doubled` contains each original value multiplied by 2.
   - `tripled` contains each original value multiplied by 3.
   - `oddOrEven` contains the strings `"odd"` or `"even"` for each number.

3. Running each file with Node:
   - `node filter.js`
   - `node map.js`
   - Produces the expected arrays without errors.

---

## 🧪 HOW TO RUN

1. Open your terminal.
2. Navigate to the Unsolved folder.
3. Run each file:

   node filter.js  
   node map.js

4. Check the console output and adjust your code until it matches your expectations.

---

## 💡 HINTS

- `filter()` expects you to return **true** to keep an item, and **false** to discard it.
- `map()` expects you to return the **new value** for each item.
- Arrow function patterns you will use a lot:

  num => num % 2 === 0  
  num => num \* 2

- For the prime check:
  - Numbers less than 2 are not prime.
  - You can loop from 2 up to `Math.sqrt(num)` and return false if `num % i === 0`.

---

## 🏆 BONUS CHALLENGES

If you finish early:

1. Add more conditions in filter.js:

   - Create an array of numbers less than 5.
   - Create an array of numbers that are odd and greater than 3.

2. In map.js:
   - Create an array of objects like `{ value: <number>, isEven: <boolean> }`.
   - Chain map and filter together (for example, double all numbers and then keep only values over 10).
