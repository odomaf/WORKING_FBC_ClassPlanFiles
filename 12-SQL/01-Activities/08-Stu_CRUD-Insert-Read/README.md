# 📐 Student Activity: Add Comments to Selecting and Inserting Data Using PostgreSQL

In this activity, you will **read and explain SQL code** that inserts data into a table and retrieves it using a `SELECT` statement.

Your goal is to understand **what each SQL statement does**, not just run it.

---

## 🎯 Learning Goals

By the end of this activity, you will be able to:

- Explain what an `INSERT` statement does
- Explain what a `SELECT` statement does
- Understand how tables receive and return data
- Read SQL code and describe its behavior in plain English

💡 **Why this matters**  
Professional developers spend more time **reading existing code** than writing new code. Being able to explain SQL you didn’t write is a critical real-world skill.

---

## 🧰 Tools You’ll Use

- **PostgreSQL**
- **pgAdmin**
- **Query Tool**
- SQL files in the `Unsolved/db` folder

---

## 📄 File 1: insert-select.sql

Add comments in the SQL files in `insert-select.sql` with your own explanations added.

```sql
INSERT INTO biographies (id, name)
VALUES
    (001, 'Diary of Anne Frank'),
    (002, 'Frida: A Biography of Frida Kahlo'),
    (003, 'Long Walk to Freedom');

SELECT * FROM biographies;
```

💡 **Why this matters**  
`INSERT` adds data to a table, while `SELECT` retrieves it. These two operations form the backbone of nearly every database-driven application.

---

## 📄 File 2: schema.sql

Add comments in the SQL code from `schema.sql` with own explanations added.

```sql
DROP DATABASE IF EXISTS books_db;
CREATE DATABASE books_db;

CREATE TABLE biographies (
  id INTEGER NOT NULL,
  name VARCHAR(100) NOT NULL
);
```

💡 **Why this matters**  
This file defines the **structure** of the database. Without a schema, PostgreSQL would not know how to store or validate data.

---

## ✅ What You Should Be Able to Explain

After completing this activity, you should be able to answer:

- What does `INSERT INTO` do?
- What does `SELECT * FROM` do?
- Why are `NOT NULL` constraints useful?
- What happens if you try to insert data that violates the table structure?

---

## 🏆 Bonus: Data Operations in PostgreSQL

Research and list the main operations you can perform on data in PostgreSQL.

Examples include:
- Creating data
- Reading data
- Updating data
- Deleting data

💡 **Why this matters**  
These operations are commonly referred to as **CRUD**, a concept used across all databases and backend systems.

---

## 🚀 Ready for the Next Step

Next, you’ll practice updating and deleting existing data using SQL.
