# 🏗️ Unit 19 – Query Professors _and_ Their Classes

### CodeAcademy | MERN + GraphQL Track

In real product teams, the front end rarely wants “flat” data. A profile page needs nested information — like an instructor and the classes they teach — in a single request.

In this activity, you’ll update the GraphQL implementation so we can query **professors and their classes at the same time**.

---

## 🎯 User Story

As a developer,  
I want to be able to query for professors and their classes in one GraphQL request,  
so that the UI can render instructor profiles without extra API calls.

---

## ✅ Acceptance Criteria

It’s done when a query in Apollo Sandbox can return data similar to:

```json
{
  "professors": [
    {
      "name": "Avery Martinez",
      "classes": [
        { "name": "React Fundamentals & Component Patterns" },
        { "name": "GraphQL with Apollo Server" },
        { "name": "Capstone: Production-Ready MERN App" }
      ]
    }
  ]
}
```

> Your exact class list may differ because the seed script assigns professors to classes randomly.  
> What matters is that **each professor can return a nested `classes` array**.

---

## 🧠 What You’re Building

To support this query, your GraphQL API needs to correctly model and resolve relationships:

- `Professor` should include a `classes` field
- That field should return an array of `Class` objects
- The resolver should “connect the dots” between professors and their classes

---

## 🛠 Where to Test

Use Apollo Sandbox:

```
http://localhost:3001/graphql
```

---

## 💡 Hints

A complete GraphQL schema typically includes:

- **typeDefs** (schema definition / shape of the API)
- **resolvers** (the logic that returns the requested data)
- **models/data layer** (Mongo/Mongoose in our case)
- **server setup** (Apollo + Express wiring)

If your nested `classes` field isn’t working, check:

- Your `Professor` type in `typeDefs`
- Your `Professor.classes` resolver (or population logic)
- Your database references in the seed script

---

## 🏆 Bonus Challenge

After you get the nested query working, research:

### What other types can be used in a GraphQL schema?

Examples to explore:

- Scalar types (String, Int, Boolean, Float, ID)
- Custom scalars (Date, Email, URL, etc.)
- Enums
- Input types
- Interfaces / Unions

Use Google or another search engine and be ready to share 2–3 findings.

---

