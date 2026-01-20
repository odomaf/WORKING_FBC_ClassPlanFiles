# 📐 Understanding One-to-One Associations (Student Activity)

In this activity, you will focus on **reading and explaining how a one-to-one relationship is modeled and used in Sequelize**.

Associations are how we represent real-world relationships between data. Instead of thinking in terms of tables alone, you will begin thinking in terms of **connected entities** — a core backend development skill.

---

## 🧠 Learning Objectives

By the end of this activity, you should be able to:

- Explain what a one-to-one association represents conceptually
- Identify where Sequelize associations are defined
- Describe how models become linked through foreign keys
- Trace how associated data is accessed through API routes

---

## 📂 Your Task

Work with your group to add **clear, meaningful comments** to the following files:

```
Unsolved/models/index.js
Unsolved/models/LibraryCard.js
Unsolved/routes/api/readerRoutes.js
Unsolved/routes/api/libraryCardRoutes.js
```

Your comments should explain:

- How the one-to-one relationship is defined between models
- Which model owns the foreign key and why
- How Sequelize uses the association during queries
- How the routes create, read, or reference related data

Focus on explaining the **relationship and data flow**, not just the syntax.

---

## 🧠 Concept Focus: One-to-One Relationships

A one-to-one relationship means:

- One record in Table A is associated with **exactly one** record in Table B
- One record in Table B belongs to **only one** record in Table A

In this example, a **Reader** has one **LibraryCard**, and a **LibraryCard** belongs to one **Reader**.

---

## 📝 Reference Material

Use the official Sequelize documentation to guide your understanding:

- Sequelize – Associations
  [https://sequelize.org/master/manual/assocs.html](https://sequelize.org/master/manual/assocs.html)

You do not need to memorize every association option — focus on recognizing the pattern.

---

## 🔍 Reflection Questions

Discuss with your group:

- Why is a one-to-one association better than merging all fields into one table?
- Where should the foreign key live, and why?
- How do associations simplify queries compared to manual joins?

---

## 🏆 Bonus (Optional)

If you finish early, research and discuss:

- What is an **Entity Relationship Diagram (ERD)**?
- How would this one-to-one relationship be represented in an ERD?

You are not required to draw one yet — focus on understanding the concept.

---

## ✅ Summary

This activity introduces a critical data modeling idea:

> **Associations allow databases to model real-world relationships clearly and efficiently.**

By learning to read and explain one-to-one associations now, you’ll be prepared to work with more complex relationships later, such as one-to-many and many-to-many.
