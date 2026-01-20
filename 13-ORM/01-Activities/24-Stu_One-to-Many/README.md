# 🏗️ One-to-Many Association: Readers → Books

In this activity, you will implement a **one-to-many relationship** between `Reader` and `Book`.

Think of it like this:

- A reader can own **many books**
- A book belongs to **one reader**

This is one of the most common relationship patterns in backend development. Once you understand one-to-many, you’ll be ready for more complex relationships like many-to-many.

---

## 🧠 Learning Objectives

By the end of this activity, you should be able to:

- Create a one-to-many association using Sequelize
- Identify where a foreign key should live in a one-to-many relationship
- Return associated data from Sequelize using `include`
- Verify relationships by inspecting JSON responses from API routes

---

## 👤 User Story

- As a book owner, I want to see the books in my collection.

---

## ✅ Acceptance Criteria

This activity is complete when:

1. The `books` table includes a foreign key referencing the `readers` table.
   - In other words, each book record must store a `reader_id`.

2. A `GET` request to either route includes the books owned by the reader:

- `GET /api/readers`
- `GET /api/readers/:id`

Your response should include a `books` array for each reader.

Example shape (fields may vary depending on your model):

```json
{
  "id": 1,
  "name": "Example Reader",
  "email": "reader@example.com",
  "library_card": {
    "id": 2,
    "card_number": "...",
    "reader_id": 1
  },
  "books": [
    {
      "id": 4,
      "title": "Example Book",
      "author": "Example Author",
      "reader_id": 1
    }
  ]
}
```

---

## 🧩 What You Need to Implement

### 1️⃣ Model Association

You will define the relationship in your Sequelize model setup:

- `Reader.hasMany(Book)`
- `Book.belongsTo(Reader)`

This tells Sequelize:

- A reader can have many books
- The **foreign key belongs on the Book model**

### 2️⃣ Include Associated Data in Routes

To return books in a reader response, your `GET` routes must query with `include`.

That means your reader routes should return something like:

- reader info
- library card (if applicable)
- **books array**

---

## 💡 Helpful Hint

When deciding “who belongs to who,” ask yourself:

- If you delete a reader, should their books still exist?
- Which record should store the foreign key?

In this scenario:

✅ Books belong to Readers (books store `reader_id`).

---

## 🔍 Reflection Questions

Discuss with your group:

- Why does the foreign key live on `Book` instead of `Reader`?
- What does `include` do in Sequelize queries?
- What are the pros/cons of eager loading (using `include`)?

---

## 🏆 Bonus (Optional)

Research and discuss:

- As a JavaScript developer using Sequelize, why do you still need to know SQL?

Ideas to consider:

- Debugging queries
- Performance tuning
- Migrations and schema design
- Understanding joins and indexes

---

## ✅ Summary

This activity reinforces a core backend modeling rule:

> **One-to-many means the “many” side stores the foreign key.**

Once this association is working, you’ll be able to build richer APIs that return connected, meaningful data instead of isolated tables.
