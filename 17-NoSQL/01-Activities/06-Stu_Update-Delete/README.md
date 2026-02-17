# 🏗️ Unit 17 — Delete Data with MongoDB + Express

## 🎯 Activity Overview

In this activity, you’ll work with a partner to implement a **DELETE** route in an Express API backed by MongoDB.

Your goal is to delete **one specific document** from a MongoDB collection using its unique `_id`.

This reinforces:

- Route parameters in Express (`/books/:id`)
- Converting an `_id` string into a MongoDB `ObjectId`
- Safe deletes using filters (so you don’t delete the wrong records)
- Returning useful feedback to the client (deleted vs not found)

---

## 👤 User Story

- As a developer, I want to be able to delete a single existing document in a MongoDB database.

---

## ✅ Acceptance Criteria

This activity is complete when:

- You add a `DELETE /books/:id` route that:
  - Reads the `id` from the route parameter
  - Converts it to an `ObjectId`
  - Uses `deleteOne()` with a filter `{ _id: ObjectId(id) }`
  - Deletes **only** the matching document

- You test the route using Insomnia (or Postman) and confirm:
  - The document you targeted is deleted
  - No other documents are changed
  - If the `_id` doesn’t exist, the API returns a “not found” style message

---

## 🧪 How to Test (Recommended Flow)

### 1) Start the server

```bash
npm install
npm start
```

### 2) Create a book

**POST** `http://localhost:3001/books`

```json
{
  "title": "Learning MongoDB",
  "author": "Bootcamp Student"
}
```

### 3) List all books

**GET** `http://localhost:3001/books`

Copy the `_id` value from the response.

### 4) Delete by `_id`

**DELETE** `http://localhost:3001/books/<PASTE_ID_HERE>`

### 5) Verify the deletion

Run **GET** `/books` again and confirm that book is gone.

---

## 💡 Hints

- Why is it important to include a filter when updating or deleting documents?
- Why do you need to wrap the route parameter in `new ObjectId(...)`?
- When deleting a document, how can you tell the client whether a document was actually deleted?
  - Hint: check `deletedCount`

---

## 🏆 Bonus Challenge

Research and discuss:

- What are **indexes** in MongoDB?
- How do indexes make queries faster?
- What is the tradeoff of adding many indexes?

---

## ✅ Expected Outcome

By the end, your API should support:

- `POST /books` (create)
- `GET /books` (read)
- `DELETE /books/:id` (delete one by `_id`)

---

