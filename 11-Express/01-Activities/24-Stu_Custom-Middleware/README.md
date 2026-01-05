# 🐛 Custom Middleware Logging Not Working (Study Boost Board)

Work with a partner to resolve the following issue:

- **As a developer**, I want to use **logging middleware** in my Express app so I can see when an endpoint is used.

This app is themed as a **Study Boost Board**:
- Users can submit **Study Hacks**
- Users can submit **Help Requests**

---

## ✅ Expected Behavior

When a user makes a request to an endpoint, the custom middleware should:

- intercept the request,
- log the request method + path (GET/POST/etc.),
- print the log to the terminal.

---

## ❌ Actual Behavior (Unsolved)

Requests work (data is saved), **but nothing is logged** in the terminal.

---

## 🧪 Steps to Reproduce

1. Navigate to `24-Stu_Custom-Middleware/Unsolved` and run:

   - `npm install`
   - `npm start`

2. Using Insomnia, make a **POST** request to:

   - `http://localhost:3001/api/hacks`

   with this request body:

   ```json
   {
     "username": "Sarah",
     "category": "Study",
     "hack": "Explain the concept out loud to test understanding."
   }
   ```

3. In the terminal where your server is running, notice the request **does not** get logged by the middleware.

---

## ✅ Your Task

Find why the middleware is not running, and fix it so requests are logged.

---

## 💡 Hints

- Middleware must be **registered** with Express using `app.use(...)`.
- Middleware should usually be registered **before** your routes, so it can intercept requests.

---

## 🏆 Bonus

**Wildcard routes** allow you to match multiple paths with a single route definition.

Example idea (don’t implement unless instructed): a route that matches anything under `/api/*`.

Use Google to research:
- Express wildcard route patterns
- `*` in route paths

---

© 2026 Course Materials (Adapted for class).
