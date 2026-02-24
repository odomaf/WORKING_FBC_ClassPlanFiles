# Week 18 — React Testing (Student Activity)

## 🎯 Objective

In this activity, you’ll practice writing tests to confirm that React components:

1. Render without crashing
2. Display expected text/content
3. Match a snapshot (so UI changes are intentional)

This is a real workflow used in teams to prevent accidental UI regressions.

---

## 🧠 User Story

As a developer,  
I want to test that my components render properly,  
So that I can ship code with more confidence.

---

## ✅ What You’ll Do

You’ll complete the tests inside:

- `Unsolved/src/tests/IssueItem.test.jsx`
- `Unsolved/src/tests/IssueList.test.jsx`
- `Unsolved/src/tests/SearchBar.test.jsx`

Each test file should:

- Import the correct component
- Render it using React Testing Library
- Assert expected content (text exists)
- Create a snapshot using `pretty(...)`

---

## ✅ Acceptance Criteria

This activity is complete when:

- `pretty` is installed as a dev dependency in the Unsolved project
- Each `*.test.jsx` file imports the correct component
- Each component has a passing “renders/contains text” test
- Each component has a passing snapshot test
- All tests pass when you run:

npm test

---

## 🏁 Getting Started

From the `Unsolved` folder:

1. npm install
2. npm test

---

## 🏆 Bonus Discussion

What kinds of bugs can testing help prevent?

Examples:

- A component stops rendering after a refactor
- A title/label disappears
- A CSS class changes and breaks layout
- A prop mismatch causes blank UI

---

Week 18 — React Fundamentals
