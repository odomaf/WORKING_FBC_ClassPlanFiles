# 📇 Contact Book — Save an Object with `localStorage`

## Goal

Store a **contact object** `{ firstName, lastName, email }` in the browser using `localStorage`. Keep a list (array) of contacts, and render them to the page.

## What You’ll Practice

- Creating an object from form values
- Using `JSON.stringify()` and `JSON.parse()` to store/retrieve complex data
- Preventing form submit from reloading the page
- Rendering a list from data in `localStorage`
- Clearing/removing items from `localStorage`

## Acceptance Criteria

- When **Save Contact** is clicked, a contact object is created and saved in `localStorage` inside an array keyed by `"contacts"`.
- The **Contacts** table shows the most recent entries first.
- **Delete Last** removes the most recent contact from storage and re-renders.
- **Clear All** removes the `"contacts"` key and re-renders an empty state.

## Hints

- `localStorage.setItem('contacts', JSON.stringify(array))`
- `JSON.parse(localStorage.getItem('contacts')) || []`
- Always handle the case where nothing is saved yet.

## Bonus

- Add simple email validation (e.g., must contain `"@"`).
- Add a search box to filter contacts by name.
- Add per-row delete buttons using an index or timestamp.

**Reference:**

- MDN: [Window.localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- MDN: [JSON.stringify](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
