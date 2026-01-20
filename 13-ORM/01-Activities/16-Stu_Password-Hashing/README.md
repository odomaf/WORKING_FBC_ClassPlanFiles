# 📐 Understanding the Login Route and Add Comments (Student Activity)

In this activity, you will focus on **reading and understanding how a login route works** rather than writing new logic from scratch.

Authentication code is some of the most important — and most commonly reused — code in backend applications. Being able to **read, explain, and reason about login logic** is a critical developer skill.

---

## 🧠 Learning Objectives

By the end of this activity, you should be able to:

- Explain the purpose of a login route in an API
- Describe how user credentials are verified
- Understand how password hashing works at a high level
- Explain the role `bcrypt` plays in comparing passwords

---

## 📂 Your Task

Work with your group to add **clear, meaningful comments** to the code found in:

```
Unsolved/routes/api/userRoutes.js
```

Your comments should explain:

- What data is coming from the request
- How the application looks up a user in the database
- How passwords are compared securely
- What response is sent back when login succeeds or fails

Focus on explaining the **intent** of the code, not just repeating what each line does.

---

## 📝 Reference Material

Use the official bcrypt documentation to guide your understanding:

- bcrypt (npm documentation)
  [https://www.npmjs.com/package/bcrypt](https://www.npmjs.com/package/bcrypt)

You do not need to understand the internal cryptography — focus on _how_ bcrypt is used, not _how it works internally_.

---

## 🔍 Reflection Questions

Discuss with your group:

- Why should passwords never be stored in plain text?
- Why do we compare hashed passwords instead of decrypting them?
- What information should (and should not) be included in a login response?

---

## 🏆 Bonus (Optional)

If you finish early, research and discuss:

- How can a web application persist a login state?
- What are some common approaches to authentication (sessions, cookies, tokens)?

You are not required to implement persistence yet — focus on understanding the concepts.

---

## ✅ Summary

This activity reinforces an important backend principle:

> **Authentication code should be secure, intentional, and straight forward to reason about.**

By learning to read and explain login logic now, you’ll be better prepared to build and secure your own authentication systems later.
