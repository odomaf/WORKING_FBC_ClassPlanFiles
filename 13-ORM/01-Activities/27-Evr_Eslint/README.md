# 🐛 Debugging ESLint: Fix the Red Squiggles (Team Activity)

In this activity, your job is to take a messy JavaScript file and make it match a team’s agreed-upon style rules.

In real teams, ESLint isn’t “just annoying formatting.” It’s a tool that helps everyone write code that is:

- consistent
- easier to review
- less error-prone
- easier to maintain long-term

Today you’ll practice reading ESLint feedback and making targeted fixes.

---

## 🎯 Goal

Get the code in:

```
Unsolved/example.js
```

to pass **all rules** in:

```
Unsolved/.eslintrc.json
```

When you’re done:

- there should be **no red underlines**
- `npm run test` (or the lint command in the project) should pass

---

## ✅ Expected Behavior

- `example.js` follows the ESLint rules in `.eslintrc.json`
- The file has no ESLint errors in VS Code
- The lint/test script reports **0 issues**

---

## 🚫 Current Behavior

- ESLint highlights many issues in `example.js`
- The file breaks several rules (style + correctness)

---

## 🧰 Setup Steps

1. Install the VS Code ESLint extension:
   [https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

2. In the `Unsolved` folder, install dependencies:

   `npm install`

3. Open `Unsolved/example.js`.
   - If VS Code asks to enable ESLint, allow it.
   - Hover over red underlines to see **which rule is being violated**.

4. Optional: run lint/tests in the terminal to see all issues at once:

   `npm run test`

---

## 🧠 How to Work (Recommended Strategy)

Use this order so you don’t get overwhelmed:

1. **Fix syntax / correctness errors first** (these can cause multiple follow-on errors)
2. Fix **easy formatting rules** next (indentation, quotes, semicolons)
3. Fix **logic/style rules** last (unused variables, const vs let, eqeqeq, etc.)

> Tip: Don’t guess. Read the ESLint message, fix one issue, re-check.

---

## 💡 Hints

- Your source of truth is `.eslintrc.json` — it defines the team rules.
- ESLint rule names look scary, but they’re searchable.

Use ESLint’s official rule reference:
[https://eslint.org/docs/latest/rules/](https://eslint.org/docs/latest/rules/)

---

## 🏆 Bonus (Optional)

If your group finishes early, research and discuss:

- How can we ensure ESLint passes _before_ merging a GitHub pull request?
- What tools can enforce this automatically?

Keywords to search:

- "GitHub Actions eslint"
- "pre-commit hook husky lint-staged"
- "CI lint check"

---

## ✅ Summary

This activity is about building a real developer habit:

> Fix lint errors like a pro: read the rule, make a small change, re-check, repeat.

Clean code isn’t just prettier — it’s easier to ship and easier to maintain.
