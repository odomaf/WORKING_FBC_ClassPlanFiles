# 🐛 Unit 19 – 10-Stu_Mutations - Mutation Returns Stale Data

### CodeAcademy | MERN + GraphQL Track

In production systems, returning stale or outdated data after a mutation can break the front end.

In this activity, you’ll debug a mutation that appears to update the database correctly — but does **not** return the updated object in the response.

This is a common real-world issue when working with MongoDB + GraphQL.

---

## 🎯 User Story

As a developer,  
I want mutations to return updated values,  
so that the front end reflects the most current data immediately.

---

## ❗ The Problem

When updating a class’s building code, the database updates successfully — but the response still shows the old value.

This means the mutation is working… but the resolver is returning stale data.

---

## ✅ Expected Behavior

After running the mutation, the returned object should include the updated `building` value.

---

## ❌ Actual Behavior

The mutation runs, but the response still shows the old `building` value.

---

## 🔁 Steps to Reproduce

1️⃣ Navigate to the activity folder:

```bash
cd 10-Stu_Mutations/Unsolved
```

2️⃣ Install and seed the database:

```bash
npm install
npm run seed
npm start
```

3️⃣ Open Apollo Sandbox:

```
http://localhost:3001/graphql
```

4️⃣ In the **Query Variables** panel, add:

```json
{
  "id": "PASTE_A_VALID_CLASS_ID_HERE",
  "building": "AA"
}
```

5️⃣ Run the mutation:

```gql
mutation updateClass($id: ID!, $building: String!) {
  updateClass(id: $id, building: $building) {
    name
    building
  }
}
```

6️⃣ Observe that the returned `building` field does NOT reflect `"AA"`.

---

## 🧠 What’s Likely Happening

MongoDB update operations (such as `findByIdAndUpdate`) often:

- Update the document
- But return the _original_ document by default

This is not a GraphQL problem.  
It’s a database configuration detail.

---

## 💡 Hints

Ask yourself:

- What options can be passed into `findByIdAndUpdate()`?
- What does `{ new: true }` do?
- Is the mutation returning the updated document or the original?
- What happens if you run the mutation twice?
- Can you verify the update directly in MongoDB?

---

## 🧪 How to Confirm the Data Updated

Try:

- Running a separate query for that class after the mutation
- Checking the database directly
- Running the mutation a second time

Does the second mutation reflect the previous update?

---

## 🏆 Bonus Challenge

After fixing the issue, research:

### What tools are used to run GraphQL operations from a real front end?

Examples to explore:

- Apollo Client
- urql
- Relay
- fetch() with a GraphQL endpoint
- Postman (GraphQL mode)

Be prepared to explain how a front end actually sends mutations to your API.

---

## 🚀 Why This Matters

If your mutation returns stale data:

- UI state becomes inconsistent
- Users see outdated values
- Debugging becomes difficult
- Trust in the API erodes

Returning accurate, updated data is critical in production APIs.

Debug carefully.
