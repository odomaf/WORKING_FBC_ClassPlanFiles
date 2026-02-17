# 🎯 Instructor Demo: Exploring MongoDB with Compass

## 📌 Overview

In this instructor demo, we will use **MongoDB Compass**, the official GUI for MongoDB, to explore and interact with a NoSQL database visually.

While we can work with MongoDB through the terminal (`mongosh`), Compass allows us to:

- View databases
- Inspect collections
- Insert documents
- Perform CRUD operations visually
- Understand how MongoDB structures data

If you have not already installed Compass, download it here:

🔗 https://www.mongodb.com/try/download/compass

---

## 🚀 Step 1 — Connect to the Local MongoDB Server

Before interacting with data, we must connect to our MongoDB instance.

By default, a local MongoDB server runs on:

```
127.0.0.1:27017
```

### Instructions:

1. Open **MongoDB Compass**
2. Under **New Connection**, click **Connect**
3. Do not modify the connection string (default settings are correct)
4. After connecting, verify the top-left corner shows:

```
127.0.0.1:27017
```

You are now connected to your local MongoDB server.

---

## 🖥 Step 2 — Open the MongoDB Shell (mongosh)

Compass includes an integrated MongoDB shell.

1. In the bottom-left corner, click **MONGOSH**
2. A shell panel will open at the bottom of the screen

We will now create and interact with a database using shell commands.

---

## 🗄 Step 3 — Create a Database

In MongoDB, we create (or select) a database using the `use` command.

### Important Concept

The `use` command performs two actions:

- If the database already exists → it selects it
- If the database does not exist → it creates and selects it

---

### Create a New Database

We will create a database called:

```
bootcampDB
```

Run the following in the shell:

```js
use bootcampDB;
```

You are now working inside `bootcampDB`.

---

## 📦 Step 4 — Create a Collection and Insert a Document

In MongoDB:

- Data is stored in **collections**
- Collections store **documents**
- Documents are JSON-like objects

Unlike SQL, we do not create tables first.  
MongoDB creates collections automatically when we insert data.

---

### Insert a Document

We will create a collection named:

```
studentCollection
```

Insert one document:

```js
db.studentCollection.insertOne({
  firstName: "Avery",
  track: "Full-Stack",
  currentUnit: 17,
  focus: "NoSQL"
});
```

### Breakdown

- `db` → current database
- `studentCollection` → collection name
- `insertOne()` → inserts a single document
- `{ ... }` → document data

---

### Successful Insert Response

When successful, MongoDB returns something similar to:

```js
{
  acknowledged: true,
  insertedId: ObjectId("64fa8c123abc456def789012")
}
```

Notice:

- MongoDB automatically creates an `_id`
- `_id` serves as the document’s unique identifier

This replaces SQL-style auto-incrementing IDs.

---

## 🔍 Step 5 — Retrieve the Document

To fetch documents, use the `find()` method:

```js
db.studentCollection.find();
```

The returned document will include the automatically generated `_id` field.

---

## 🧭 Step 6 — Explore the Data Using Compass

Now use the visual interface.

### 1️⃣ Refresh the Database List

- Click **Refresh** under `127.0.0.1:27017`
- You should now see `bootcampDB`

### 2️⃣ Expand the Database

- Click the arrow next to `bootcampDB`
- Select `studentCollection`

### 3️⃣ View the Document

- The document appears in the **Documents** tab
- From here you can:
  - Edit the document
  - Add new fields
  - Delete the document
  - Filter results using the Find bar

---

## 🧠 Key NoSQL Concepts Reinforced

| Concept | Explanation |
|----------|------------|
| Database | Container for collections |
| Collection | Group of documents (similar to a table in SQL) |
| Document | JSON-like object storing data |
| `_id` | Unique identifier automatically generated |
| Schema | Flexible by default (not strictly enforced) |

---

## 🔄 Comparing SQL and MongoDB

Students previously worked with PostgreSQL and Sequelize. Here is how the concepts map:

| SQL | MongoDB |
|------|----------|
| Table | Collection |
| Row | Document |
| Column | Field |
| Primary Key | `_id` |
| Fixed Schema | Flexible Schema |

---

## 🏁 What’s Next?

In upcoming lessons, we will:

- Perform full CRUD operations
- Connect MongoDB to an Express server
- Use Mongoose for schema modeling
- Build API routes backed by MongoDB

MongoDB Compass helps us understand the structure visually before integrating it into our applications.

---
