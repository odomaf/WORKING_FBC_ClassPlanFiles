# 🧠 22-Stu_Local-Storage — Save User Profile with localStorage

## 🏗️ Implement Client-Side Storage for a Sign-Up Form Using `localStorage`

Work with a partner to complete the following user story:

> **As a developer**, I want to save a user’s name and username to the browser’s `localStorage` and display the last registered profile on the page.

---

## 🧩 Objectives

- Learn how to use `localStorage` to persist data between page reloads.  
- Practice using `setItem()`, `getItem()`, and conditional rendering.  
- Validate form input before saving data.  
- Dynamically update the DOM with stored values.

---

## ✅ Acceptance Criteria

- **Last Registered User** shows the name and username retrieved from `localStorage`, if they exist.  
- After clicking **Save Profile**, the entered name and username are stored in `localStorage`.  
- The profile card updates immediately after saving.  
- A success or error message appears depending on input validity.

---

## 💡 Hints

- Use `localStorage.getItem('key')` to retrieve data.  
- Use `localStorage.setItem('key', value)` to save data.  
- Data in `localStorage` persists even after the browser is closed.

---

## 🏆 Bonus Challenges

1. Add a **Clear Profile** button that removes stored data using:
   ```js
   localStorage.removeItem('name');
   localStorage.removeItem('username');
