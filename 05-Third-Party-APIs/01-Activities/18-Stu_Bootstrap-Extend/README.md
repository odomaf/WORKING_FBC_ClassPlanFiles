# 🏗 Extend Bootstrap with Custom Styles

**Goal:** Build on top of Bootstrap to give your webpage a _custom brand look_.  
You’ll keep Bootstrap’s grid and components, but override its default colors using your own classes and CSS variables.

---

## 🎯 User Story

As a user, I want to visit a site that uses a custom color theme and branding.

---

## ✅ Acceptance Criteria

- It's done when the page no longer relies on Bootstrap’s default blue and gray colors.
- It's done when custom colors and styles are applied using your own CSS classes.
- It's done when your hero section, navbar, and buttons share a consistent theme.

---

## 🧰 Setup

You already have:

- Bootstrap and jQuery included via CDN
- A functional guestbook form and display logic
- A `style.css` file ready to customize

Your job: **replace Bootstrap’s defaults with your own theme.**

---

## 🧩 Steps

1. **Add custom class names**  
   Give the navbar, hero section, button, and cards your own classes.  
   Examples: `.custom-navbar`, `.custom-btn`, `.custom-card`

2. **Define a color palette**  
    Open `assets/css/style.css` and define your own CSS variables:

   ```:root {
   --primary: #2a9d8f;
   --secondary: #264653;
   --accent: #e9c46a;
   --light: #fdfdfd;
   }

   ```

3. **Apply your custom colors**

- Change the navbar background color
- Update text and hover colors for navbar links
- Set a custom background for the hero section
- Restyle the “Leave your mark” button

4. **Customize the guestbook cards**  
   Change card borders, header colors, and text styles using your new palette.

---

## 🧠 Tips

- You’re extending Bootstrap — not replacing it.  
  Always load your `style.css` _after_ Bootstrap in your HTML.

- Use descendant selectors when Bootstrap’s styles are too specific:

```
.custom-navbar .nav-link {
color: var(--accent);
}```

- Use Chrome DevTools to inspect elements and see what Bootstrap classes are doing under the hood.

---

## 📚 Helpful Resources

Copy these URLs into your browser for documentation:

- Bootstrap Utilities Overview: https://getbootstrap.com/docs/5.1/utilities/api/
- Bootstrap Components Reference: https://getbootstrap.com/docs/5.1/components/alerts/
- MDN – CSS Variables: https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties
- W3Schools – CSS Variables Tutorial: https://www.w3schools.com/css/css3_variables.asp
- Adobe Color Palette Generator: https://color.adobe.com/

---

## 🏆 Bonus Challenges

- 🎨 Create two or more theme variations and swap them by toggling a class on `<body>`.
- 🧠 Research another CSS framework (Bulma, Materialize, Tailwind) and compare it to Bootstrap.
- ⚡ Animate your button hover or card appearance using CSS transitions.

---

### 💾 Deliverables

| File                   | Description                                      |
| ---------------------- | ------------------------------------------------ |
| `index.html`           | Basic layout using Bootstrap grid and components |
| `assets/css/style.css` | Custom color variables and theme styles          |
| `assets/js/script.js`  | jQuery form logic — works as-is                  |
| Screenshot             | Optional preview of your custom theme            |
````
