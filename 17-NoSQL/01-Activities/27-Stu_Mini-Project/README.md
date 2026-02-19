# Module 18 Mini-Project — Cohort Analytics API (MongoDB + Mongoose Aggregations)

In this mini-project you’ll start from a mostly-working backend and finish the “analytics” endpoints using **MongoDB aggregation pipelines**.

We’re keeping the same technical concepts as the original Student Statistics project, but reframing the theme:

✅ **Students**  
✅ **Courses**  
✅ **Assignments**

Your job is to add aggregation logic that answers two real questions:

1. “How many students are enrolled?”
2. “What is a student’s overall performance based on their assignment scores?”

---

## What You’re Building

A REST API that supports full CRUD operations for:

- `courses`
- `students`
- `assignments`

…and adds two analytics endpoints powered by aggregation pipelines.

---

## User Stories

- **As a user**, I want to view all students and see the total number of students enrolled.
- **As a user**, I want to view one student and see:
  - the student's assignment scores
  - the student's overall score (average)
- **As a user**, I want to create, read, update, and delete `courses`, `students`, and `assignments`.

---

## Requirements

Your finished app must include:

- Express.js server
- MongoDB database
- Mongoose ODM models + schemas
- Seed script that inserts sample data

And in the **Student controller**:

### 1) `headCount` aggregate function

Returns the total number of students using MongoDB aggregation operators.

### 2) `grade` aggregate function

Returns:

- a single student
- their assignment scores
- their computed overall score using aggregation operators (ex: `$avg`)

---

## MongoDB Concepts You’ll Use

You’ll likely need to research and use operators such as:

- `$match`
- `$unwind`
- `$group`
- `$avg`
- `$addToSet` (or `$push` depending on your needs)

You will also need to use:

- `ObjectId()` when matching by a document `_id`

---

## Setup

From the project root:

```bash
npm install
npm run seed
npm run dev
```

> `npm run dev` should restart the server automatically when you save changes.

---

## API Testing Checklist (Insomnia)

You should confirm these endpoints behave correctly:

### ✅ Headcount

- `GET /api/students`
  - returns an array of students
  - includes a total “headcount” value (based on your controller response design)

### ✅ student grade

- `GET /api/students/:studentId`
  - returns the student
  - includes assignment scores
  - includes computed overall score (average)

---

## Hints

- Seed your DB **before** testing:

  ```bash
  npm run seed
  ```

- `$avg` is perfect for computing overall performance.
- When matching by `_id`, convert the string param to an ObjectId so MongoDB can match it correctly.

---

## Bonus

Write a short explanation (3–5 sentences):

- What is the difference between **MongoDB** (database) and **Mongoose** (ODM)?
- What are pros/cons of using Mongoose vs interacting with MongoDB directly?

---
