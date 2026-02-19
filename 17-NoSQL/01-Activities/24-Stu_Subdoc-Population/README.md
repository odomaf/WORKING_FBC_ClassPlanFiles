# 24-Stu_Subdoc-Population — Fix Tag Population

In this debugging activity, you’ll work with a partner to fix a Mongoose schema issue that prevents **tag population** from working.

You’ll be practicing a very common real-world workflow:

✅ reproduce the bug  
✅ read the error message carefully  
✅ find the schema misconfiguration  
✅ fix the model so `.populate()` works

---

## 🧩 User Story

**As a user**, I want to see all tags associated with a post, so I can understand how that post is categorized.

---

## ✅ Expected Behavior

When a user requests a single post, the API should return:

- the `post` document
- and an array of its `tags`
- where `tags` are **fully populated** objects (not just ObjectIds)

---

## ❌ Actual Behavior

When you run the app and try to query a post, the server crashes with this error:

```sh
TypeError: Invalid schema configuration: `Tag` is not a valid type within the array `tags`
```

This tells us the `tags` field in the Post schema is not defined correctly.

---

## 🧪 Steps to Reproduce

1. From the `Unsolved/` folder, install dependencies:

```bash
npm install
```

2. Seed the database:

```bash
npm run seed
```

3. Start the dev server:

```bash
npm run dev
```

4. Confirm the server throws this error:

```sh
TypeError: Invalid schema configuration: `Tag` is not a valid type within the array `tags`
```

---

## 🛠️ Your Task

Fix the schema so that:

- `Post.tags` is an array of **ObjectId references**
- each tag references the correct model name
- `.populate('tags')` returns actual tag documents

---

## 💡 Hints

- When referencing another collection in Mongoose, you usually need:
  - `type: Schema.Types.ObjectId`
  - `ref: 'modelName'`

- If a controller calls `.populate('tags')` but the schema is wrong, you’ll get errors like the one above.

- Use `npm run dev` so Nodemon restarts your server automatically after changes.

---

## ✅ Definition of Done

You know you’re finished when:

- the server starts without crashing
- a GET request for a post returns tags as populated objects
- `tags` is an array of full Tag documents (not just IDs)

---

## 🏆 Bonus (Optional Research)

Research and discuss with your partner:

**When might `.populate()` be more efficient than using MongoDB’s `$lookup` aggregation?**  
(And when might `$lookup` be the better option?)

Use a search engine and be ready to summarize what you found in 2–3 sentences.

---
