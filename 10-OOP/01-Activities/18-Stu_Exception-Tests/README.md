# 🚨 Implement and Test for an Exception

## Overview

In this exercise, you’ll strengthen your application by adding **input validation** and writing tests that expect an **exception to be thrown**.

By testing for errors early, you can catch bugs before they make it into production.

---

## 🧠 User Story

As a developer, I want the `BlogPost` constructor to throw an error when it receives invalid input so that I can catch bugs before deploying changes.

---

## ✅ Acceptance Criteria

Your solution is complete when:

- You have written tests that expect an exception to be thrown when `new BlogPost()` receives an invalid `authorName`
- Running `npm run test` shows that **all tests are passing**
- Invalid input causes the constructor to throw an error instead of silently failing

---

## 📝 Validation Rules

An author name is considered **valid** if it:

- Is a string
- Contains **at least 2 characters**
- Contains **no more than 15 characters**
- Starts with a letter
- Includes only:
  - letters
  - numbers
  - dashes (`-`)
  - underscores (`_`)

---

## 📚 Helpful Resources

Use the documentation below to guide your implementation:

- Jest — Testing Exceptions  
  https://jestjs.io/docs/using-matchers#exceptions

- MDN — `throw` statement  
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw

---

## 💡 Helpful Hints

- What example values for `authorName` should cause the constructor to throw an error?
- How can you use Jest to assert that an error was thrown?

---

## 🏆 Bonus Challenge

Research how Jest can be used to test **asynchronous code**.

Be ready to explain:

- How async tests differ from synchronous tests
- When async testing is necessary
