# 🐛 Unit 17 — Debugging Embedded Document Queries

## 🎯 Activity Overview

In this activity, you will debug queries that are supposed to retrieve data from **embedded documents** in MongoDB.

The API is already seeded with data, but the queries are not returning the expected results.

Your job is to identify and fix the issue.

This reinforces:

- Querying nested objects using dot notation
- Querying arrays of embedded documents
- Understanding how MongoDB stores embedded data
- Debugging incorrect filters

---

## 👤 User Stories

- As a bookstore owner, I want to retrieve books priced under $10.
- As a bookstore owner, I want to retrieve books that have at least one featured author.

---

## 🧪 Steps to Reproduce the Issue

1. Navigate into the `Unsolved` folder.
2. Run:

```bash
npm install
npm start
```

3. In Insomnia (or Postman), test:

**GET**

```
http://localhost:3001/books/price-under-10
```

You should receive books under $10 — but you won’t.

---

**GET**

```
http://localhost:3001/books/featured
```

You should receive books with at least one featured author — but you won’t.

---

## 🐞 The Problem

The server is attempting to query embedded documents, but the filters are incorrect.

Your job is to fix the queries so they correctly access:

- A nested object (`information.price`)
- A nested array of embedded documents (`authors.featured`)

---

## 💡 Hints

- How do you access an object inside another object in JavaScript?
- What notation do you use for nested fields in MongoDB?
- When querying arrays of embedded documents, do you need to know the index?

---

## 🧠 Concepts to Reinforce

| Concept                | Example               |
| ---------------------- | --------------------- |
| Dot Notation           | `'information.price'` |
| Array of Embedded Docs | `'authors.featured'`  |
| Comparison Operator    | `$lt`, `$gte`, etc.   |
| Filtering              | `.find({ filter })`   |

---

## 🏆 Bonus Challenge

Research:

- How would you use `$elemMatch` to query arrays of embedded documents?
- When would `$elemMatch` be required instead of dot notation?

---

## ✅ Expected Outcome

After fixing the queries:

- `/books/price-under-10` returns books priced under $10
- `/books/featured` returns books with at least one featured author

---
