# 🧩 Study Boost Board — Modular Routing

In this activity, you’ll practice **modular routing** in Express.

Instead of keeping every route inside `server.js`, we split routes into separate files and “plug them in” using `router.use()`.

This app has two features:

- **Study Hacks** (quick tips students share)
- **Help Requests** (questions students submit when they’re stuck)

---

## ✅ User Story

**AS A** student learning web dev  
**I WANT** to submit study hacks and help requests  
**SO THAT** the server can save them and other students can benefit

---

## 🎯 Learning Goals

By the end, you should be able to:

- Explain what an Express `Router()` is
- Organize endpoints into separate route files
- Mount routers with `router.use('/path', router)`
- Confirm routes work by testing `GET` + `POST` endpoints

---

## 🐛 The Bug (Unsolved)

The codebase is already modularized… but the API routes **aren’t wired up**.

That means the frontend fetch requests hit endpoints like:

- `GET /api/hacks`
- `POST /api/hacks`
- `GET /api/requests`
- `POST /api/requests`

…but Express returns **404 Not Found** because the routers haven’t been mounted correctly.

---

## ✅ Expected Behavior

When you start the app and load the page:

- Existing **Study Hacks** should appear on the homepage
- Submitting a new hack should save it into the JSON file
- Submitting a help request should save it into the JSON file

---

## ❌ Actual Behavior (Unsolved)

- No hacks load on page refresh
- Posting a hack or request fails because the API routes return 404

---

## 🧪 Steps to Reproduce

1. Open the `Unsolved/` folder in your terminal.
2. Install dependencies:

   - `npm install`

3. Start the server:

   - `npm start`

4. Visit:

   - `http://localhost:3001`

5. Open DevTools → Console / Network and observe the failed requests to `/api/...`

---

## ✅ Your Task

Fix the bug by wiring up the routers.

### Where to work

- `Unsolved/routes/index.js`

### What you need to do

- Create an Express router
- Import the two routers:
  - `routes/tips.js` (handles **/api/hacks**)
  - `routes/feedback.js` (handles **/api/requests**)
- Mount them using `router.use()`

---

## 💡 Hint

If `server.js` has:

- `app.use('/api', apiRouter demonstrates);`

…and your router file has:

- `router.use('/hacks', hacksRouter);`

Then your final endpoint becomes:

- `/api/hacks`

---

## 🏁 Success Check

When you’re done:

- Homepage shows existing study hacks
- Submitting a hack pops an alert and adds a card to the page
- Submitting a help request pops an alert `"success"`
- JSON files in `db/` are updated

---

© 2026 Course Materials (Adapted for class).
