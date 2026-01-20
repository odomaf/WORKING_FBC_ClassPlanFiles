# 🏗️ Secure Passwords with Sequelize Hooks (Student Activity)

In this activity, you will make user authentication **more realistic and more secure** by hashing passwords automatically using **Sequelize hooks**.

Right now, if a password is stored as plain text, anyone with database access can read it — that’s a security disaster. Instead, real applications store a **hashed version** of the password so the original password can’t be recovered from the database.

Your goal is to use hooks so hashing happens **automatically**, without relying on route code to remember to do it.

---

## 🧠 Learning Objectives

By the end of this activity, you should be able to:

- Explain why passwords should never be stored in plain text
- Use Sequelize hooks to run logic _before_ data is saved
- Hash passwords before a user is created
- Hash passwords before a user’s password is updated
- Only re-hash when the password field has actually changed

---

## 👤 User Stories

- As a user, I want to log in with my password.
- As a user, I want to change my password.
- As a user, I want to know my password is stored securely.

---

## ✅ Acceptance Criteria

This activity is complete when:

- `User.init()` includes a hook that hashes the user’s password **before creation**
- `User.init()` includes a hook that hashes the user’s password **before updating**
- The password is only hashed again when the password has actually changed

---

## 🧩 What You’re Building

You will update your `User` model so that:

- When you call `User.create(...)`, the password is **automatically hashed**
- When you call `User.update(...)`, the password is **automatically hashed** (only if changed)

This makes your code safer because the hashing logic lives in one place: **the model layer**.

---

## 💡 Helpful Hints

- You’ll likely need `bcrypt` for hashing and comparing passwords.
- Hooks often need to be `async` because hashing returns a Promise.
- Wrap your route logic with `try...catch` so errors don’t crash your server.

### Hooks: 3 Common Ways

Sequelize hooks can be added in different ways:

1. Inside `init()` (centralized and easy to find)
2. With `Model.addHook(...)`
3. With `Model.beforeCreate(...)` / `Model.beforeUpdate(...)`

For this activity, we’re focusing on hooks inside `init()` so it’s obvious where the security logic lives.

### Hash Only When Password Changes

To avoid double-hashing, check whether the password field changed before hashing.

(You can use Sequelize’s change detection like `instance.changed('password')`.)

---

## 🔍 Reflection Questions

Discuss with your group:

- Why do we compare hashed passwords instead of decrypting them?
- What could go wrong if passwords are stored in plain text?
- Why is hashing in the model better than hashing in every route?

---

## 🏆 Bonus (Optional)

Hooks are considered **middleware** in programming terms. Research and discuss:

- What are other examples of middleware in Node/Express apps?
- Where have you already used middleware in this module?

Keywords to search:

- "express middleware examples"
- "authentication middleware node"
- "logging middleware morgan"

---

## ✅ Summary

This activity reinforces a critical backend rule:

> **Security should be automatic, not optional.**

By using Sequelize hooks for hashing, you ensure passwords are always stored safely — even if route code changes later.
