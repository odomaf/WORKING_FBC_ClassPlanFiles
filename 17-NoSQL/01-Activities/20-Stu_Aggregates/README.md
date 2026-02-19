# 📊 Unit 17 — Debugging Aggregation Pipelines (Mongoose)

## 🎯 Objective

In this activity, you will debug a MongoDB aggregation pipeline using Mongoose.

Your goal is to ensure that summary price statistics are calculated **only for books that are currently in stock**.

---

## 🧾 User Story

AS A developer  
I WANT to calculate summary price statistics for books that are in stock  
SO THAT I can understand the value of available inventory

---

## ❌ Current Issue

The `/books/price-summary` GET route is currently returning summary statistics for **all books**, including books that are not in stock.

This is incorrect behavior.

---

## ✅ Acceptance Criteria

It is complete when:

- Only books where `inStock: true` are included in the summary.
- The route returns:
  - `sum_price`
  - `avg_price`
  - `max_price`
  - `min_price`
- The route is successfully tested in Insomnia.
- No errors are thrown in the console.

---

## 🔎 Steps to Reproduce

1. Install dependencies and start the server:

   npm install  
   npm start

2. Open Insomnia.

3. Test the summary route:

   GET http://localhost:3001/books/price-summary

4. Notice that the summary includes ALL books.

5. Compare the results with:

   GET http://localhost:3001/books

---

## 🧠 Hint

- What MongoDB aggregation pipeline stage filters documents before grouping?
- Which MongoDB stage behaves like a SQL `WHERE` clause?

---

## 🏆 Bonus

Mongoose supports four types of middleware:

- Document middleware
- Model middleware
- Query middleware
- Aggregate middleware

Research what each type does and when you would use them.

---

## 🚀 Goal

Modify the aggregation pipeline so that only in-stock books are included in the summary statistics.
