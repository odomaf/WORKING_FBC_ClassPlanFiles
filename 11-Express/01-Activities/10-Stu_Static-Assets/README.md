# 📖 Serve Static Assets with Express Middleware

Work with a partner to complete this activity.

## User Story
AS A web developer  
I WANT Express to automatically serve static files  
SO THAT I don’t need to create a separate route for every image, CSS file, or script.

---

## ✅ Acceptance Criteria

- It’s done when static assets are served using Express middleware.
- It’s done when `express.static()` is used to define a folder that holds static files.
- It’s done when assets inside the `public` directory (HTML, CSS, images) are accessible through the browser.

---

## 🧠 What You’re Practicing

- Understanding what **static assets** are
- Using middleware to reduce repetitive route logic
- Learning how Express maps URLs to files automatically
- Debugging broken asset paths using the browser

---

## 📝 Notes

When using static middleware:

- Express exposes files **relative to the folder you provide**
- URLs should NOT include the word `public`
- If `public` is the static root:
  - `/images/photo.jpg` maps to `public/images/photo.jpg`
  - `/styles/jass.css` maps to `public/styles/jass.css`

Reference:
- Express static files documentation  
  https://expressjs.com/en/starter/static-files.html

---

## 💡 Hints

- What happens if you try to visit an image URL directly in the browser?
- How does Express know which folder to look in?
- What file should the root (`/`) route send back?

---

## 🏆 Bonus

Research and discuss with your partner:

- What are other examples of middleware in Express?
  - (Hint: logging, JSON parsing, authentication)

Use an online search or official documentation to support your answer.

---
