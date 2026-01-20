# 📖 Model Validation & Data Integrity (Student Activity)

In this activity, you will strengthen your application by adding **validations and constraints** to the `User` model.

So far, our routes and controllers assume that incoming data is valid. In real applications, that assumption leads to bugs, security issues, and corrupted data. Model-level validation ensures that **bad data never reaches the database in the first place**.

This activity focuses on protecting your data at the **model layer**, not the route layer.

---

## 🧠 Learning Objectives

By the end of this activity, you should be able to:

* Explain the difference between validation and constraints
* Prevent invalid or incomplete data from being saved to the database
* Use built-in Sequelize validators to enforce rules
* Understand why model-level validation is a critical backend responsibility

---

## 📂 Your Task

You will update the `User` model to enforce the following rules:

* **Required Fields**
  Prevent `null` values for:

  * `username`
  * `email`
  * `password`

* **Password Rules**

  * Passwords must be at least **8 characters long**

* **Username Rules**

  * Usernames may only contain **letters and numbers**

Your goal is to make the model reject invalid data automatically, without relying on route logic.

---

## ✅ Acceptance Criteria

This activity is complete when:

* The `User` model prevents `null` values for `username`, `email`, and `password`
* Passwords shorter than 8 characters are rejected
* Usernames containing characters other than letters and numbers are rejected
* Sequelize throws a validation error when invalid data is provided

---

## 📝 Reference Material

Use the official Sequelize documentation for guidance:

* Sequelize – Validations and Constraints
  [https://sequelize.org/master/manual/validations-and-constraints.html](https://sequelize.org/master/manual/validations-and-constraints.html)

Focus on understanding **why** a validator exists, not just how to apply it.

---

## 💡 Helpful Hints

* Sequelize includes many **built-in validators** you can use without writing custom logic
* Validation errors are thrown automatically when `.create()` or `.update()` is called
* Model validation happens **before** data is written to the database

If available, use `npm run test` or example seed data to help identify failing cases.

---

## 🔍 Reflection Questions

Discuss with your group:

* Why is model-level validation more reliable than route-level validation?
* What could happen if invalid data is allowed into the database?
* Should every validation live in the model? Why or why not?

---

## 🏆 Bonus (Optional)

If you finish early, research and discuss:

* What are **regular expressions**?
* How are regular expressions used to validate strings like usernames or emails?

You do not need to write a custom regex for this activity — focus on understanding the concept.

---

## ✅ Summary

This activity reinforces a key backend principle:

> **The database should protect itself from bad data.**

By adding validations and constraints at the model level, you are building applications that are safer, more predictable, and easier to maintain.
