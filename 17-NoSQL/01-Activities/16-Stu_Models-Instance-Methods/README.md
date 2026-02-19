# 🏗️ Unit 17 — Implement Mongoose Instance Methods

## 🎯 Activity Overview

In this activity, you will implement a **custom instance method** on a Mongoose model.

Instance methods allow you to define behavior that belongs to individual documents.

You will:

- Define a schema
- Attach a custom method to that schema
- Create a model
- Create a document instance
- Call the instance method

---

## 👤 User Story

- As a developer, I want to perform an action on a specific instance of a Mongoose model.

---

## ✅ Acceptance Criteria

This activity is complete when:

- A schema named `bookSchema` is defined.
- The schema contains three properties:
  - `title`
  - `author`
  - `price`
- A function named `getDiscount` is added to the schema’s `methods` object.
- The `getDiscount` method:
  - Reduces the price by 50%
  - Logs the book’s title and the discounted price
- A model named `Book` is created.
- An instance of the model named `discountedBook` is created.
- Running:

```bash
node models/Book.js
```

- Logs the correct discounted price to the console.

---

## 💡 Hint

What is the difference between:

- An **instance method** (lives on a document)
- A **static method** (lives on the model itself)

Remember:

- Instance methods use `schema.methods`
- Static methods use `schema.statics`

---

## 🏆 Bonus Challenge

Research:

- How can you add **query helper methods** to extend Mongoose’s chainable query builder API?

Example:

```js
Book.find().byPriceRange(10, 20);
```

---

## ✅ Expected Output

When you run:

```bash
node models/Book.js
```

You should see something like:

```
📘 Book: Oh the Places You Will Go!
💰 Discounted Price: 50
```

---
