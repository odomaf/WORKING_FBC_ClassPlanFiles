# 🐛 Student Debug Activity: Delete Query Not Removing a Row (PostgreSQL + Node.js)

In this activity, you’ll debug an Express + PostgreSQL app where a DELETE query is supposed to remove a row from the `favorite_books` table.

---

## 🎯 Learning Goals

By the end of this activity, you will be able to:

- Run a parameterized `DELETE` query using `node-postgres` (`pg`)
- Explain what `$1` means in a query
- Fix common causes of SQL “parse” errors when switching databases
- Verify results by querying the database after a change

💡 **Why this matters**  
Deleting the wrong data (or failing to delete anything) is a real-world issue. Parameterized queries help prevent SQL injection and ensure your query behaves safely and predictably.

---

## 🧰 Tools You’ll Use

- PostgreSQL (via pgAdmin or psql)
- Node.js
- `pg` (node-postgres) library
- `schema.sql`, `seeds.sql`, `server.js`

---

## ✅ Setup Steps

1) Create the database and table:

- Run `db/schema.sql` in **psql** or **pgAdmin**  
  (Note: `\c books_db` is command-line only; in pgAdmin you select the database by opening Query Tool for `books_db`.)

2) Seed the table:

- Run `db/seeds.sql`

3) Install dependencies:

```sh
npm install
```

4) Run the server:

```sh
node server.js
```

---

## 🔍 What `$1` Means (Parameterized Queries)

In `pg`, placeholders use **$1, $2, $3...**

Example:

```js
pool.query(
  'DELETE FROM favorite_books WHERE id = $1',
  [2]
);
```

- `$1` means: “Use the first value from the array of parameters”
- The array `[2]` supplies that value

💡 **Why this matters**  
This prevents SQL injection and avoids string-concatenation mistakes.

---

## 🐛 Why You’re Seeing `ER_PARSE_ERROR`

`ER_PARSE_ERROR` is most commonly a **MySQL-style error**, not PostgreSQL.

That usually means one of these is true:

### ✅ Fix 1: Make sure you're using `pg`, not `mysql` / `mysql2`
- Your `package.json` should include:

```json
"pg": "^8.11.3"
```

- Your `server.js` should import:

```js
const { Pool } = require('pg');
```

If your project uses `mysql` or `mysql2`, **$1 will cause a parse error** because MySQL uses `?` placeholders instead.

---

## ✅ Fix 2: Ensure the DELETE finishes before the SELECT runs

Your code runs queries asynchronously. If you run a SELECT immediately after DELETE, the SELECT may execute before the DELETE completes.

### ✅ Recommended fix (nest SELECT inside the DELETE callback)

```js
pool.query(
  'DELETE FROM favorite_books WHERE id = $1 RETURNING *',
  [deletedRow],
  (err, result) => {
    if (err) return console.error(err);

    console.log('Deleted:', result.rows);

    pool.query('SELECT * FROM favorite_books ORDER BY id', (err, result) => {
      if (err) return console.error(err);
      console.log('Updated table:', result.rows);
    });
  }
);
```

💡 **Why this matters**  
This guarantees the “updated table” is printed **after** the deletion happens.

---

## ✅ Fix 3: Provide your Postgres username/password

In `server.js`, fill in:

```js
user: 'postgres',
password: 'YOUR_PASSWORD_HERE',
```

If you leave these blank, you may get connection/auth errors (different from parse errors, but still blocks progress).

✅ Tip: You can also use environment variables instead of hardcoding:

```js
user: process.env.PGUSER,
password: process.env.PGPASSWORD,
```

---

## ✅ Verify the Fix

After running `node server.js`, you should see:

- The row with `id = 2` is deleted
- The printed table shows ids **1, 3, 4, 5, 6, 7**

---

## 🏆 Bonus: User-defined values in SQL

Research:
- How to use `WHERE id = $1` with any id passed in
- How to accept a value from:
  - the command line
  - an API route parameter (e.g., `/books/:id`)
  - request body JSON

💡 **Why this matters**  
This is the bridge between “SQL scripts” and real backend APIs.

---

## 🚀 Next Step

Next, we’ll convert this into a real endpoint like:

- `DELETE /api/books/:id`

…and return the deleted row to the client.
