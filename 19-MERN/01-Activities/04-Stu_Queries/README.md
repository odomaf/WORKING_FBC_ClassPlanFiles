# 🏗️ Unit 19 – Write GraphQL Queries for the Front-End Team

### CodeAcademy | MERN + GraphQL Track

In a real-world workflow, the front-end team cannot build UI components until they know exactly what data they can request from the API.

Your task is to think like an API architect and define the GraphQL queries the front-end team will need.

You are not modifying the schema.  
You are writing queries that consume it correctly.

---

## 🎯 User Story

As a developer,  
I want to identify the exact GraphQL queries required by the front-end team,  
so that UI development can begin without backend confusion.

---

## ✅ Acceptance Criteria

### 1️⃣ Create a query that returns:

- Every school's:
  - name
  - location
  - student body count

- Every class's:
  - name

- Every professor's:
  - name

---

### 2️⃣ Create a query that returns:

- Every class's:
  - name
  - credit hours
  - building number

- Every professor's:
  - name
  - student review score

---

### 3️⃣ Create a query that returns:

- Every professor's:
  - ID
  - name
  - student review score
  - office hours
  - office building number

---

## 🧠 Thinking Like a Developer

Before writing your queries, ask:

- What root-level query fields exist?
- How are relationships structured?
- What nested data is available?
- Does the schema require arguments?
- Are IDs required for certain queries?

Remember:  
GraphQL allows you to request **exactly what you need** — no more, no less.

---

## 🛠 Where to Test Your Queries

Use Apollo Sandbox:

```
http://localhost:3001/graphql
```

---

## 💡 Hints

Inside Apollo Sandbox, use:

- **Docs tab** → to inspect available types and queries
- **Schema Explorer** → to see field structure
- **Autocomplete** → to discover valid fields

These tools simulate how front-end developers explore an API.

---

## 🏆 Bonus Challenge

After completing the required queries, discuss:

### What other GraphQL IDEs exist besides Apollo Sandbox?

Research tools such as:

- GraphiQL
- Postman (GraphQL mode)
- Insomnia
- VS Code GraphQL extensions

Be prepared to compare their strengths and weaknesses.

---

## 🚀 Why This Matters

Being able to design and consume GraphQL queries is critical for:

- Full-stack development
- Efficient front-end integration
- Performance optimization
- Technical interviews

The front-end cannot move without you.

Design your queries carefully.
