# 🏗️ Refactoring Sequelize Code with `async` / `await`

In this activity, you will refactor existing Sequelize code to use **`async` and `await`** instead of chained `.then()` and `.catch()` Promises.

This is a **readability and maintainability upgrade**, not a logic change. The goal is to make asynchronous database code easier to read, reason about, and debug — a skill you will use constantly in real-world backend development.

---

## 🧠 Learning Objectives

By the end of this activity, you should be able to:

* Explain what makes a function asynchronous in JavaScript
* Refactor Promise-based Sequelize code to use `async` / `await`
* Identify where `await` pauses execution until a database operation completes
* Maintain existing functionality while improving code clarity

---

## 📂 Your Task

You will refactor **two areas of the application**:

### 1️⃣ Database Seed File

* Update `bookSeeds.js` so it no longer uses `.then()` and `.catch()`
* Replace Promise chains with `async` functions and `await` expressions
* Ensure the seed file still successfully populates the database

### 2️⃣ API Routes (PUT & DELETE)

* Refactor the following route file to use `async` / `await`:

```
Unsolved/routes/api/bookRoutes.js
```

* Update both the `PUT` and `DELETE` routes
* Ensure the routes still behave the same from the client’s perspective

Your refactor should improve **readability**, not change the API behavior.

---

## ✅ Acceptance Criteria

This activity is complete when:

* `bookSeeds.js` no longer uses Promise chaining
* The seed file still runs successfully and inserts data
* `bookRoutes.js` no longer uses `.then()` / `.catch()`
* The `PUT` and `DELETE` routes continue to work for `/api/books/:book_id`

---

## 💡 Key Concept Reminder

JavaScript knows a function is asynchronous when it is declared with the `async` keyword.

Inside an `async` function:

* `await` pauses execution until a Promise resolves
* Errors can be handled cleanly using `try` / `catch`

This often results in code that reads **top-to-bottom**, like synchronous logic.

---

## 🔍 Reflection Questions

Discuss with your group:

* Why is `async` / `await` often easier to read than Promise chains?
* Does refactoring to `async` / `await` change how the code behaves?
* Where might `try` / `catch` blocks be helpful in these routes?

---

## 🏆 Bonus (Optional)

If you finish early, research and discuss:

* How could you run a seed file from an npm script?
* How might you organize multiple models using a central `index.js` file?

Use official documentation, MDN, or other reputable resources.

---

## ✅ Summary

This activity reinforces an important idea: **good code is readable code**.

By refactoring to `async` / `await`, you are not changing *what* the application does — you are improving *how clearly it communicates its intent*.
