# 📖 Student Activity: Execute a SQL File in PostgreSQL

In this activity, you will practice running SQL commands from a file using **pgAdmin**.

You will execute a SQL file that creates a database and observe how PostgreSQL responds.

---

## 🎯 Learning Goals

By the end of this activity, you will be able to:

- Run a `.sql` file in PostgreSQL using pgAdmin
- Understand what SQL files are used for
- Recognize database-level SQL commands

💡 **Why this matters**  
In real projects, database setup is often stored in SQL files. Being able to execute these files lets developers quickly recreate databases for new environments, teammates, or deployments.

---

## 🧰 Tools You’ll Use

- **PostgreSQL**
- **pgAdmin**
- **schema.sql**

---

## 📄 Step 1: Review the SQL File

Open the `schema.sql` file in your code editor.

You should see SQL statements similar to:

```sql
DROP DATABASE IF EXISTS sample_db;
CREATE DATABASE sample_db;
```

💡 **Why this matters**  
This file controls the **database lifecycle**. Commands like `DROP DATABASE` are powerful and should always be reviewed before running.

---

## 🗄️ Step 2: Open pgAdmin

1. Open **pgAdmin**
2. Connect to your PostgreSQL server
3. Expand **Databases**

---

## 🧠 Step 3: Open the Query Tool

1. Click on **any existing database** (such as `postgres`)
2. Go to **Tools → Query Tool**

⚠️ **Important**  
Database creation commands must be run while connected to an existing database — not the one you’re creating.

💡 **Why this matters**  
PostgreSQL requires you to be connected to a database in order to create or drop other databases.

---

## ▶️ Step 4: Execute the SQL File

1. In the Query Tool, select **File → Open**
2. Choose `schema.sql`
3. Click **Execute**

You should see messages indicating that the commands ran successfully.

💡 **Why this matters**  
Executing SQL from a file is faster, safer, and more consistent than typing commands manually.

---

## ✅ Acceptance Criteria

- The `schema.sql` file runs without errors
- The `sample_db` database appears in pgAdmin
- You understand what each SQL statement does

---

## ⚠️ Important Notes

- `DROP DATABASE` permanently deletes a database
- Always verify the database name before executing SQL
- Never run SQL files you don’t understand

💡 **Why this matters**  
Mistakes at the database level can’t always be undone.

---

## 🧠 What You Are NOT Required to Do

- Use the `psql` command line
- Memorize terminal commands
- Troubleshoot installation issues

Focus on understanding **what the SQL does**, not how it’s executed.

---

## 🚀 Ready for the Next Step

Next, you’ll start creating tables and inserting data into your database.
