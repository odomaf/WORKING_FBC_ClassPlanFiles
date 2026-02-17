# 📖 Unit 17 — Using Cursor Methods (sort, skip, limit)

## 🎯 Activity Overview

In this activity, you will work with a partner to control how MongoDB returns results from a `find()` query.

MongoDB’s `find()` method returns a **cursor**, and cursor methods let us shape the results:

- `sort()` → change the order
- `skip()` → omit a number of results (like an offset)
- `limit()` → restrict how many results are returned (like a page size)

This is the foundation for pagination and "top results" queries.

---

## 👤 User Stories

- As a developer, I want to change the order in which read operations return documents.
- As a developer, I want to omit documents and limit the number of returned documents.

---

## ✅ Acceptance Criteria

This activity is complete when:

- The documents are returned in **descending** order (largest to smallest).
- The results are **limited to five** documents.
- The route **skips the largest five** numbers (after sorting).
- You successfully test the route in Insomnia (or Postman) and see the correct results.

---

## 🧪 How to Run and Test

1. In the `Unsolved` folder:

```bash
npm install
npm start
```

2. In Insomnia, send a GET request to:

```
http://localhost:3001/numbers
```

3. Confirm the response shows:

- Exactly **5** documents
- In **descending** order
- Excluding the **top 5 largest** numbers

---

## 📝 Notes / Documentation

- MongoDB Cursor Sort: https://www.mongodb.com/docs/manual/reference/method/cursor.sort/
- MongoDB Cursor Skip: https://www.mongodb.com/docs/manual/reference/method/cursor.skip/
- MongoDB Cursor Limit: https://www.mongodb.com/docs/manual/reference/method/cursor.limit/

---

## 💡 Hints

- Does MongoDB store documents in a guaranteed order by default?
- What happens if two documents have the same value (duplicates)?
- In what order should you apply cursor methods for predictable results?

---

## 🏆 Bonus Challenge

Research:

- What method can you use to increase performance and prevent MongoDB from returning more documents than needed?

Hint: Look into using **projections** with `.project()` to return only specific fields.

---

## ✅ Expected Outcome

When you hit `GET /numbers`, your server should:

1. Find all documents
2. Sort them descending
3. Skip the top 5 largest
4. Return the next 5

---
