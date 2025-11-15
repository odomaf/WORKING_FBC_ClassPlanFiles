# README.md

## 06-Stu_Compare-API-Responses

### 🧠 Learning Goals
- Trigger API requests three different ways: XMLHttpRequest, jQuery AJAX, and Fetch
- Observe and explain differences between response objects and parsed data
- Practice basic error handling with AJAX and Fetch
- Use let/const and .then() (no arrow functions yet)

---

### 🎯 Your Task
Open `assets/js/script.js` and complete the TODOs to:
1) Make a request to the Star Wars API (SWAPI) for page 1 of people  
2) Log and compare the three approaches:
   - jQuery AJAX (already-parsed JSON)
   - Fetch (Response object, then parse with `.json()`)
   - XMLHttpRequest (raw text, manual `JSON.parse`)

You should see three labeled sections in the console and be able to describe what’s different about each one.

---

### 🧩 Steps
1. In `assets/js/script.js`, confirm `requestUrl` points to:  
   https://swapi.dev/api/people/?page=1

2. Complete each section’s TODOs:
   - jQuery AJAX: log the response and add a comment about why parsing isn’t needed
   - Fetch: log the `Response` object, check `response.ok`, then `return response.json()`
   - XHR: log `xhr.responseText`, then parse it with `JSON.parse` and log the parsed object

3. Open DevTools (Console) and click refresh. Compare what each section prints and add comments explaining:
   - What’s included in the Fetch `Response` object (e.g., `status`, `ok`, `headers`)
   - Why jQuery’s response is already a JavaScript object
   - Why XHR requires manual JSON parsing and more boilerplate

---

### ✅ What You Should See
- A labeled log for jQuery AJAX with an object that already looks like parsed JSON  
- A Fetch log that first shows a `Response` object, then a second log showing parsed JSON  
- An XHR log that shows raw text first, then (after your TODO) a parsed JSON object

---

### 🚀 Stretch Ideas
- Change the endpoint to `?page=2` and discuss any differences
- In Fetch, log `response.status` and `response.headers.get('content-type')`
- Add `.catch(...)` error handling to jQuery AJAX if you haven’t already
- Add `xhr.onerror = function(){ ... }` for basic XHR error handling

---

### 📚 Helpful Resources
- MDN: Using the Fetch API  
  https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

- MDN: Promise.then()  
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then

- W3Schools: AJAX Intro  
  https://www.w3schools.com/xml/ajax_intro.asp

- jQuery: $.ajax()  
  https://api.jquery.com/jQuery.ajax/

- MDN: XMLHttpRequest  
  https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest

---

### 🧑‍🏫 Instructor Notes
- Keep students on `.then()` (no arrow functions yet)  
- Encourage them to annotate with comments about response shapes  
- If network calls are slow, discuss loading states and why they matter
