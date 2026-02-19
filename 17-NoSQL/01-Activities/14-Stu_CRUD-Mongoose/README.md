# 📖 Unit 17 — CRUD with Mongoose: Update a Document (PUT)

## 🎯 Activity Overview

In this activity, you will work with a partner to implement an **UPDATE** route using Mongoose.

You will add a `PUT` route that:

- Finds one `Genre` document by its current `name`
- Updates **only** the `name` field using the request body
- Returns the **updated** document in the response

This reinforces:

- Mongoose CRUD methods (`findOneAndUpdate`)
- Route parameters (`/genres/:name`)
- Request bodies (`req.body`)
- Returning the updated document with `{ new: true }`

---

## 👤 User Story

- As a developer, I want to implement a `PUT` route that finds a single genre document and updates its name using a Mongoose CRUD method.

---

## ✅ Acceptance Criteria

This activity is complete when:

- A Mongoose CRUD method is used to select **one** document with the specified `name` (from the route param) and update it.
- The updated document returned by the API has a `name` value that matches the request body.
- Only the `name` property is updated (no other fields should change).
- You test the `PUT` route in Insomnia (or Postman) and the **updated** document is returned.

---

## 🧪 How to Run

From the `Unsolved` folder:

```bash
npm install
npm start
```

---

## 🧪 How to Test in Insomnia

### 1) View available genres

**GET**

```
http://localhost:3001/genres
```

Pick one existing name from the response (ex: `"Kids"`).

### 2) Update a genre name

**PUT**

```
http://localhost:3001/genres/Kids
```

Body (JSON):

```json
{
  "name": "Young Adult"
}
```

Expected:

- Response shows the updated document
- The `name` is now `"Young Adult"`

---

## 📝 Documentation

- Mongoose `findOneAndUpdate()`: https://mongoosejs.com/docs/tutorials/findoneandupdate.html

---

## 💡 Hint

How can you set an option so that the updated document is returned instead of the original?

> Look for the `{ new: true }` option.

---

## 🏆 Bonus Challenge

Research:

- What’s the difference between `insert()`, `insertMany()`, and `create()`?
- When would you use each method?

---
