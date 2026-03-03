# 📖 Unit 19 – 08-Stu_Query-Arguments - Create a Resolver to Fetch a Single Class

### CodeAcademy | MERN + GraphQL Track

In real applications, front-end teams rarely need “all data.”  
They often need **one specific resource** — for example, loading a single class page by ID.

In this activity, you’ll implement a GraphQL resolver that allows the client to request a **single class by its ID**.

---

## 🎯 User Story

As a developer,  
I want to query for an individual class by ID,  
so that the front end can display a detailed class view.

---

## ✅ Acceptance Criteria

It’s done when the following GraphQL query successfully returns a single class object:

```gql
query class($id: ID!) {
  class(id: $id) {
    name
    professor {
      name
    }
  }
}
```

Your result should return:

- The class name
- The associated professor’s name

---

## 🧠 What You’re Building

To make this work, you must:

1. Define a `class` query that accepts an `id` argument
2. Ensure the `id` argument is required
3. Write a resolver that:
   - Finds the class by its ID in MongoDB
   - Returns the class
   - Resolves its related professor

Think through the full data flow:

Client → GraphQL Query → Resolver → MongoDB → Response

---

## 🛠 Where to Test

Use Apollo Sandbox:

```
http://localhost:3001/graphql
```

You’ll also need to provide a valid class ID in the query variables panel:

```json
{
  "id": "PASTE_A_VALID_CLASS_ID_HERE"
}
```

---

## 📚 Helpful Documentation

Apollo Server – Handling Arguments in Resolvers  
https://www.apollographql.com/docs/apollo-server/data/resolvers#handling-arguments

---

## 💡 Hints

Ask yourself:

- What MongoDB/Mongoose method retrieves a single document?
- How do you access arguments inside a resolver function?
- How do you populate or resolve related data?
- Where should the argument be defined — in typeDefs or resolvers?

---

## 🏆 Bonus Challenge

After completing the activity, research:

### How do you differentiate between required and optional arguments in GraphQL?

Explore:

- The `!` symbol in schema definitions
- Default argument values
- Input types

Be ready to explain how required arguments affect API validation.

---

## 🚀 Why This Matters

Fetching individual resources is essential for:

- Detail pages
- Edit forms
- Role-based access control
- Performance optimization

This is how production APIs behave.

Design your resolver carefully.
