# 🔐 Unit 19 - 22-Stu_Sign-JWT – Comment the JWT Resolver Implementation

### CodeAcademy | MERN + GraphQL Track

You’ve seen how JWTs are created.

Now it’s time to understand how they’re wired into the GraphQL layer.

In this activity, you are not writing new features.  
You are doing something more important:

👉 **Reading production-style code and explaining it clearly.**

---

## 🎯 Objective

Work with a partner to add meaningful comments to:

```
Unsolved/schemas/resolvers.js
```

Your goal is to explain:

- How login works
- How a token is generated
- How authentication errors are handled
- How the authenticated user is returned
- How context is used (if applicable)

This is not “comment every line.”  
This is “explain what matters.”

---

## 🧠 What You Should Be Explaining

When reviewing `resolvers.js`, look for:

### 🔑 Login Flow

- How the user is found in the database
- How the password is verified
- What happens if credentials are incorrect
- Where `signToken()` is called
- What is returned to the client

---

### 🪪 Token Creation

- What data is being embedded inside the JWT?
- Why are we including `_id` and `email`?
- Why does the resolver return both `token` and `profile`?

---

### 🚨 Error Handling

- What happens if the user doesn’t exist?
- What happens if the password is incorrect?
- Why is throwing an authentication error important?

---

### 🔄 Resolver Structure

- How GraphQL mutations are structured
- Why login is implemented as a mutation
- What shape the returned object must match (based on `typeDefs`)

---

## 🧩 Bootcamp Reality Check

In real jobs:

- You will inherit code you didn’t write.
- You will need to explain it to teammates.
- You will need to maintain it without breaking auth.

Being able to read and explain this file confidently  
is a major milestone.

---

## 🏆 Bonus Challenge

Research:

**What are the pros and cons of using JSON Web Tokens (JWTs)?**

Be prepared to discuss:

- Stateless authentication
- Scalability benefits
- Token expiration risks
- Revocation challenges
- Security considerations (XSS, storage location)

This is a common system design interview question.

---
