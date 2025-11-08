# 🐛 Password Generator Doesn't Work on Single Click

Work with a partner to fix the password generator. Right now, **clicking the button does nothing**. Your job is to wire up the correct event and generate a **15-character** password.

## ✅ User Stories

- As a user, I can click the **Generate Password** button.
- As a user, a **single click** generates a new password.
- As a user, the password is **15 characters long** and shows on the page.

## 🧪 Expected vs. Actual

**Expected:** One single click prints a new 15-character password in the display area.  
**Actual:** Single click does nothing.

## 🧭 Steps to Reproduce

1. Open `index.html` in your browser.
2. Click **Generate Password** → nothing happens.

## 💡 Hints

- Are you selecting the button correctly? (IDs use `#foo`, classes use `.foo`)
- Are you listening for the **right event**?
- Are you passing the **right length** into your generator?

## 📚 Helpful References

- MDN — jQuery `on()` events (general event model): https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events
- W3Schools — jQuery Events: https://www.w3schools.com/jquery/jquery_events.asp
- MDN — `String.fromCharCode()`: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode

## 🏆 Bonus

- What are **alternate** ways to add event listeners in jQuery and vanilla JS?
- Add a quick “copy to clipboard” button for the password.

---
