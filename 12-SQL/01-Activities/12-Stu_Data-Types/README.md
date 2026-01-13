# 📖 Student Activity: Implementing Data Types and Constraints in PostgreSQL

In this activity, you will define **data types** and **constraints** for each column in a table.

You will learn how PostgreSQL enforces rules on data to keep databases accurate and reliable.

---

## 🎯 Learning Goals

By the end of this activity, you will be able to:

- Assign appropriate data types to table columns
- Apply `NOT NULL` constraints to prevent missing data
- Understand why constraints are critical in database design
- Read and modify a table schema safely

💡 **Why this matters**  
Databases are only as reliable as the rules they enforce. Data types and constraints prevent bad or incomplete data from ever entering your system.

---

## 🧰 Tools You’ll Use

- **PostgreSQL**
- **pgAdmin**
- **Query Tool**
- `schema.sql` in the `Unsolved/db` folder

---

## 🗄️ Step 1: Review the Starting Schema

Open the file:

```
Unsolved/db/schema.sql
```

You should see a `CREATE TABLE` statement where the columns are missing data types and constraints.

💡 **Why this matters**  
PostgreSQL requires every column to have a data type. Without one, the table cannot be created correctly.

---

## 🧠 Step 2: Decide on Data Types

For this table:

- `id` should store whole numbers → `INTEGER`
- `first_name` should store short text → `VARCHAR(30)`
- `last_name` should store short text → `VARCHAR(30)`
- `value_card_member` should store true/false values → `BOOLEAN`

💡 **Why this matters**  
Choosing the correct data type ensures PostgreSQL stores and processes data efficiently.

---

## 🔒 Step 3: Apply Constraints

Update each column so that it **cannot be NULL**.

Use the `NOT NULL` constraint on:
- `id`
- `first_name`
- `last_name`
- `value_card_member`

💡 **Why this matters**  
If no value is provided, PostgreSQL sets the value to `NULL` by default.  
`NOT NULL` prevents incomplete records from being created.

---

## 🏗️ Step 4: Complete the CREATE TABLE Statement

Your updated table should define:
- A data type for every column
- A `NOT NULL` constraint for each column

Run the updated `schema.sql` file using pgAdmin.

---

## 🔍 Step 5: Verify the Table Structure

In pgAdmin:
1. Expand **Schemas → public → Tables**
2. Right-click **customers**
3. Inspect the columns

Confirm:
- Each column has the correct data type
- Each column is marked as `NOT NULL`

💡 **Why this matters**  
Always verify your schema after creating or modifying tables.

---

## ✅ Acceptance Criteria

- All columns in the `customers` table have defined data types
- The `id`, `first_name`, `last_name`, and `value_card_member` columns cannot be `NULL`
- The table is created successfully without errors

---

## 🧠 Bonus: Column-Level vs Table-Level Constraints

Research and answer:
- What is a **column-level constraint**?
- What is a **table-level constraint**?
- When would you use each?

💡 **Why this matters**  
Understanding constraint types helps you design more complex and flexible schemas later.

---

## 🚀 Ready for the Next Step

Next, you’ll add **primary keys** and learn how constraints enforce uniqueness in a table.
