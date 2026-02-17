# 📐 Unit 17 — Commenting Create & Read with MongoDB + Express

## 🎯 Activity Overview

In this activity, you will work with a partner to analyze and document an Express server that connects to MongoDB using the official MongoDB Node Driver.

Your goal is to **add meaningful comments** that clearly explain what each section of the code is doing.

This reinforces:

- Connecting to MongoDB using `MongoClient`
- Creating documents with `insertOne()`
- Inserting multiple documents with `insertMany()`
- Retrieving documents using `find()` and `toArray()`
- Understanding how MongoDB integrates with an Express API

---

## 👤 User Story

- As a developer, I want to understand how MongoDB connects to an Express application.
- As a developer, I want to clearly document the purpose of each section of code so that future developers (including myself) can maintain it.

---

## 📝 Your Task

Open:

```
./Unsolved/server.js
```

Add clear, concise comments explaining:

- What each imported module does
- What `MongoClient` is responsible for
- What the connection string represents
- What `client.connect()` does
- Why the server starts _after_ the database connects
- What `express.json()` middleware does
- What each route (`POST`, `GET`) is responsible for
- What `insertOne()`, `insertMany()`, and `find()` do
- Why `.toArray()` is necessary
- What the `.then()` and `.catch()` blocks handle

Your comments should help a beginner understand:

- How data flows from the client
- Into Express
- Into MongoDB
- Back to the client

---

## 🧠 Concepts to Reinforce

While commenting, make sure you understand:

| Method             | Purpose                                 |
| ------------------ | --------------------------------------- |
| `MongoClient`      | Connects Node.js to MongoDB             |
| `client.connect()` | Establishes database connection         |
| `db.collection()`  | Selects or creates a collection         |
| `insertOne()`      | Inserts a single document               |
| `insertMany()`     | Inserts multiple documents              |
| `find()`           | Retrieves documents (like `SELECT *`)   |
| `toArray()`        | Converts Mongo cursor into usable array |
| `express.json()`   | Parses incoming JSON request bodies     |

---

## 🔍 What to Look For

When reviewing the routes:

### POST `/books`

- What data is expected in the request body?
- How is that data inserted into MongoDB?

### POST `/books/seed`

- What is the purpose of `insertMany()`?
- When would seeding data be useful?

### GET `/books`

- Why does `find()` return a cursor?
- Why must we call `.toArray()`?

---

## 🧪 How to Test

After adding comments:

1. Run:

```
npm install
npm start
```

2. Use Insomnia or Postman to test:

**Create a book**

POST `http://localhost:3001/books`

```json
{
  "title": "MongoDB for Beginners",
  "author": "Codeacademy Student"
}
```

**Read all books**

GET `http://localhost:3001/books`

---

## 🏆 Bonus Challenge

Research and discuss with your partner:

### What is **atomicity** in databases?

- What does it mean for an operation to be atomic?
- Why is atomicity important when performing write operations?
- Are single-document writes in MongoDB atomic?
- What happens during partial failures?

Understanding atomicity is critical when building real-world systems.

---

## 📌 Expected Outcome

By the end of this activity:

- Your `server.js` file should be fully commented.
- A beginner developer should be able to read your comments and understand:
  - How the app connects to MongoDB
  - How data is inserted
  - How data is retrieved
  - How Express and MongoDB work together

---
