# 📐 Unit 17 — Commenting Mongoose Models & Schemas

## 🎯 Activity Overview

In this activity, you will work with a partner to add meaningful comments to code that uses **Mongoose** (an ODM for MongoDB).

The goal is to help a beginner developer understand:

- What a **schema** is and why it exists
- What a **model** is and how it’s used
- How an Express route uses a model to query MongoDB
- How validation and defaults work in Mongoose

You will add comments to:

- `./Unsolved/models/Book.js`
- `./Unsolved/server.js`

---

## 📝 Your Task

Open the files listed above and add comments explaining:

### In `models/Book.js`

- What a schema defines (shape + rules)
- What schema types are (String, Number, Boolean, Date)
- What `required: true` means
- What `default: Date.now` does
- What `mongoose.model()` does
- What `.create()` does
- Why this file exports the `Book` model

### In `server.js`

- What the Express setup does
- What the DB connection file is responsible for
- Why we wait for `db.once('open')` before listening
- What `Book.find({})` returns
- Why we send JSON back to the client

Your comments should be clear, short, and useful — not just repeating the code.

---

## ✅ How to Run

From the `Unsolved` folder:

```bash
npm install
npm start
```

Then test:

```
GET http://localhost:3001/books
```

You should see an array of book documents.

---

## 📝 Documentation

- Mongoose Models: https://mongoosejs.com/docs/models.html
- Mongoose Schemas: https://mongoosejs.com/docs/guide.html
- Mongoose Validation: https://mongoosejs.com/docs/validation.html

---

## 🏆 Bonus Challenge

Research:

- How can you design a **custom validator** using a validation function?
- What kinds of real-world rules might require a custom validator?
  - Example: price must be >= 0
  - Example: title must be at least 3 characters

---

## ✅ Expected Outcome

By the end of this activity:

- `Book.js` is clearly commented and understandable
- `server.js` is clearly commented and understandable
- You can explain the relationship between:
  - MongoDB
  - Mongoose schema
  - Mongoose model
  - Express route

---
