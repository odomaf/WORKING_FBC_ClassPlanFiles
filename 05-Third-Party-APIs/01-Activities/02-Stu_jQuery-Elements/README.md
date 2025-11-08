# 02-Stu — jQuery Elements (Unsolved)

**Goal:** Use jQuery (from a CDN) to create elements in JavaScript and add them to the page.  
You’ll build a **quote** inside an `<h1>` and an **author** inside a `<p>`, then append them to `#root`.

## What you’ll practice

- Selecting with `$('#id')`
- Creating elements with `$('<tag>')`
- Setting text with `.text()`
- Adding classes with `.addClass()`
- Appending with `.append()`
- Document ready with `$(function(){ ... })`

## Starter Files

- `index.html` — includes jQuery via CDN and your empty `<main id="root">`.
- `assets/js/script.js` — where you’ll write your jQuery code.
- `assets/css/style.css` — minimal styles for `.fancy` and `.plain`.

## Instructions

Open `assets/js/script.js` and complete the TODOs in order:

1. **Select** `#root` and save it as `rootEl`.
2. **Create** a `<p>` and save it as `authorEl`.
3. **Set text** of `authorEl` to: `~ Carol Dweck`.
4. **Add class** `plain` to `authorEl`.
5. **Create** an `<h1>` and save it as `quoteEl`.
6. **Set text** of `quoteEl` to:  
   `Love Challenges, Be Intrigued by Mistakes, Enjoy Effort, and Keep Learning.`
7. **Add class** `fancy` to `quoteEl`.
8. **Append** `authorEl` **inside** `quoteEl`.
9. **Append** `quoteEl` **into** `#root`.

> 💡 Tip: Make sure your code runs inside `$(function(){ /* your code */ })` so it runs after the page loads.

## Acceptance Criteria

- The page shows a large **quote** (an `<h1>` with class `fancy`).
- The **author** appears **inside** the `<h1>` in a `<p>` with class `plain`.
- You **did not** type any quote/author HTML in `index.html` — it’s all created with jQuery.
- No errors in the browser console.

## Stretch Goals (optional)

- Change the quote color with jQuery:  
  `$('.fancy').css('color', 'rgb(48, 218, 236)');`
- Add a second author line in another `<p>` with class `plain`.
- Wrap everything in a new `<section>` you create with jQuery and append it to `#root`.

## References

- **W3Schools (jQuery Intro):** https://www.w3schools.com/jquery/jquery_intro.asp
- **W3Schools (jQuery HTML/CSS):** https://www.w3schools.com/jquery/jquery_dom_get.asp
- **MDN (DOM Manipulation Overview):** https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction
- **MDN (`DOMContentLoaded` vs jQuery ready):** https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event
