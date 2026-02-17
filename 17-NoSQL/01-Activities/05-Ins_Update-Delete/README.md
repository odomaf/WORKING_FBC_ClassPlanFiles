# 🎯 Instructor Demo — MongoDB Compass: Update & Delete

## 📌 Overview

In this instructor demo, we will use **MongoDB Compass** and the embedded MongoDB shell (mongosh) to perform:

- Updating documents
- Deleting documents
- Using filters correctly
- Using `_id` safely

This builds directly on our previous Create + Read demo.

---

## 🚀 Step 1 — Connect to Local MongoDB

1. Open **MongoDB Compass**
2. Under **New Connection**, click **Connect**
3. Do not modify the connection string (default: `127.0.0.1:27017`)

You are now connected to your local MongoDB instance.

---

## 🖥 Step 2 — Open the Embedded Shell

- Click **MONGOSH** in the bottom-left corner
- The MongoDB shell will open at the bottom of Compass

---

## 🗄 Step 3 — Create or Select Our Database

We will use the same naming pattern as earlier activities:

```
bootcampLibraryDB
```

Run:

```js
use bootcampLibraryDB;
```

If the database does not exist, MongoDB will create it automatically when we insert data.

---

## 📦 Step 4 — Insert a Document

Create (or select) a collection named:

```
bookCollection
```

Insert one document:

```js
db.bookCollection.insertOne({
  title: "Learning MongoDB",
  category: "Database",
});
```

Press **Enter** to execute.

MongoDB will return something like:

```js
{
  acknowledged: true,
  insertedId: ObjectId("64fa8c123abc456def789012")
}
```

⚠️ Take note of the generated `ObjectId`.  
We will use it later to safely delete the document.

---

## 🔍 Step 5 — Verify the Document

To confirm the insert worked:

```js
db.bookCollection.find({});
```

You should see the document along with its `_id`.

---

# ✏️ Updating Documents

## 🔑 Step 6 — Update the Document

To update a document, use `updateOne()`.

Structure:

```js
db.collection.updateOne(filter, updateOperator);
```

We will update the `category` field:

```js
db.bookCollection.updateOne(
  { title: "Learning MongoDB" },
  { $set: { category: "Backend Development" } },
);
```

### Important Concepts

- The **first object** is the filter.
- The filter determines _which_ document is updated.
- `$set` is a MongoDB update operator that modifies specific fields.
- Without a filter, you risk updating multiple documents.

---

## 🔍 Step 7 — Confirm the Update

Run:

```js
db.bookCollection.find({});
```

You should now see:

```
category: "Backend Development"
```

---

# 🗑 Deleting Documents

## 🔑 Step 8 — Delete Using a Filter

To delete one document:

```js
db.bookCollection.deleteOne({
  title: "Learning MongoDB",
});
```

⚠️ This deletes the first document matching the filter.

If multiple documents share the same title, only one will be removed.

---

## 🔒 Safer Delete Using `_id`

The safest method is deleting by unique identifier:

```js
db.bookCollection.deleteOne({
  _id: ObjectId("PASTE-YOUR-UNIQUE-ID-HERE"),
});
```

Why is this safer?

- `_id` is unique
- No accidental multi-document deletes
- More production-safe approach

---

## 🔍 Step 9 — Verify Deletion

Run:

```js
db.bookCollection.find({});
```

If successful, no documents should be returned.

---

# 🧠 Key Concepts Reinforced

| Operation   | Method                 |
| ----------- | ---------------------- |
| Create      | `insertOne()`          |
| Read        | `find()`               |
| Update      | `updateOne()` + `$set` |
| Delete      | `deleteOne()`          |
| Safe Delete | Filter using `_id`     |

---

# ⚠️ Production Awareness

In real applications:

- Always use filters
- Prefer `_id` for updates and deletes
- Avoid operations without conditions
- Be cautious with `updateMany()` and `deleteMany()`

---

# 🏁 What Students Should Understand

After this demo, students should understand:

- How to update specific fields
- How filters protect data
- Why `_id` is important
- How to safely delete documents
- How CRUD maps to MongoDB shell commands

---
