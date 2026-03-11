# 🏗️ GraphQL Schema Design: Implement Type Definitions

In this activity, you will work with a partner to define the GraphQL schema used by the server.

GraphQL requires developers to explicitly define the structure of the data that the API can return. This structure is defined using **type definitions** (often called `typeDefs`).

Your goal is to implement the schema that describes the application's data.

---

# 🎯 User Story

As a developer, I want to define GraphQL type definitions so that the API can validate and structure the data returned to the client.

---

# 🧠 What You’re Practicing

This activity will help you practice:

- defining **GraphQL schema types**
- understanding how GraphQL validates returned data
- mapping **database models to GraphQL types**
- structuring a GraphQL API

---

# ⚙️ Setup Instructions

1. Navigate to the activity directory:

22-Stu_TypeDefs/Unsolved

2. Install project dependencies:

npm install

3. Seed the database with sample data:

npm run seed

4. Start the development environment:

npm run develop

This will launch both the **GraphQL server** and the **frontend application**.

---

# 🧩 Your Task

Create a file named:

server/schemas/typeDefs.js

Inside this file, define the GraphQL schema that describes the data used in the application.

Your schema should include types for:

- Category
- Product
- Order
- User

Each type should include fields that reflect the data stored in the application's database.

---

# 📚 Helpful Resources

GraphQL documentation:

https://graphql.org/learn/schema/

Apollo Server schema guide:

https://www.apollographql.com/docs/apollo-server/schema/schema/

---

# 💡 Hints

Use the database models located in the following directory to guide your schema design:

server/models

These models define the structure of the stored data and can help you determine:

- what fields should exist
- what types those fields should be
- how different objects relate to each other

---

# 🏆 Bonus Challenge

If you finish the main activity early, research the following question with your partner:

What is an **enum** in GraphQL and when should it be used in a schema?

Think about situations where a field should only allow a limited set of values.

---

# 🔎 Partner Discussion

Before implementing the schema, discuss:

1. Why does GraphQL require developers to define types ahead of time?
2. How do GraphQL type definitions improve API reliability?
3. What problems might occur if a schema does not accurately match the database models?

---

# ✅ Success Check

You know the activity is complete when:

- a `typeDefs.js` file exists in `server/schemas`
- the schema defines types for **Category**, **Product**, **Order**, and **User**
- the server runs without schema errors
- the GraphQL API returns correctly structured data
