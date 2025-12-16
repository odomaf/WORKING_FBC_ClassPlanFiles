# ✅ Make the Failing Test Pass: isPassword()

## Overview

In this exercise, you’ll continue following the **Test-Driven Development (TDD)** workflow by updating the `isPassword()` method so that it passes previously failing tests.

Your goal is to add **only the minimum amount of code necessary** to make the tests pass before moving on to additional improvements.

---

## 🧠 User Story

As a developer, I want to add just enough code to the `isPassword()` method to pass the failing test so that I can confidently refactor and optimize my code before adding new tests.

---

## ✅ Acceptance Criteria

Your solution is complete when:

- You add the **least amount of code necessary** to pass the failing test for `isPassword()`
- Running `npm run test` shows that **all tests are passing**
- You follow the **Red → Green → Refactor** workflow as you add additional tests
- `validate.isPassword()` returns `false` when the password length is less than 8
- `validate.isPassword()` returns `false` when the password does not contain at least one capital letter
- `validate.isPassword()` returns `false` when the password does not contain at least one lowercase letter
- `validate.isPassword()` returns `false` when the password does not contain at least one number
- `validate.isPassword()` returns `true` when the password is valid  
  (example: `Password123`)
- All tests are passing in the terminal

---

## 🛠️ What You’re Practicing

- Implementing functionality based on test requirements
- Writing code incrementally using TDD
- Avoiding over-engineering early solutions
- Building confidence through passing tests

---

## 💡 Helpful Hint

What is the **smallest possible change** you can make to return `false` before handling all password rules?

---

## 🏆 Bonus Challenge

Think about how you could write your tests so that another developer can clearly understand **what each test is validating**.

Research best practices for writing readable and meaningful test descriptions.
