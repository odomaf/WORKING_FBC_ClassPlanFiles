# 🐛 Debugging Missing Data in the Readers Route

In this activity, you’ll debug an API response that is **technically working** but **missing required data**.

This mirrors real backend work: routes may return data without errors, but the response doesn’t fully meet the client’s needs. Your task is to identify what’s missing and update the logic so the API response is complete and meaningful.

---

## 🎯 Goal

When requesting reader data, the API should return:

- The reader’s information
- The books owned by that reader
- A computed property named **`shortBooks`**

The `shortBooks` value should represent the number of books that have **between 100 and 300 pages**.

---

## ✅ Expected Behavior

A `GET` request to a reader endpoint returns JSON that includes a `shortBooks` property.

Example response shape:

```json
{
  "id": 1,
  "name": "Example Reader",
  "books": [
    { "id": 1, "pages": 250 },
    { "id": 2, "pages": 420 }
  ],
  "shortBooks": 1
}
```

Only books with page counts **between 100 and 300** should be included in the `shortBooks` count.

---

## 🚫 Current Behavior

The reader data is returned successfully, but the response does **not** include the `shortBooks` property.

---

## 🔁 Steps to Reproduce

1. Seed the database:

   `node seeds/seed.js`

2. Start the server:

   `npm start`

3. In Insomnia, send a request:

   `GET /api/readers/1`

4. Observe that the response does **not** contain `shortBooks`.

---

## 🧠 Where to Look

To fix this issue, you’ll likely need to examine:

- The **reader GET route** logic
- How associated book data is queried
- How the final response object is constructed

Remember: Sequelize can fetch data, but **you control how the response is shaped**.

---

## 💡 Helpful Hint

Before solving this with Sequelize, think in SQL terms:

- How would you count books for a reader where `pages BETWEEN 100 AND 300`?
- Would this require a `COUNT(*)` and a `WHERE` clause?

Once you understand the SQL idea, translate that logic into Sequelize.

---

## 🔍 Reflection Questions

Discuss with your group:

- Should this count be calculated in the database or in JavaScript?
- What are the trade-offs of each approach?
- Why might an API include computed fields instead of raw data only?

---

## 🏆 Bonus (Optional)

If you finish early, research and discuss:

- How would you build a **many-to-many relationship** using Sequelize?
- What role does a join table play in many-to-many associations?

Suggested search terms:

- "sequelize many to many"
- "sequelize belongsToMany"
- "join table sequelize"

---

## ✅ Summary

This activity reinforces an important backend concept:

> **An API is responsible for returning complete, useful data — not just data that exists.**

Fixing this bug means thinking beyond “does it work?” and focusing on “does it return what the client actually needs?”
