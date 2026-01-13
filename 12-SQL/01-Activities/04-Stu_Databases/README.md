# 📖 Student Activity: Working with Databases in PostgreSQL

In this activity, you will practice **deleting**, **creating**, and **selecting** databases in PostgreSQL using **pgAdmin**.

This builds on the previous activities where you executed SQL files and learned how databases are managed.

---

## 🎯 Learning Goals

By the end of this activity, you will be able to:

- Delete an existing PostgreSQL database
- Create a new PostgreSQL database
- Understand how PostgreSQL switches between databases

💡 **Why this matters**  
In real projects, developers often need to reset databases, create fresh ones for new features, or manage multiple environments (development, testing, production). Understanding database-level commands helps you work confidently and safely.

---

## 🧰 Tools You’ll Use

- **PostgreSQL**
- **pgAdmin**
- **Query Tool**

---

## ⚠️ Important Safety Note

Database-level commands such as `DROP DATABASE` are **destructive**.

Once a database is deleted, **all data inside it is permanently removed**.

Always double-check the database name before running these commands.

---

## 🗑️ Step 1: Delete the Existing Database

1. Open **pgAdmin**
2. Connect to your PostgreSQL server
3. Open the **Query Tool** while connected to an existing database (such as `postgres`)

Run the following SQL:

```sql
DROP DATABASE IF EXISTS sample_db;
```

After running the command:
- Refresh the **Databases** list
- Confirm that `sample_db` no longer appears

💡 **Why this matters**  
Developers often delete databases to reset their environment or start fresh during development.

---

## 🆕 Step 2: Create a New Database

In the same Query Tool, run:

```sql
DROP DATABASE IF EXISTS books_db;
CREATE DATABASE books_db;
```

After executing:
- Refresh the **Databases** list
- Confirm that `books_db` appears

💡 **Why this matters**  
Creating new databases allows you to isolate projects and avoid mixing unrelated data.

---

## 🔄 Step 3: Select the Database for Use

In pgAdmin:
1. Click on the **books_db** database
2. Open **Tools → Query Tool**

> ℹ️ Note  
> In pgAdmin, selecting a database is done by opening the Query Tool for that database.  
> The command `\c books_db` is used in the command line, but **pgAdmin handles this for you automatically**.

💡 **Why this matters**  
Every SQL command runs inside a specific database. Knowing which database you’re connected to prevents accidental mistakes.

---

## ✅ Acceptance Criteria

- `sample_db` no longer appears in the database list
- `books_db` exists in pgAdmin
- You can open the Query Tool while connected to `books_db`

---

## 🧠 Bonus: Understanding RDBMS

PostgreSQL is a **Relational Database Management System (RDBMS)**.

Research and answer the following:
- What is an RDBMS?
- What are common characteristics of relational databases?
- What are examples of other RDBMS systems?

💡 **Why this matters**  
Understanding database types helps you choose the right tool for different kinds of applications.

---

## 🚀 Ready for the Next Step

Next, you’ll begin creating tables and defining relationships between data.
