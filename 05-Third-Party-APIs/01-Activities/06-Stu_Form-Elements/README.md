# 06-Ins_Form-Elements — ✅ Shopping List

This example demonstrates how to use **jQuery** to capture form input, append it to the DOM, and reset the input field — a simple, practical way to reinforce how jQuery handles **forms**, **events**, and **DOM updates**.

---

## 🧠 Key Concepts

- Preventing default form behavior with `event.preventDefault()`
- Reading values from input fields using `.val()`
- Appending dynamic content with `.append()`
- Clearing input fields
- (Bonus) Removing items with event delegation

---

## 🧩 How It Works

1. The user types an item name and submits the form.
2. The handler intercepts the submit event.
3. The input value is read, validated, and appended to the list.
4. The input field is cleared for the next item.
5. Each list item also includes a “Remove” button (bonus).

---

## 📚 References

- [jQuery Forms Documentation](https://api.jquery.com/category/forms/)
- [MDN — Event.preventDefault()](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)
- [W3Schools — jQuery val()](https://www.w3schools.com/jquery/html_val.asp)

---

## 💡 Bonus Features

This instructor version includes:

- “Remove Item” buttons via **event delegation**
- Trimmed input validation to ignore blank entries
- A friendly log message for empty submissions

---

## 🏁 Try It Yourself

1. Open `index.html` in your browser.
2. Type “Eggs” and click **Add Item** — it appears instantly.
3. Type another item, hit **Enter**, and watch it append.
4. Click the ❌ next to an item to remove it.

---
