# Setting Attributes — Student Activity

## Objective
Use JavaScript to modify HTML attributes dynamically and style multiple elements with a loop.

## Steps
1. Open `index.html` in your browser.
2. In `assets/js/script.js`, complete the tasks:
   - Select and update each site section’s link, image, and text.
   - Use `.setAttribute()` to apply `src`, `alt`, `href`, and `style` values.
   - Use `.querySelectorAll()` to grab all `<h4>` tags and style them in a loop.
3. Open DevTools → **Console** to verify that the attributes update correctly.

## Done When
- Each of the three sections displays a title and an image.
- Each image links to an external website in a new tab.
- All `<h4>` titles share the same font, size, color, and padding.

## Tips
- Place `<script>` at the **end** of `<body>` to ensure elements exist before JavaScript runs.
- `.setAttribute("style", "property:value;")` can set multiple CSS properties at once.
- Use `querySelectorAll()` to return a list and iterate with a `for` loop.

## Troubleshooting
- If an image doesn’t load, check the `src` URL.
- Ensure quotation marks are correct inside `.setAttribute()`.
- Use the Console to check for typos or syntax errors.

