# Week 18 — React Forms (Student Activity)

In this activity, you’ll practice building a **controlled form** in React.

A “controlled form” means:

- React state is the **source of truth**
- Inputs display `value={state}`
- Inputs update state with `onChange`

---

## Your Task

Work with a partner to implement the following user stories:

- As a developer, I want to prevent empty input for the **email** and **username** fields.
- As a developer, I want to improve UX by **clearing the form** after a successful submit.
- As a developer, I want to make the form more complete by adding a **password** field.
- As a developer, I want to validate that:
  - the email is formatted correctly
  - the password meets basic strength rules

---

## Acceptance Criteria

This activity is complete when:

- The form includes **email**, **username**, and **password** inputs.
- Submitting with missing fields shows an error message.
- Submitting with an invalid email shows an error message.
- Submitting with a weak password shows an error message.
- A successful submission:
  - shows a success alert
  - clears the input fields back to empty strings
  - clears any error message

---

## Hints

You have helper functions available here:

`src/utils/helpers.js`

- `validateEmail(email)`
- `checkPassword(password)`

---

## Getting Started

From the `Unsolved` folder:

```bash
npm install
npm run dev
```
