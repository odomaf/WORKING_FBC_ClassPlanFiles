# 📖 Unit 17 — Create and View Data Using MongoDB Compass

## 🎯 Activity Overview

In this activity, you will work with a partner to create a MongoDB database, insert data into a collection, and explore that data visually using **MongoDB Compass**.

You will use the built-in MongoDB shell (mongosh) inside Compass to create and modify documents.

This exercise reinforces:

- Creating a MongoDB database
- Creating a collection
- Inserting documents
- Viewing data visually
- Understanding how `_id` works
- Modifying existing documents

---

## 👤 User Stories

- As a developer, I want to create a MongoDB database to store data.
- As a developer, I want to insert a document into a collection so that I can visually explore it using MongoDB Compass.

---

## ✅ Acceptance Criteria

It is complete when:

- You click **Connect** in MongoDB Compass to connect to your local server (`127.0.0.1:27017`).

> Note: You do NOT need to paste a connection string. Use the default connection and click Connect.

- You create a new local database named:

```
bootcampLibraryDB
```

using the embedded MongoDB shell (mongosh).

- You create a new collection named:

```
resourceCollection
```

- You insert a document that includes a field named:

```
title
```

and provide a value for that field.

- After refreshing Compass, `bootcampLibraryDB` appears in the list of databases.

- When you open `resourceCollection`, your document is visible in the **Documents** tab.

- The document contains an automatically generated `_id` field.

- You modify the existing document by adding a new field named:

```
category
```

and provide a value for it.

---

## 🛠 Suggested Workflow

### Step 1 — Connect to MongoDB

- Open MongoDB Compass
- Click **Connect**
- Confirm connection to `127.0.0.1:27017`

---

### Step 2 — Open the Embedded Shell

- Click **MONGOSH** in the bottom-left corner
- This opens the MongoDB shell inside Compass

---

### Step 3 — Create the Database

Use the `use` command:

```js
use bootcampLibraryDB;
```

Remember:

- If the database does not exist → MongoDB creates it
- If it exists → MongoDB selects it

---

### Step 4 — Insert a Document

Insert one document into `resourceCollection`:

```js
db.resourceCollection.insertOne({
  title: "Intro to NoSQL",
});
```

After pressing Enter, MongoDB will return an acknowledgment and an `insertedId`.

---

### Step 5 — Refresh and Explore

- Click **Refresh**
- Expand `bootcampLibraryDB`
- Click `resourceCollection`
- Open the **Documents** tab

You should see:

- Your `title` field
- An automatically generated `_id`

---

### Step 6 — Modify the Document

Using either the shell or the visual editor in Compass, add a new field:

```js
category: "Database";
```

Save the document and confirm the change appears in the Documents tab.

---

## 🧠 Key Concepts Reinforced

- MongoDB uses **collections** instead of tables
- MongoDB stores **documents** instead of rows
- Documents are JSON-like objects
- MongoDB automatically generates an `_id`
- MongoDB has a flexible schema

---

## 💡 Hints

- What shell command selects or creates a database?
- What method inserts a single document?
- What method retrieves documents?

---

## 🏆 Bonus Challenge

If you complete the activity early, discuss with your partner:

- How would you insert multiple documents at once?
- How would you delete multiple documents at once?
- When would bulk operations be useful in real-world applications?

Research:

- `insertMany()`
- `deleteMany()`
- Bulk write operations

---

## 📷 Expected Outcome

After completing this activity:

- You should see `bootcampLibraryDB` in Compass
- `resourceCollection` should contain at least one document
- The document should include:
  - `_id`
  - `title`
  - `category`

---

End of Activity.
