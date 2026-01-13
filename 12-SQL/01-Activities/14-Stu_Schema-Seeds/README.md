# 🐛 Student Activity: Seed Data Not Populating Table

In this activity, you will debug an issue where **seed data is not appearing in a table** after running a SQL seed file.

You will identify why the data is not populating, fix the issue, and verify the results.

---

## 🎯 Learning Goals

By the end of this activity, you will be able to:

- Explain what seed data is and why it is used
- Insert multiple rows into a table using `INSERT`
- Debug issues related to schema and seed files
- Verify seeded data using `SELECT`

💡 **Why this matters**  
Seed data is commonly used to quickly populate databases with starter or test data. If your seed files fail, applications may appear broken even though the database structure is correct.

---

## 🧰 Tools You’ll Use

- **PostgreSQL**
- **pgAdmin**
- **Query Tool**
- `schema.sql` and `seeds.sql` files

---

## 🧪 Step 1: Create the Database and Table

Open **pgAdmin** and connect to your PostgreSQL server.

Open the **Query Tool** for an existing database (such as `postgres`) and run the SQL from:

```
Unsolved/db/schema.sql
```

This will:
- Create the `grocery_db` database
- Create the `products` table

Then open the Query Tool for **grocery_db**.

💡 **Why this matters**  
Seed data cannot be inserted unless the table already exists.

---

## 🌱 Step 2: Review the Seed File

Open:

```
Unsolved/db/seeds.sql
```

You should see an `INSERT INTO` statement similar to:

```sql
INSERT INTO products (product_name, category_name)
VALUES ('spinach', 'produce'),
       ('peanut butter', 'staples'),
       ('peas-canned', 'canned goods'),
       ('ice cream', 'frozen'),
       ('potato chips', 'snacks');
```

💡 **Why this matters**  
The column list in an `INSERT` statement must match the table structure exactly.

---

## 🔍 Step 3: Identify the Problem

The `products` table includes **three columns**:

- `id` (INTEGER, NOT NULL)
- `product_name`
- `category_name`

However, the seed file only inserts values for **two columns**.

💡 **Why this matters**  
PostgreSQL will reject inserts that do not provide required (`NOT NULL`) values.

---

## 🛠️ Step 4: Fix the Seed File

Update the `INSERT` statement so that **all required columns** are populated.

Example fix:

```sql
INSERT INTO products (id, product_name, category_name)
VALUES
  (1, 'spinach', 'produce'),
  (2, 'peanut butter', 'staples'),
  (3, 'peas-canned', 'canned goods'),
  (4, 'ice cream', 'frozen'),
  (5, 'potato chips', 'snacks');
```

Run the updated `seeds.sql` file.

---

## ✅ Step 5: Verify the Data

Run:

```sql
SELECT * FROM products;
```

You should now see all rows successfully inserted.

💡 **Why this matters**  
Always verify seed data before assuming your application logic is broken.

---

## ✅ Acceptance Criteria

- The `products` table is populated with seed data
- No SQL errors occur during insertion
- `SELECT * FROM products;` returns multiple rows

---

## 🧠 Bonus: Altering Tables

Research and answer:
- How can you modify an existing table using `ALTER TABLE`?
- When might you add or remove a column after a table is created?

💡 **Why this matters**  
Real-world schemas evolve over time. Knowing how to alter tables safely is an essential skill.

---

## 🚀 Ready for the Next Step

Next, you’ll explore **primary keys and auto-incrementing IDs** to simplify seed data.
