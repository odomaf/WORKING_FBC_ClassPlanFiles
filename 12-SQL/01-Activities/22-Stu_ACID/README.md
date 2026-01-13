# 🧾 Student Activity: ACID + Transactions in PostgreSQL (Library Database)

In this activity, you’ll make sure multiple database inserts happen as **one all‑or‑nothing operation** (a transaction).  
If any part fails, nothing should be partially saved.

You’ll use a PostgreSQL **`DO $$ ... END $$`** block with an **`EXCEPTION`** handler to keep your database consistent.

---

## 🎯 Learning Goals

By the end of this activity, you will be able to:

- Explain what **ACID** means (at a high level)
- Wrap multiple inserts into a single “all‑or‑nothing” operation
- Use a `DO $$ ... END $$` block to run a multi‑statement script
- Use `EXCEPTION` + `RAISE NOTICE` to handle errors and log outcomes

💡 **Why this matters**  
In real systems (banks, ecommerce orders, user signups), partial inserts can create broken data. Transactions are how databases protect you from ending up in a “half-finished” state.

---

## 🧰 Tools You’ll Use

- **PostgreSQL**
- **pgAdmin**
- **Query Tool**
- `Unsolved/db/transaction.sql`

⚠️ **pgAdmin Note**  
Commands like `\c library;` are command-line only. In pgAdmin, you “select” a database by opening the Query Tool for that database.

---

## 🧠 ACID (Quick Definitions)

- **A — Atomicity:** All steps succeed, or none do.
- **C — Consistency:** Rules/constraints stay true before and after the transaction.
- **I — Isolation:** Concurrent transactions don’t corrupt each other’s work.
- **D — Durability:** Once committed, the data persists (even if the system crashes).

💡 **Why this matters**  
ACID is the reason relational databases are trusted for critical systems.

---

## ✅ What You’re Building

You have two tables:

- `books(book_id, book_name)`
- `authors(author_id, author_name)`

You want inserts into **both** tables to behave like one unit:

- If inserting books fails → authors should NOT insert
- If inserting authors fails → books should NOT insert

---

## 🐛 Common Confusion (Important)

### “Can I `ROLLBACK` inside a `DO $$ ... END $$` block?”
In PostgreSQL, **transaction control commands** like `COMMIT` and `ROLLBACK` are **not allowed inside a `DO` block**.

Instead:
- The `DO` block runs inside the current transaction
- If an error occurs, PostgreSQL rolls back the work inside the block automatically
- With an `EXCEPTION` handler, you can catch the error and log it

💡 **Why this matters**  
This prevents students from thinking “ROLLBACK always works anywhere.” In PostgreSQL, *where* you can commit/rollback depends on context.

---

## 🛠️ Your Task (What to Change)

Open:

```
Unsolved/db/transaction.sql
```

Find the section:

```sql
-- TODO: Add a transaction block here
```

Wrap BOTH INSERT statements in a `DO $$ ... END $$` block that:

1. Runs the inserts
2. If successful, prints a success message with `RAISE NOTICE`
3. If an error occurs, catches it with `EXCEPTION` and prints the error message

---

## ✅ Target Pattern (Use This)

```sql
DO $$
BEGIN
  INSERT INTO books (book_id, book_name)
  VALUES
    (1, 'Pride and Prejudice'),
    (2, 'To Kill a Mockingbird'),
    (3, 'The Great Gatsby');

  INSERT INTO authors (author_id, author_name)
  VALUES
    (10, 'Jane Austen'),
    (11, 'Harper Lee');

  RAISE NOTICE 'Transaction complete: books + authors inserted';
EXCEPTION
  WHEN OTHERS THEN
    RAISE NOTICE 'Transaction failed: %', SQLERRM;
    -- No explicit ROLLBACK here (PostgreSQL handles rollback for the failed block)
END $$;
```

💡 **Why this matters**  
If anything fails in the block, the changes inside the block are not partially saved.

---

## ✅ How to Test Your Work (Quick Checks)

After running your script, run:

```sql
SELECT * FROM books;
SELECT * FROM authors;
```

### Test an error on purpose (recommended)
Try inserting a duplicate primary key, like running the same inserts twice.

You should see:
- An error notice
- No partial extra rows inserted

---

## ✅ Acceptance Criteria (Checklist)

- A `DO $$ ... END $$` block wraps both inserts
- `EXCEPTION` handles errors
- `RAISE NOTICE` logs success or failure
- On success: both tables populate
- On failure: no partial inserts remain

---

## 🏆 Bonus 1: Many-to-Many (Books ↔ Authors)

A book can have multiple authors, and an author can write multiple books.  
That’s a **many-to-many** relationship.

To model that, you typically add a junction table like:

- `book_authors(book_id, author_id)`

---

## 🏆 Bonus 2: Log More Error Details

Research:
- `SQLSTATE`
- `GET STACKED DIAGNOSTICS` (advanced)

💡 **Why this matters**  
In real debugging, you’ll want more than “it failed.” You’ll want the exact reason.

---

## 🚀 Ready for the Next Step

Next, you’ll apply transactions to a more realistic workflow, like:
- creating an order
- adding order items
- updating inventory counts
