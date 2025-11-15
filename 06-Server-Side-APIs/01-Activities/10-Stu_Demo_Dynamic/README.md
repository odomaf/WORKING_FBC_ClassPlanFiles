# 10-Stu_Fetch-Dynamic-Elements (SWAPI Edition)

Use the Star Wars API (SWAPI) with `fetch()` and dynamically create HTML elements to display character data.

---

## What You Will Practice

- Making a GET request with `fetch()`
- Using `.then()` to parse JSON
- Looping through an array in the response
- Creating and appending DOM elements

---

## User Story

As a developer, I want to request Star Wars character data  
so that I can display each character’s details on a webpage.

---

## Acceptance Criteria

- When I click the “Load Characters” button, the app requests:

  https://swapi.dev/api/people/?page=1

- I can see the raw API response in DevTools → Console.
- The page dynamically displays several characters with:
  - an `<h3>` for the character name
  - a `<p>` for the character birth year and gender

---

## Files to Edit

- `assets/js/script.js` — complete the `getPeople()` function.

---

## Instructions

1. In `assets/js/script.js`, define the request URL:

   const requestUrl = 'https://swapi.dev/api/people/?page=1';

2. Call `fetch(requestUrl)`.

3. In the first `.then()` callback:

   - return `response.json()` so you can work with the parsed data.

4. In the second `.then()` callback:

   - log the full `data` object to the console so you can inspect its shape:

     console.log(data);

5. Loop over `data.results`. For each `person`:

   - create an `<h3>` element for the name
   - create a `<p>` element for birth year and gender
   - set their `textContent` to something like:

     Name: Luke Skywalker  
      Born: 19BBY — Gender: male

   - append both elements to the container with the id `people`.

6. Wire the button to trigger your function:

   fetchButton.addEventListener('click', getPeople);

---

## Hints

- Use `let` and `const` (not `var`).
- Follow the same `.then()` style as class examples (no arrow functions needed).
- If nothing appears on the page:
  - check DevTools → Console for JavaScript errors
  - make sure your `script.js` file is correctly linked in `index.html`
  - check that the element with id `people` exists.

---

## Stretch Goals

If you finish early, try one or more of these:

- Add an `<hr>` element between each character block.
- Show extra fields such as `height` and `mass`.
- Add a second button, “Load More”, that loads:

  https://swapi.dev/api/people/?page=2

  and appends more characters to the page.

---

## References

- SWAPI (Star Wars API): https://swapi.dev/
- MDN: Using the Fetch API  
  https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
- MDN: `document.createElement()`  
  https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
- MDN: `ParentNode.append()`  
  https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/append
