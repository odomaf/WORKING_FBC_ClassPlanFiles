# 12-Stu_Bootstrap-Components

## 🧩 Overview

In this activity, you’ll use **Bootstrap 5** components to quickly build a fully styled page **without writing custom CSS**.

Work with a partner to complete the user story:

> As a developer, I want to be able to quickly put together a webpage without having to write custom CSS.

---

## ✅ Acceptance Criteria

Your page should include all of the following:

1. A **styled navbar**
2. A **styled and dismissible alert box**
3. A **styled form**
4. A **styled list with badges**
5. A **styled card** with:
   - Header
   - Body content
   - List inside the card
   - Footer section or card links

When all of those are present and look like Bootstrap components, you’re done.

---

## 🗂 Files

You’ll be working in:

- `index.html`

Bootstrap is already linked for you via CDN.

---

## 🛠 Instructions

Follow the comments in `index.html` and use the Bootstrap docs:

1. **Navbar**

   - Use `.navbar`, `.navbar-expand-lg`, `.navbar-dark`, `.bg-dark`.
   - Add brand text: `Built With Bootstrap`.
   - Add some nav links and a disabled item.
   - Make sure it collapses on smaller screens.
   - Docs: https://getbootstrap.com/docs/5.1/components/navbar/

2. **Alert**

   - Add a contextual alert, e.g. `.alert-warning` or `.alert-success`.
   - Make it dismissible with `.alert-dismissible`, `.fade`, `.show`, and a `.btn-close`.
   - Docs: https://getbootstrap.com/docs/5.1/components/alerts/

3. **Form**

   - Wrap inputs in spacing helpers like `.mb-3` (instead of writing custom CSS).
   - Use `.form-label`, `.form-control`, `.form-check`, `.form-check-input`, `.form-check-label`.
   - Include:
     - Email + helper text
     - Password
     - Checkbox
     - Submit button (`.btn`, `.btn-primary`).
   - Docs: https://getbootstrap.com/docs/5.1/forms/overview/

4. **List with Badges**

   - Use `.list-group` and `.list-group-item`.
   - On the right side of each item, add a `.badge` (e.g. `.bg-primary`, `.rounded-pill`).
   - Use flex helpers like `.d-flex`, `.justify-content-between`, `.align-items-center` to position content.
   - Docs:
     - List group: https://getbootstrap.com/docs/5.1/components/list-group/
     - Badges: https://getbootstrap.com/docs/5.1/components/badge/

5. **Card**
   - Use `.card`.
   - Add:
     - `.card-header` for the title.
     - `.card-body` with `.card-title` and `.card-text`.
     - A `.list-group.list-group-flush` inside the card.
     - A footer or `.card-body` with `.card-link` elements.
   - Docs: https://getbootstrap.com/docs/5.1/components/card/

---

## 💡 Hints

- Don’t add custom CSS—**lean on Bootstrap classes**.
- Use Chrome DevTools to inspect elements and experiment with classes.
- The left sidebar of the Bootstrap docs shows all components. Skim it!

---

## 🏆 Bonus

If you finish early:

- Look up: **How did Bootstrap originate?**
- Discuss: Why are CSS frameworks useful? What are tradeoffs vs. writing your own CSS?

---
