# 🐛 Bug Hunt: Client/Server Fetch Not Working (UNSOLVED)

Work with a partner to fix a broken client/server setup.

## User Story
AS A user  
I WANT to click a button and load pet data onto the page  
SO THAT I can see each pet rendered as a card.

---

## ✅ Expected Behavior
When the user clicks **Fetch Pets**, the page renders a list of pet cards with:
- name
- description
- image

---

## ❌ Actual Behavior
When the user clicks **Fetch Pets**:
- nothing shows up on the page
- an error appears in the browser console

---

## 🔁 Steps to Reproduce
1. Start the server:
   `npm start`

2. Open:
   `http://localhost:3001`

3. Open DevTools Console:
   - Mac: `Command + Option + J`
   - Windows: `Ctrl + Shift + J`

4. Click **Fetch Pets** and investigate the error.

---

## 💡 Hints
- Try visiting the API endpoint directly in your browser.
- How can you test the endpoint outside of the browser UI? (Think: API testing tools)
- If your HTML loads but your JS/CSS doesn’t, what might be wrong?

---

## 🏆 Bonus
Research: What are **static assets** in a web app?

---
