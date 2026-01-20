# 📖 Database Credentials & Configuration (Learning‑Focused Version)

In this activity, we will **intentionally keep database credentials hardcoded** to reduce cognitive overhead while learning how Sequelize connects an Express server to a PostgreSQL database.

> **Why are we doing this?**  
> For this activity, clarity is more important than best practices. By hardcoding credentials, we can focus on understanding *how* Sequelize establishes a database connection and *when* that connection happens in the server lifecycle. In later activities, we will refactor this setup to use environment variables and the `dotenv` package once the core concepts are solid.

---

## 🧠 Learning Objectives

By the end of this activity, you should be able to:

- Explain the purpose of the Sequelize connection file
- Identify where database credentials are configured in a Node.js project
- Describe how an Express server waits for a database connection before starting
- Explain **why** environment variables are recommended in production applications

---

## 📌 Current Setup (Intentional Design)

For this unit:

- Database credentials **remain hardcoded**
- Configuration lives in a single file: `config/connection.js`
- Sequelize is responsible for connecting the application to PostgreSQL
- SQL (`schema.sql`) is only responsible for creating the database itself

This mirrors how many beginner and prototype applications are structured before being refactored for production use.

---

## 📝 Looking Ahead: Environment Variables (Preview Only)

In real‑world applications, database credentials should **never** be hardcoded. Instead, developers typically use environment variables loaded with tools such as `dotenv`.

We are **not implementing this yet**, but you should know that environment variables:

- Protect sensitive information
- Allow different configurations for development and production
- Are commonly stored in a `.env` file and loaded at runtime

We will revisit this topic in a later unit once Sequelize fundamentals are second nature.

---

## 🔍 Reflection Questions

Discuss with your group:

- Why might hardcoding credentials be risky in a real‑world application?
- What problems do environment variables solve?
- Why might introducing `.env` files too early make learning more difficult?

---

## 🏆 Optional Challenge (Conceptual)

No coding required — research and discuss:

- How can environment variables be set from the command line?
- Why might a hosting provider *require* environment variables instead of hardcoded values?

Use reputable sources such as MDN, npm documentation, or official database hosting guides.

---

## ✅ Summary

This activity prioritizes **understanding over optimization**.  
You are building a strong mental model first — architectural best practices will follow in later units.

