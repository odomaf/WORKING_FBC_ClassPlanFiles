# 06-Stu_Query-Params — Add Comments (UNSOLVED)

In this activity, your job is **not** to change the logic.

Your job is to **add comments** that explain what the existing code is doing — especially how it uses:

- **Query string parameters** (ex: `?sort=asc`)
- **Route parameters** (ex: `/api/term/:term` and `/api/terms/:category`)

Work with a partner and write clear comments that a beginner could understand.

---

## ✅ What You’re Doing

- Open `Unsolved/server.js`
- Add comments above each route and inside key sections of logic
- Explain what `req.query` and `req.params` are doing in this app

---

## 📝 Notes

- Route parameters are denoted with a colon:
  - Example: `/api/term/:term`
- You can chain multiple route parameters together:
  - Example: `/api/items/:category/:id`

Reference:
- Express routing (params + patterns): `https://expressjs.com/en/guide/routing.html#route-paths`

---

## 🧪 Test URLs (Try these in the browser)

- All terms:
  - `http://localhost:3001/api/terms`

- Sort ascending:
  - `http://localhost:3001/api/terms?sort=asc`

- Sort descending:
  - `http://localhost:3001/api/terms?sort=dsc`

- Single term lookup:
  - `http://localhost:3001/api/term/http` (or try `api`, `dns`, etc.)

- All categories:
  - `http://localhost:3001/api/categories`

- Terms by category:
  - `http://localhost:3001/api/terms/web`
  - `http://localhost:3001/api/terms/cloud`
  - `http://localhost:3001/api/terms/networking`

---

## 🏆 Bonus

In your own words:
- When would you use **query string parameters** vs **route parameters**?

Use an online search or official docs to support your answer.

---
