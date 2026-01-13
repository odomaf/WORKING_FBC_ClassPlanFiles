# 🧩 Instructor Activity: Database Normalization (Non‑3NF → 3NF)

In this activity, you’ll take a **non‑3NF** table design and refactor it into **Third Normal Form (3NF)** using **three related tables**.

You’ll then run a JOIN query to prove the new design still produces the same “combined view” of the data—without the redundancy.

---

## 🎯 Learning Goals

By the end of this activity, you will be able to:

- Explain what **normalization** is and why we do it
- Identify redundancy and update anomalies in a non‑3NF table
- Create a 3NF schema using **students**, **courses**, and **enrollments**
- Use **primary keys** and **foreign keys** to relate tables
- Rebuild the original result using `JOIN`

💡 **Why this matters**  
Normalization is how real systems prevent duplicate data, reduce bugs, and protect data integrity. When databases grow, redundancy becomes expensive and error‑prone—3NF is one of the most common “clean” targets for relational design.

---

## 🧠 What You’re Starting With (Non‑3NF)

A single `students` table that contains:

- student info (student_id, student_name)
- course info (course_id, course_name, course_instructor)
- enrollment info (which student is in which course)

This causes **repeated course rows** and repeated instructor names across many student rows.

### What can go wrong (classic problems)

- **Update anomaly:** If Dr Doe’s name changes, you must update it everywhere.
- **Insert anomaly:** You can’t add a course unless at least one student is enrolled.
- **Delete anomaly:** If the last student drops a course, you might lose the course/instructor record.

---

## 🧰 Tools You’ll Use

- **PostgreSQL**
- **pgAdmin**
- **Query Tool**
- SQL scripts provided in the activity

⚠️ **pgAdmin Note**  
Commands like `\c university;` are for the command line. In pgAdmin, you “select” a database by opening the Query Tool for that database.

---

## ✅ Part 1: Create and Inspect the Non‑3NF Table

### Step 1: Create the database + non‑3NF table
Run the **Non‑3NF** script that:
- creates the `university` database
- creates the single `students` table
- inserts sample data

### Step 2: View the data
Run:

```sql
SELECT * FROM students;
```

### Step 3: Identify redundancy
Answer these questions:

- Which values repeat across multiple rows?
- If `course_instructor` changes, how many rows must be updated?
- What happens if you delete the last row for a course?

💡 **Why this matters**  
Being able to *spot* redundancy is how you know when a schema needs to be normalized.

---

## ✅ Part 2: Refactor into 3NF

In 3NF, we split the design into 3 tables:

1. `students(student_id, student_name)`  
2. `courses(course_id, course_name, course_instructor)`  
3. `enrollments(student_id, course_id)` (junction table)

### Step 4: Create the 3NF schema
Run the **3NF script** that creates:

- `students` table with a **PRIMARY KEY**
- `courses` table with a **PRIMARY KEY**
- `enrollments` table with **FOREIGN KEYS** referencing both tables

💡 **Why this matters**  
Each table now stores **one type of thing** (students, courses, relationships). That’s the core idea of 3NF.

---

## ✅ Part 3: Insert Data Into the 3NF Tables

### Step 5: Insert students + courses
Run the provided `INSERT` statements for:
- `students`
- `courses`

### Step 6: Insert enrollments
Run the provided `INSERT` statements for `enrollments`.

⚠️ **Quick consistency note (tiny bug in the provided comments):**  
In the enrollment section, some comments mention “Science (102)” while the row uses `(1, 101)`. The **data values** are what matter—just make sure the `(student_id, course_id)` pairs match the courses you created.

---

## ✅ Part 4: Rebuild the “Combined View” with JOINs

### Step 7: Prove the data still connects
Run this JOIN query:

```sql
SELECT
  students.student_name,
  courses.course_name,
  courses.course_instructor
FROM students
JOIN enrollments
  ON students.student_id = enrollments.student_id
JOIN courses
  ON enrollments.course_id = courses.course_id;
```

💡 **Why this matters**  
Normalized tables don’t “lose” information—they store it more cleanly. JOINs let you reconstruct meaningful results whenever you need them.

---

## ✅ Acceptance Criteria (Your Checklist)

- You can explain **why** the non‑3NF table is redundant
- You created 3NF tables: `students`, `courses`, `enrollments`
- `students.student_id` is a PRIMARY KEY
- `courses.course_id` is a PRIMARY KEY
- `enrollments.student_id` and `enrollments.course_id` are FOREIGN KEYS
- A JOIN query returns student name + course name + instructor

---

## 🏆 Bonus: Go One Step Further

1) Add constraints to strengthen data integrity:

- `NOT NULL` for required fields
- `UNIQUE` for `courses.course_name` (optional)
- Composite key idea: enforce one enrollment per student per course

Example (optional):

```sql
ALTER TABLE enrollments
ADD CONSTRAINT unique_student_course UNIQUE (student_id, course_id);
```

2) Try deleting a course or student and observe the FK behavior.  
(Then discuss: should we use `ON DELETE CASCADE`, `RESTRICT`, or `SET NULL`?)

---

## 🚀 Ready for the Next Step

Next, we’ll practice:
- `LEFT JOIN` vs `INNER JOIN`
- Aggregations (`COUNT`, `GROUP BY`) on normalized data
- Many‑to‑many relationships (enrollments is a real example!)
