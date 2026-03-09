# 📝 Documenting Action Types

In this activity, your job is to improve the readability of a React application by adding helpful comments to the action types in:

```js
src / utils / actions.js;
```

Action types are small, but they play an important role in reducer-based state management. They act like **labels** that tell the reducer what kind of update should happen.

Your goal in this lab is not to change how the app works. Instead, your goal is to make the code easier for another developer to understand.

---

## 🎯 Learning Objectives

By completing this activity, you should be able to:

- Explain what an **action type** is
- Connect an action type to its matching reducer case
- Identify what kind of payload an action expects
- Write comments that describe the effect an action has on state

---

## 🧪 Your Task

Work with a partner to add helpful comments to:

```js
src / utils / actions.js;
```

For each action, your comments should describe:

1. what the action is used for
2. what input or payload it expects
3. what the overall effect will be on state

Do **not** change the action constant names.

---

## 🔎 Where to Look for Clues

To understand what each action does, inspect:

```js
src / utils / reducers.js;
src / tests / Reducers.test.jsx;
```

Ask yourself:

- What does this reducer case do?
- What kind of payload is being passed in?
- Does the action add, remove, or update data?
- What will the new state look like afterward?

---

## 💡 Example Thought Process

If you see an action like:

```js
ADD_STUDENT;
```

you should investigate:

- What happens in the `ADD_STUDENT` reducer case?
- Does it expect a full student object?
- Does it add that object to the `students` array?

Your comment should explain that clearly in plain English.

---

## ✅ Expected Outcome

By the end of this activity:

- the application should still work exactly the same
- the same action constants should still be exported
- each action should now include comments that make its purpose clear

---

## 🧠 Bonus Discussion

If you finish early, discuss these questions with your partner:

- What are some best practices for naming action types?
- Why is it helpful to keep action names descriptive and consistent?
- Why might a team use constants for actions instead of repeating string values in multiple files?

---

## 🚀 Stretch Thought

As applications grow, reducers may support many action types.

How could strong comments and clear naming make a larger React application easier to debug and maintain?
