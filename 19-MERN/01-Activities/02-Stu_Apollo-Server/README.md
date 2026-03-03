# 📐 Unit 19 – Add Comments to an Apollo Server Implementation  
### CodeAcademy | MERN + GraphQL Track

In this activity, you and a partner will strengthen your understanding of how an Apollo GraphQL server works by documenting the code.

Your objective is to carefully read through the implementation and add clear, meaningful comments that explain:

- What each section does  
- Why it exists  
- How the pieces connect together  

Think like a developer onboarding to a new codebase.

---

## 🎯 Learning Objective

By completing this activity, you should be able to:

- Explain how Apollo Server is initialized
- Describe how `typeDefs` define a GraphQL schema
- Understand how resolvers map queries to database operations
- Connect MongoDB data models to GraphQL queries

---

## 📂 Files to Review

Work inside the `Unsolved` folder and add comments to the following files:

- `server.js`
- `schemas/typeDefs.js`
- `schemas/resolvers.js`

Your task is NOT to rewrite the code.  
Your task is to explain it clearly.

---

## 📝 How to Run the Application

Follow these steps to launch the server and open Apollo Sandbox:

### 1️⃣ Navigate into the project folder

```bash
cd 02-Stu_Apollo-Server/Unsolved
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Seed the database

Make sure MongoDB is running locally.

```bash
npm run seed
```

### 4️⃣ Start the server

```bash
npm start
```

### 5️⃣ Open Apollo Sandbox

In your browser, go to:

```
http://localhost:3001/graphql
```

You should now see Apollo Sandbox where you can test queries and mutations.

---

## 🧠 What You Should Be Thinking About

While reviewing the files, ask yourself:

- Where is the schema defined?
- Where are the resolvers connected?
- How does Apollo know which resolver to call?
- How does MongoDB data get returned through GraphQL?
- What happens when the server starts?

Write comments that answer those questions clearly.

---

## 📚 Helpful Documentation

- Apollo Server Getting Started  
  https://www.apollographql.com/docs/apollo-server/getting-started

- Apollo Server + Node.js Integration  
  https://www.apollographql.com/docs/apollo-server/integrations/building-integrations

---

## 🏆 Bonus Challenge

After completing the activity, discuss with your partner:

### What are the pros and cons of GraphQL vs REST?

Research and consider:

- Performance
- Over-fetching vs under-fetching
- Tooling ecosystem
- Learning curve
- Caching strategies
- Schema flexibility

Be prepared to share your conclusions.

---

## 🚀 Why This Matters

Understanding Apollo Server is foundational for:

- Full-stack MERN development
- Modern API architecture
- Production-ready GraphQL services
- Technical interviews

This is not just syntax practice — this is architecture thinking.

---
