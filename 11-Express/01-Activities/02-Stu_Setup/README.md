# 02-Stu_Setup — Express Routing Setup (Student)

In this activity, you’ll wire up a basic Express server so it can:
- serve static files from the `public/` folder
- respond to a couple of routes by sending HTML pages

Your goal is to connect **client requests** (URLs) to **server responses** (HTML pages).

---

## ✅ User Story

AS A developer  
I WANT my server to respond to different URL paths  
SO THAT users can navigate to different pages in my app.

---

## ✅ Acceptance Criteria

- It’s done when I have created an `app` variable set to the value of `express()`.
- It’s done when I have set up middleware to serve static files from the `public/` folder.
- It’s done when I have created an HTML route to serve `paths.html`.
- It’s done when I have created an HTML route to serve `send.html`.

---

## 🧪 How to Test

1. In the `02-Stu_Setup` folder, install dependencies:
   `npm install`

2. Start the server:
   `npm start`

3. Open your browser:
   `http://localhost:3001`

4. Click the links on the home page to verify:
   - `/paths`
   - `/send`

---

## 💡 Hint

Why do we use Node’s built-in `path` module (like `path.join`) when sending files from the server?

---

## 🏆 Bonus

Try adding a third page called `about.html` and create a new route:
- `/about` → serves `about.html`

---
