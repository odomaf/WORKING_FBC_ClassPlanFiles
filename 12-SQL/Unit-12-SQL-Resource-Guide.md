
# Unit 12 – PostgreSQL & CLI Inventory Management  
## 📚 Student Resource Guide

This guide is designed to support you through **Unit 12**, where you build a **command-line Inventory Management App** using **Node.js, Inquirer (v8.2.4), and PostgreSQL**.

Use these resources **as references**, not copy‑paste answers. Learning how to *find* and *read* documentation is part of becoming a developer.

---

## 🧠 Core Concepts You Should Master

By the end of this unit, you should be comfortable with:

- Designing relational database schemas
- Writing SQL queries (CRUD + joins + aggregates)
- Using PostgreSQL as a system of record
- Connecting Node.js to Postgres with `pg`
- Building interactive CLI apps with Inquirer
- Applying business rules (inventory can’t go negative)

---

## 🗄️ PostgreSQL Fundamentals

### PostgreSQL Basics
- PostgreSQL Official Docs (Overview):  
  https://www.postgresql.org/docs/current/tutorial.html

- PostgreSQL Data Types:  
  https://www.postgresql.org/docs/current/datatype.html

- PostgreSQL Constraints (PRIMARY KEY, FOREIGN KEY, NOT NULL):  
  https://www.postgresql.org/docs/current/ddl-constraints.html

### SQL Statements (CRUD)
- CREATE / DROP DATABASE & TABLE:  
  https://www.w3schools.com/sql/sql_create_db.asp  
  https://www.w3schools.com/sql/sql_create_table.asp

- INSERT:  
  https://www.postgresql.org/docs/current/sql-insert.html

- SELECT:  
  https://www.postgresql.org/docs/current/sql-select.html

- UPDATE:  
  https://www.postgresql.org/docs/current/sql-update.html

- DELETE:  
  https://www.postgresql.org/docs/current/sql-delete.html

---

## 🔗 Relationships & Joins

Understanding how tables connect is critical for this unit.

- SQL JOINs Explained (W3Schools):  
  https://www.w3schools.com/sql/sql_join.asp

- INNER JOIN vs LEFT JOIN:  
  https://www.postgresqltutorial.com/postgresql-joins/

- Foreign Keys in PostgreSQL:  
  https://www.postgresql.org/docs/current/tutorial-fk.html

---

## 📊 Aggregate Functions & Reporting

Inventory systems rely heavily on reporting.

- COUNT, SUM, AVG, MIN, MAX:  
  https://www.postgresql.org/docs/current/functions-aggregate.html

- GROUP BY:  
  https://www.w3schools.com/sql/sql_groupby.asp

- HAVING (filtering aggregated results):  
  https://www.w3schools.com/sql/sql_having.asp

Examples you should understand:
- Total inventory count
- Low-stock items
- Inventory value by category

---

## 🟢 Node.js + PostgreSQL (`pg`)

### node-postgres (`pg`)
- Official Documentation:  
  https://node-postgres.com/

- Parameterized Queries (VERY IMPORTANT):  
  https://node-postgres.com/features/queries

Why this matters:
- Prevents SQL injection
- Avoids syntax errors
- Required for production code

---

## 🧭 Inquirer (CLI Menus)

You **must** use Inquirer version **8.2.4** for this challenge.

- Inquirer v8.2.4 Docs:  
  https://www.npmjs.com/package/inquirer/v/8.2.4

Key concepts:
- `list` prompts for menus
- `input` prompts for data entry
- Looping the menu after actions
- Clean exit handling

---

## 🔐 Environment Variables & Security

You will store database credentials locally.

- Using `.env` with Node.js:  
  https://www.npmjs.com/package/dotenv

Why this matters:
- Prevents hardcoding secrets
- Industry-standard practice
- Required for real-world apps

---

## 🧪 Debugging & Common Errors

### Common PostgreSQL Errors
- Missing semicolons
- Wrong column names
- Foreign key constraint violations

Helpful reference:
- PostgreSQL Error Codes (optional):  
  https://www.postgresql.org/docs/current/errcodes-appendix.html

### JavaScript Errors
- Forgetting `await` with async queries
- Using string interpolation instead of parameters
- Not handling empty results

MDN JavaScript Reference:
https://developer.mozilla.org/en-US/docs/Web/JavaScript

---

## 🎯 How This Maps to the Challenge

| Challenge Requirement | What to Study |
|----------------------|---------------|
| View products | SELECT |
| Add product | INSERT |
| Update stock | UPDATE |
| Delete product | DELETE |
| Supplier relationships | FOREIGN KEY + JOIN |
| Inventory reports | GROUP BY + COUNT/SUM |
| CLI menu | Inquirer |
| Database connection | pg |

---

## 🚀 Career Tip

Everything in this unit mirrors **real junior backend work**:
- CLI tools
- Database-driven logic
- Business rules
- Debugging live data

If you can complete this challenge **without copy/paste**, you’re building real developer confidence.

---

## ✅ Final Advice

> Don’t memorize SQL.  
> Learn how to **look things up**, **read docs**, and **reason about data**.

That skill matters far more than syntax.

Good luck — and don’t be afraid to experiment 🚀
