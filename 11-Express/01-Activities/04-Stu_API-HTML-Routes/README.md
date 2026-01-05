# 🏗️ Create an API Route (UNSOLVED)

In this activity, you’ll practice building an **API endpoint** using Express.js.
Instead of returning an HTML page, your server will return **JSON data** from a file.

You’ll work with a partner to connect a browser request to structured data.

---

## ✅ User Story

AS A developer  
I WANT to create an API route that returns data from a JSON file  
SO THAT other applications or frontend code can consume that data.

---

## ✅ Acceptance Criteria

- It’s done when I have imported the Express.js library into my project.
- It’s done when I have created an `app` variable using `express()`.
- It’s done when I have created an API route at `/api`.
- It’s done when visiting `/api` in the browser returns the contents of `terms.json` as JSON.

---

## 🧪 How to Test

1. Start your server:
   `npm start`

2. Open your browser:
   `http://localhost:3001/api`

3. Confirm that JSON data is displayed in the browser.

---

## 💡 Hint

Which method on the `res` object is designed specifically for sending JSON responses?

---

## 🏆 Bonus

Once your API route is working, explore the following:

- What other response methods are available on the `res` object?
- When would you use `res.send()` vs `res.json()` vs `res.sendFile()`?

Use an online search or official documentation to research your answer.

---
