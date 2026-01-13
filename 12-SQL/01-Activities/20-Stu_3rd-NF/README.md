# 🏗️ Student Activity: Convert a Database from 1NF to 3NF

In this activity, you will take a table that is technically in **1NF** (atomic values) but still has **redundancy and transitive dependencies**, and convert it into **3NF**.

You will then prove your new design still returns the same combined information using a `JOIN` query.

---

## 🎯 Learning Goals

By the end of this activity, you will be able to:

- Identify redundancy and transitive dependencies in a table
- Decompose a table into multiple tables to reach 3NF
- Create **foreign key relationships** between tables
- Rebuild the original “combined view” using `JOIN`

💡 **Why this matters**  
Normalization makes databases easier to maintain and harder to break. When data is repeated in multiple places, it becomes easy to update one row and forget another—leading to inconsistencies and bugs.

---

## 🧰 Tools You’ll Use

- **PostgreSQL**
- **pgAdmin**
- **Query Tool**
- `schema-old.sql` (starting point)

⚠️ **pgAdmin Note**  
The `\c company;` command is for the command line. In pgAdmin, you select a database by opening the Query Tool for that database.

---

## 🧠 Step 0: Understand the Problem

### Starting table (not 3NF)
The `businesses` table contains:

- Business info: `business_id`, `business_name`
- Location info: `location_id`, `location_name`, `location_manager`

This creates a **transitive dependency**:

- `business_id → location_id`
- `location_id → location_name, location_manager`
- Therefore: `business_id → location_name, location_manager` (transitive)

💡 **Why this matters**  
If the location manager changes, you would have to update it in every row tied to that location (or risk inconsistent data).

---

## ✅ Part 1: Create and Inspect the Original Table

1. Run the starter SQL to create the database and the original table.
2. Insert the sample data.
3. Run:

```sql
SELECT * FROM businesses;
```

Answer:
- Which columns are about the business?
- Which columns are about the location?
- Which columns repeat if multiple businesses share a location?

---

## ✅ Part 2: Decompose into 3NF Tables

To reach 3NF, split the design into:

### `locations`
Stores one row per location:

- `location_id` (PK)
- `location_name`
- `location_manager`

### `businesses`
Stores one row per business:

- `business_id` (PK)
- `business_name`
- `location_id` (FK → locations.location_id)

💡 **Why this matters**  
Now location details live in exactly one place. Updating a manager only requires changing one row.

---

## 🏗️ Recommended 3NF Schema

Use this as your target schema:

```sql
-- Locations Table
CREATE TABLE locations (
  location_id INTEGER PRIMARY KEY,
  location_name VARCHAR(255) NOT NULL,
  location_manager VARCHAR(255) NOT NULL
);

-- Businesses Table
CREATE TABLE businesses (
  business_id INTEGER PRIMARY KEY,
  business_name VARCHAR(255) NOT NULL,
  location_id INTEGER NOT NULL,
  CONSTRAINT fk_location
    FOREIGN KEY (location_id)
    REFERENCES locations(location_id)
);
```

---

## ✅ Part 3: Insert Data into the New Tables

1. Insert the location rows into `locations`
2. Insert the business rows into `businesses` (using location_id)

---

## ✅ Part 4: Rebuild the Original Output Using JOIN

Run this query to retrieve the same combined information:

```sql
SELECT
  businesses.business_id,
  businesses.business_name,
  locations.location_name,
  locations.location_manager
FROM businesses
JOIN locations
  ON businesses.location_id = locations.location_id;
```

💡 **Why this matters**  
Normalized schemas store data cleanly, and JOINs let you retrieve it in the combined format your app needs.

---

## ✅ Acceptance Criteria (Checklist)

- The original table is decomposed into multiple tables (3NF)
- Repeating location data is removed from the businesses table
- A foreign key relationship exists between `businesses.location_id` and `locations.location_id`
- A JOIN query returns the same combined result as the original 1NF table

---

## 🏆 Bonus: Composite Keys and Normalization

Research and answer:

- What is a **composite primary key**?
- When would you use one?
- How does a composite key affect table design and normalization?
- Why do junction tables often use composite keys?

💡 **Why this matters**  
Composite keys show up frequently in many-to-many relationships and are a major part of real-world database design.

---

## 🚀 Ready for the Next Step

Next, you’ll normalize a dataset that includes a **many-to-many relationship** and create a junction table to support it.
