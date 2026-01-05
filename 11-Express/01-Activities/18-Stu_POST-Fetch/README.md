# 📐 Add Comments to Client-Side POST Requests

In this activity, you will **analyze and document how client-side POST requests work** using the Fetch API.  
Your goal is **not to change functionality**, but to clearly explain *how data flows from the browser to the server*.

You will work with a partner to add meaningful comments to the provided files.

---

## 🧠 User Story

As a developer, I want to understand how client-side POST requests send data to an Express.js server so that I can confidently build full-stack applications.

---

## ✅ Acceptance Criteria

You have completed this activity when:

- It is clear **where the data being sent to the server comes from**
- It is clear **how the Fetch API sends data using a POST request**
- It is clear **how `req.body` on the server receives that data**
- Comments clearly explain:
  - What each major block of code does
  - Why specific Fetch options are required
  - What happens when the form is submitted

---

## 🗂️ Files to Review and Comment

You will add comments to the following files:

- `public/scripts/index.js`
- `server.js`

⚠️ Do **not** change the logic or behavior of the application.  
Only add **clear, descriptive comments**.

---

## 🔍 Focus Areas

When adding comments, make sure you address:

### Client-Side (`index.js`)
- Where the form input values come from
- How a JavaScript object is created from user input
- Where the POST request data is stored
- Why `JSON.stringify()` is required
- Why the `Content-Type` header is necessary
- What `fetch()` returns and how `.then()` is used

### Server-Side (`server.js`)
- What middleware is responsible for parsing the request body
- How `req.body` is populated
- How route parameters (`req.params`) are used
- How new data is validated and added
- What the server sends back to the client

---

## 📝 Notes

Think about this question as you work:

**Where does the information live when we send it to the server using `fetch()`?**

Helpful reference:
- MDN – Using Fetch  
  https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

---

## 💡 Hints

- Look for `body:` inside the `fetch()` call
- Look for `req.body` on the server
- Look for middleware like `express.json()`
- Follow the data step-by-step from form → JavaScript → server → response

---

## 🏆 Bonus

If you finish early, research and answer:

- What other `Content-Type` values can be used in POST requests?
- When might you send data as `application/x-www-form-urlencoded` instead of JSON?

Use Google or MDN to research your answer.

---
