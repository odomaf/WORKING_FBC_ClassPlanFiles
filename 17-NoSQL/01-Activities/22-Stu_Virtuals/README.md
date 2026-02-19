# 22-Stu_Virtuals — Mongoose Virtual: `fullName`

In this activity, you’ll practice using a **Mongoose virtual** to create a computed property that:

- ✅ Shows up in API responses (`res.json`)
- ❌ Does NOT get stored in MongoDB
- ✅ Can be used to **get** and **set** underlying fields

---

## User Story

- As a developer, I want to implement a Mongoose virtual in my schema to get and set data.
- As a developer, I do not want that data to persist in the database, so I can expose computed properties on documents.

---

## Acceptance Criteria

You are done when:

- You define a virtual property on `userSchema` named `fullName` that returns `"first last"`.
- You define a `.set()` method on `fullName` that accepts a full name string and sets:
  - `first`
  - `last`
- You enable virtuals in JSON responses by setting:
  - `toJSON: { virtuals: true }`
- You run the app and create a user in Insomnia:

```json
{
  "first": "Ada",
  "last": "Lovelace",
  "age": 36
}
```
