# 🏗️ Student Activity: Using JOINs to Combine Tables in PostgreSQL

In this activity, you will use a **JOIN clause** to combine data from two related tables into a single query result.

You will connect book titles with their prices using a shared key.

---

## 🎯 Learning Goals

By the end of this activity, you will be able to:

- Explain what a JOIN does in SQL
- Combine data from two related tables
- Write an INNER JOIN query
- Identify relationships between tables

💡 **Why this matters**  
In real-world applications, data is almost never stored in a single table. JOINs allow you to retrieve meaningful information by combining related data across tables.

---

## 🧰 Tools You’ll Use

- **PostgreSQL**
- **pgAdmin**
- **Query Tool**
- `schema.sql` and seed data

---

## 🧠 Understanding the Relationship

You are working with two tables:

### `book_prices`
- Stores pricing information
- Each row has a unique `id` and a `price`

### `favorite_books`
- Stores book information
- Contains a `book_price` column that references `book_prices.id`

💡 **Why this matters**  
The `book_price` column acts as a **foreign key**, linking each book to its price.

---

## 🏗️ Step 1: Create the Database and Tables

Run the schema SQL to create the database and tables.

⚠️ **pgAdmin Note**  
The `\c books_db` command is used in the command line.  
In pgAdmin, select the database by opening the Query Tool for `books_db`.

### Schema overview (simplified):

```sql
CREATE TABLE book_prices (
  id SERIAL PRIMARY KEY,
  price INTEGER NOT NULL
);

CREATE TABLE favorite_books (
  id SERIAL PRIMARY KEY,
  book_name VARCHAR(30) NOT NULL,
  in_stock BOOLEAN,
  book_price INTEGER,
  FOREIGN KEY (book_price)
    REFERENCES book_prices(id)
    ON DELETE SET NULL
);
```

---

## 🌱 Step 2: Insert Sample Data

Run the provided INSERT statements to populate both tables.

Verify the data:

```sql
SELECT * FROM book_prices;
SELECT * FROM favorite_books;
```

💡 **Why this matters**  
JOINs only work correctly when related data exists in both tables.

---

## 🔗 Step 3: Write the JOIN Query

Use an INNER JOIN to combine book names with prices:

```sql
SELECT
  favorite_books.book_name AS name,
  book_prices.price AS price
FROM favorite_books
JOIN book_prices
  ON favorite_books.book_price = book_prices.id;
```

💡 **Why this matters**  
The JOIN clause tells PostgreSQL **how rows from one table match rows in another table**.

---

## ✅ Step 4: Verify the Results

Confirm that:
- Each returned row includes both a book name and a price
- Only rows with matching price IDs appear

💡 **Why this matters**  
INNER JOIN returns rows **only when a match exists in both tables**.

---

## ✅ Acceptance Criteria

- Data from `favorite_books` and `book_prices` is combined
- The result includes `book_name` and `price`
- The JOIN condition correctly matches related rows

---

## 🧠 Bonus: Many-to-Many Relationships

Research and answer:
- What is a many-to-many relationship?
- Why do many-to-many relationships require a **junction table**?

💡 **Why this matters**  
Many real-world data models require linking multiple records across tables, such as students and classes or users and roles.

---

## 🚀 Ready for the Next Step

Next, you’ll explore:
- LEFT JOIN vs INNER JOIN
- What happens when related data is missing
