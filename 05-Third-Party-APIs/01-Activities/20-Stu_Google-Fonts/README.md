# 20-Stu_Google-Fonts

## 🎯 Goal

Practice extending Bootstrap with **Google Fonts** and your own **custom CSS theme**.

You’ll start from a working guestbook page and focus on typography and style, not new functionality.

---

## 🧑‍💻 User Story

> As a user, I want a modern, professional-looking page with fonts and colors that make it stand out from the default Bootstrap look.

---

## ✅ Acceptance Criteria

- [ ] The page’s **body text** uses a font loaded from [Google Fonts](https://fonts.google.com/), not the default system font.
- [ ] The **headings** use a distinct Google Font for contrast.
- [ ] The overall style complements your chosen fonts (experiment with weights, colors, and spacing).

---

## 📝 Instructions

1. Open `index.html`.
2. Visit [Google Fonts](https://fonts.google.com/) and pick:
   - One **heading font**
   - One **body font**
3. Use the “Embed” tab on Google Fonts and copy the `<link>` tag(s).
4. Paste your link(s) in the `<head>` of `index.html` where it says `<!-- TODO -->`.
5. Update the `font-family` declarations in `assets/css/style.css` for:
   ```css
   body {
     font-family: "Your Body Font", sans-serif;
   }
   h1,
   h2,
   h3,
   h4,
   h5,
   h6 {
     font-family: "Your Heading Font", sans-serif;
   }
   ```
