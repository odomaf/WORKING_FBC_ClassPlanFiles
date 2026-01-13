# 🏗️ Student Activity: Using Primary Keys and Foreign Keys to Relate Tables

In this activity, you will create **two related tables** and connect them using a **primary key (PK)** and a **foreign key (FK)**.

You will build:
- a `customers` table
- a `customer_orders` table
…and link them so each order can belong to a customer.

---

## 🎯 Learning Goals

By the end of this activity, you will be able to:

- Define a **primary key** for a table
- Create a **foreign key** that references another table
- Explain how relational databases keep data connected
- Understand what happens when a related row is deleted

💡 **Why this matters**  
Most real applications store related data across multiple tables. Primary keys and foreign keys are how relational databases prevent data from becoming messy, duplicated, or inconsistent.

---

## 🧰 Tools You’ll Use

- **PostgreSQL**
- **pgAdmin**
- **Query Tool**
- `schema.sql` and `seeds.sql` files

---

## 🧠 Key Concepts (Quick Reference)

### Primary Key (PK)
- Uniquely identifies each row in a table
- Cannot be duplicated
- Cannot be NULL

### Foreign Key (FK)
- A column in one table that points to a primary key in another table
- Creates the relationship between tables

💡 **Why this matters**  
PK + FK relationships allow you to connect records without repeating the same customer data inside every order.

---

## 🏗️ Step 1: Create the Database and Tables

Open `schema.sql` and make sure your schema includes:

- `customers.id` as a **primary key**
- `customer_orders.customer_id` as a **foreign key** that references `customers(id)`

> ⚠️ Important pgAdmin note  
> The `\c grocery_db` command is for the command line. In pgAdmin, you “select” a database by opening the Query Tool for that database.

### ✅ Recommended schema (student-safe)

```sql
-- (Optional) Reset the database in dev
DROP DATABASE IF EXISTS grocery_db;
CREATE DATABASE grocery_db;

-- Create customers table
CREATE TABLE customers (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL
);

-- Create customer_orders table
CREATE TABLE customer_orders (
  id SERIAL PRIMARY KEY,
  customer_id INTEGER,
  order_details TEXT NOT NULL,
  CONSTRAINT fk_customer
    FOREIGN KEY (customer_id)
    REFERENCES customers(id)
    ON DELETE SET NULL
);
```

💡 **Why this matters**  
- `SERIAL PRIMARY KEY` auto-generates unique ids for you  
- Foreign keys enforce that orders can only reference real customers

---

## 🌱 Step 2: Seed the Tables with Data

Run `seeds.sql` to insert sample data.

### Example seed data:

```sql
INSERT INTO customers (first_name, last_name)
VALUES
  ('Arthur', 'Miller'),
  ('Chinua', 'Achebe'),
  ('Margaret', 'Atwood'),
  ('Gabriel', 'Garcia Marquez'),
  ('Simone', 'de Beauvoir');

INSERT INTO customer_orders (customer_id, order_details)
VALUES
  (1, 'coffee, milk'),
  (2, 'eggs, cheese'),
  (3, 'organic cereal'),
  (4, 'oranges, peaches'),
  (5, 'ice cream');
```

💡 **Why this matters**  
Seeding makes it easy to test relationships and queries without manually inserting rows one at a time.

---

## ✅ Step 3: Verify the Relationship Works

Run these checks:

```sql
SELECT * FROM customers;
SELECT * FROM customer_orders;
```

Then run a JOIN to see connected data:

```sql
SELECT
  customers.first_name,
  customers.last_name,
  customer_orders.order_details
FROM customers
JOIN customer_orders
  ON customers.id = customer_orders.customer_id;
```

💡 **Why this matters**  
JOINs are how applications “combine” related data into meaningful results (like showing orders with the customer name).

---

## ✅ Acceptance Criteria

- The `customers.id` column is a **primary key**
- The `customer_orders.customer_id` column is a **foreign key** referencing `customers(id)`
- Seed data inserts successfully into both tables

---

## 🧠 Bonus: Why Use Multiple Related Tables?

Research and answer:
- What are the advantages of multiple related tables over one big table?
- How do PK/FK relationships reduce duplication?
- What is “data integrity” and how do foreign keys support it?

💡 **Why this matters**  
This is the foundation of database design and will show up in every backend system you build.

---

## 🚀 Ready for the Next Step

Next, you’ll practice:
- `JOIN` queries (INNER JOIN, LEFT JOIN)
- Deleting a customer and observing what `ON DELETE SET NULL` does
