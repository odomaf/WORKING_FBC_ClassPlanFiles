# 🐛 Student Activity: Fixing an UPDATE Statement in PostgreSQL

In this activity, you will debug a SQL issue where **updating data affects every row in a table instead of just one**.

You will identify the problem, fix it, and confirm the correct behavior using a `SELECT` statement.

---

## 🎯 Learning Goals

By the end of this activity, you will be able to:

- Update a single row in a table using SQL
- Explain why `WHERE` clauses are critical in `UPDATE` statements
- Debug unexpected database behavior
- Safely verify changes using `SELECT`

💡 **Why this matters**  
One missing clause in an `UPDATE` statement can accidentally change **every row in a table**. This is one of the most common — and most dangerous — SQL mistakes developers make.

---

## 🧰 Tools You’ll Use

- **PostgreSQL**
- **pgAdmin**
- **Query Tool**
- SQL files in the `Unsolved/db` folder

---

## ❗ The Bug

### Expected Behavior
Only the row with an `id` of `2` should update its `name` to:

```
Candide
```

### Actual Behavior
Every row in the table updates to the same value.

💡 **Why this matters**  
This kind of bug can corrupt large amounts of data if not caught early.

---

## 🧪 Step 1: Set Up the Database

1. Open **pgAdmin**
2. Connect to your PostgreSQL server
3. Open the **Query Tool** connected to an existing database (such as `postgres`)

Run the SQL from `schema.sql` to:
- Create the `books_db` database
- Create the `fiction` table

Then open the Query Tool for **books_db**.

---

## 🧾 Step 2: Insert Sample Data

Run the SQL from `insert.sql`:

```sql
INSERT INTO fiction (id, name)
VALUES
    (001, 'To Kill a Mockingbird'),
    (002, '100 Years of Solitude'),
    (003, 'War and Peace');
```

Verify the data:

```sql
SELECT * FROM fiction;
```

💡 **Why this matters**  
Always confirm your starting data before running update or delete operations.

---

## 🔍 Step 3: Investigate the UPDATE Statement

Review the following SQL:

```sql
UPDATE fiction
SET name = 'Candide';
```

❌ This statement updates **every row** in the table.

💡 **Why this matters**  
Without a `WHERE` clause, PostgreSQL assumes you want to update **all rows**.

---

## 🛠️ Step 4: Fix the Bug

Update the SQL so that **only one row** is modified:

```sql
UPDATE fiction
SET name = 'Candide'
WHERE id = 2;
```

Run the statement.

---

## ✅ Step 5: Verify the Fix

Run:

```sql
SELECT * FROM fiction;
```

You should see:
- Only the row with `id = 2` updated
- All other rows unchanged

💡 **Why this matters**  
`SELECT` is your safety net. Use it to confirm every `UPDATE` or `DELETE`.

---

## ✅ Acceptance Criteria

- Only one row is updated
- The row with `id = 2` has the value `Candide`
- No other rows are modified

---

## 🧠 Key Takeaway

> **Always use a `WHERE` clause with `UPDATE` and `DELETE` statements.**

Many developers follow this safe habit:
1. Write the `SELECT` statement first
2. Confirm it returns the correct rows
3. Convert it into an `UPDATE` or `DELETE`

---

## 🚀 Ready for the Next Step

Next, you’ll practice **deleting specific rows** and learn how to undo mistakes using transactions.
