# 🐛 Bug Fix: New Feedback Deletes Old Feedback

In this activity, you’ll practice **server-side data persistence** by saving form submissions to a JSON file.

Right now, the app has a problem:

> When a user submits feedback, the server saves it… but it accidentally **replaces** everything that was already in the JSON file.

Your job is to fix it so new feedback gets **added to the existing list**.

---

## ✅ Expected Behavior

When a user submits feedback:

- the new review should be appended to the array in `db/reviews.json`
- the existing reviews should still be there

---

## ❌ Actual Behavior

When a user submits feedback:

- `db/reviews.json` gets overwritten
- the file only contains the newest review

---

## 🔁 Steps to Reproduce

1. Install dependencies and start the server:

   - `npm install`
   - `npm start`

2. Open the app in the browser:

   - `http://localhost:3001`

3. Submit a new review.

4. Open `db/reviews.json`

5. Notice your new review is there… but the older reviews disappeared.

---

## 💡 Hint

You can’t “append” JSON safely by just writing text to the end of a file.

Instead, think in steps:

1. Read the existing JSON file
2. Convert it into a JavaScript array
3. `push()` the new review into the array
4. Write the updated array back to the file

---

## 🏆 Bonus (Optional)

Without using a database, what are other ways a server can persist data?

Examples to research:
- CSV files
- SQLite
- LowDB
- Local storage vs cookies (client-side persistence)

---
