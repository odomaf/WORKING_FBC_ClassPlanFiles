# 📖 Unit 17 — Subdocuments with Mongoose (Library + Books)

## 🎯 Activity Overview

In this activity, you will practice modeling **nested data** in MongoDB using **Mongoose subdocuments**.

You will create a parent document (`Library`) that contains an embedded array of child documents (`books`).

This reinforces:

- Creating a subdocument schema (`bookSchema`)
- Embedding subdocuments inside a parent schema
- Creating a model from a schema
- Seeding a parent document that includes subdocuments
- Verifying nested data via a GET route

---

## 👤 User Story

- As a developer, I want to nest a child document inside a parent document.

---

## ✅ Acceptance Criteria

This activity is complete when:

- You define a new schema named `bookSchema` for the subdocument.
- `bookSchema` includes two properties:
  - `title`
  - `price`
- The `books` subdocument is nested in the parent document schema.
- You create a model named `Library`.
- You create an array of **three** books using `bookSchema`.
- You create a new `Library` document that includes the `books` subdocuments.
- You test the GET route in Insomnia and confirm the books are nested inside the library document.

---

## ▶️ How to Run

From the `Unsolved` folder:

```bash
npm install
npm start
```

---

## 🧪 How to Test

In Insomnia (or Postman):

**GET**

```
http://localhost:3001/libraries
```

Expected:

- A list of libraries
- Each library contains a `books` array
- Each book has `title` and `price`

---

## 📝 Documentation

- Mongoose Subdocuments: https://mongoosejs.com/docs/subdocs.html

---

## 💡 Hint

When is subdocument data saved?

> Subdocuments are saved when the **parent document** is saved.

---

## 🏆 Bonus Challenge

Research:

- What method can you use to remove a subdocument from an array?

Hint: look for `pull()` or removing by `_id`, then saving the parent document.

---
