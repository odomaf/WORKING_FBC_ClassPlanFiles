# 08-Stu_Parse-JSON — Parsing API JSON with fetch()

**Goal:** Use the Star Wars API (SWAPI) to practice requesting data with `fetch()`, parsing JSON with `.json()`, and looping through results to extract specific fields.

---

## 🧠 What You’ll Learn

- Make a GET request using `fetch()`
- Convert a `Response` into a JavaScript object with `.json()`
- Inspect the returned data structure
- Loop through arrays of objects and log selected properties

---

## ✅ User Story

As a developer, I want to fetch characters from the Star Wars API so that I can parse the JSON response and read specific fields.

---

## ✅ Acceptance Criteria

- I open DevTools and see the **raw JSON** for `https://swapi.dev/api/people/` logged to the console.
- I see the **first 5** characters’ **name** and **birth_year** logged to the console.

---

## 🗂 Starter Files

- `index.html` — already includes `assets/js/script.js`
- `assets/js/script.js` — write code here

---

## 🚦 Instructions

1. In `assets/js/script.js`, set:

```
const requestUrl = 'https://swapi.dev/api/people/';
```

2. Call `fetch(requestUrl)`.

3. In the first `.then()`, return `response.json()`.

4. In the second `.then(data)`, log the raw `data` to see its shape.
   **Hint:** `data.results` is an array of character objects.

5. Loop through the **first 5** items in `data.results` and log:

- the `name` and `birth_year` (for example: `Luke Skywalker — 19BBY`).

6. _(Optional)_ Add a `.catch()` to log any network errors.

---

## 💡 Hints

- Use **DevTools → Console** to inspect `data`. Look for the `results` array.
- Index range for the first five items: `0` through `4`.
- Use `let`/`const` and **no arrow functions** (to match our current lesson).

---

## 🏆 Stretch Goals

- If any field is missing, log a fallback like `"Unknown"`.
- Log other properties such as `height`, `mass`, or `gender`.
- Render names on the page (create `<li>` elements) instead of logging only to the console.

---

## ✅ Quick Rubric

| Criteria                 | Expectation                                      |
| ------------------------ | ------------------------------------------------ |
| **Fetch used correctly** | `fetch → .then(response.json()) → .then(data)`   |
| **Data inspection**      | Raw data logged clearly                          |
| **Loop & log**           | Logs 5 characters’ name + birth_year             |
| **Code style**           | Uses `let`/`const`, readable, no arrow functions |

---

## 🔗 References

- **SWAPI Docs:** https://swapi.dev/documentation#people
- **MDN – Using Fetch:** https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
- **MDN – Promise.then():** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then

```

```
