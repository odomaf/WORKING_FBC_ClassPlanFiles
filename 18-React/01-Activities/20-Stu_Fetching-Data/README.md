# Week 18 — Fetching Data (Student Activity)

## 🧩 Scenario

You’re building a small “movie search” page using the OMDb API.

- The **right side** has a search form
- The **left side** should display the movie details

Right now, the app has a few bugs and the movie info is not displaying correctly.

---

## 🧠 User Story

As a user,  
I want to search for a movie title using the form,  
So that I can see the movie details displayed on the page.

---

## ✅ Expected Behavior

- When the page loads, the result for **"The Matrix"** displays automatically.
- When the user searches for a movie (ex: **"Interstellar"**), the details update on the left.
- After searching, the input clears.

---

## 🐛 Actual Behavior

- The default movie result does not reliably display.
- Submitting the form does not actually perform the search.
- The input handler is not updating state correctly.
- The app re-fetches too often due to a `useEffect` bug.

---

## 🎯 Your Task

Fix the TODOs inside:

`Unsolved/src/components/OmdbContainer.jsx`

Focus on:

1. Fixing `useEffect` so it only runs once on page load
2. Fixing the input handler so it updates state
3. Fixing form submit so it searches the API using the current input value

---

## ✅ Acceptance Criteria

This activity is complete when:

- "The Matrix" displays when the page loads
- Searching for a movie displays results
- The search input updates while typing
- The search input clears after submitting
- `useEffect` does not run on every render

---

## 🏆 Bonus

Add a small guard so the search doesn’t run if the input is empty (spaces don’t count).

---

## Getting Started

From the `Unsolved` folder:

1. `npm install`
2. `npm run dev`
