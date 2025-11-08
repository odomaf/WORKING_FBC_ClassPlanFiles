# 📘 Student Roster — Persisting Arrays in localStorage

**Goal:** Save multiple grade entries to `localStorage` as an **array of objects**, show the **last saved** entry, and render the **full roster** in a table.

You received HTML/CSS and an `assets/js/script.js` with **TODOs**. Complete those TODOs to make the app work.

---

## ✅ User Story

As a student developer, I want to store each submission (student, grade, comment, timestamp) in the browser using `localStorage` so that I can see the last saved entry and a full roster list even after refreshing the page.

---

## ✅ Acceptance Criteria

- It’s done when submitting the form **adds a new entry** (object) to an **array** in `localStorage` under a single key (e.g., `studentRoster`).
- It’s done when the **Last Saved Grade** card shows the **most recent** saved entry’s student, grade, comment (or `—`), and a readable timestamp.
- It’s done when the **Roster** table lists **all entries**, sorted with the **most recent first**.
- It’s done when **Delete Last** removes the most recent entry and updates the UI and storage.
- It’s done when **Clear All** wipes the array from storage and updates the UI.
- It’s done when the page **re-renders correctly** after each action (save, delete last, clear all).

---

## 🧠 Hints

- Use `JSON.stringify(array)` to save data to `localStorage`.
- Use `JSON.parse(string)` to convert storage text back to an array.
- If `localStorage.getItem(KEY)` returns `null`, treat it as an empty array.
- A helpful pattern:
  1. **Read** the array from storage.
  2. **Modify** it (push/pop/splice).
  3. **Write** it back.
  4. **Render** the UI again.

> Avoid arrow functions this week. Use `function () {}` and standard DOM methods.

---

## 🧪 Suggested Steps

1. Implement `readRoster()` and `writeRoster(list)`.
2. Implement `renderTable()` and call it once on page load.
3. Implement `renderLastSaved(entry)`.
4. Implement the **Save** handler to build an entry object:
   ```js
   var now = new Date();
   var entry = {
     student: /* ... */,
     grade: /* ... */,
     comment: /* ... */,
     savedAt: now.getTime(),
     savedAtDisplay: now.toLocaleString()
   };
