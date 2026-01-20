# 🏗️ Create a Custom Instance Method (Secure Login)

In this activity, you will add a **custom instance method** to your Sequelize `User` model.

The purpose is simple: when a user logs in, we need a clean, reusable way to verify their password **without ever exposing the original password**.

A good backend habit is to keep security logic close to the data it protects. That means password comparison belongs in the **model**, not copied and pasted across routes.

---

## 🧠 Learning Objectives

By the end of this activity, you should be able to:

- Explain what an instance method is in Sequelize
- Add a custom instance method to a model
- Compare a plaintext login attempt to a hashed password securely
- Use `bcrypt` correctly for password comparison

---

## 👤 User Story

- As a user, I want to log in to my account with my password.
- As a developer, I want users to log in securely so password info isn’t compromised.

---

## ✅ Acceptance Criteria

This activity is complete when:

- Your `User` model includes a **custom instance method** (ex: `checkPassword`)
- The instance method compares a user’s login input against the stored **hashed password**
- The method returns a clear result (typically `true` or `false`)

---

## 📌 What You’re Building

You will implement something like this conceptually:

- A user logs in with an email + password
- Your route finds the user by email
- Your model method checks whether the password matches the stored hash

This keeps your route clean and keeps your password logic in one place.

---

## 💡 Helpful Hint

`bcrypt` gives you a safe way to compare a plaintext password with a hashed password.

Look for methods like:

- `bcrypt.compare(...)`
- `bcrypt.compareSync(...)`

For this module, prefer the async version when possible.

---

## 🔍 Reflection Questions

Discuss with your group:

- Why can’t we “decrypt” a password hash?
- Why is it better to put password checking logic in the model instead of the route?
- What would happen if different routes implemented password checks differently?

---

## 🏆 Bonus (Optional)

If you finish early, research and discuss:

- How could Sequelize **static model methods** help DRY up login code?

Example direction:

- A static method like `User.login(email, password)`
- A static method like `User.findByEmail(email)`

Keywords to search:

- "sequelize static method model"
- "DRY authentication node sequelize"

---

## ✅ Summary

This activity reinforces a key backend principle:

> **Security logic should be reusable and consistent.**

A custom instance method helps you keep authentication clean, reliable, and easy to maintain.
