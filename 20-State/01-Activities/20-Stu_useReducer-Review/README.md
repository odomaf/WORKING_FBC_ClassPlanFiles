# 📐 React State Management: Document the useReducer Logic

In this activity, you will work with a partner to analyze and document how the `useReducer` hook is being used in the application.

Your goal is to improve the readability of the code by adding clear comments that explain **what each part of the reducer logic is doing and why it exists**.

---

# 🎯 Activity Objective

As a developer, I want to understand how `useReducer` manages application state so that I can maintain and extend complex React components more effectively.

---

# 🧠 What You’re Practicing

This activity will help you practice:

- understanding the **useReducer hook**
- recognizing how **actions update application state**
- identifying when **dispatch() is used**
- improving code readability through **meaningful comments**

---

# 🧩 Your Task

Open the following file:

Unsolved/src/components/StudentList.js

Review the implementation and add comments that explain:

- what the reducer function is responsible for
- how different actions modify the state
- when the `dispatch()` function is called
- how state updates cause the UI to re-render

Your goal is to help a future developer quickly understand how the component works.

---

# 📚 Helpful Resources

React Documentation:

https://react.dev/reference/react/useReducer

---

# 💡 Guiding Questions

Discuss these questions with your partner as you review the code:

- When is **local component state** used instead of **shared or global state** in this application?
- What information must be passed to `dispatch()` in order to add a new major?
- How does the reducer determine which state update should occur?

---

# 🏆 Bonus Challenge

If you complete the commenting exercise early, research the following question:

How does React determine **which parts of the UI need to update when state changes?**

Consider topics such as:

- React reconciliation
- the Virtual DOM
- component re-rendering

---

# 🔎 Partner Discussion

Before finishing the activity, discuss:

1. When should a developer choose `useReducer` instead of `useState`?
2. What advantages does `useReducer` provide in larger applications?
3. Why is clear documentation important when working with reducer logic?

---

# ✅ Success Check

You know the activity is complete when:

- the reducer logic is clearly documented
- the purpose of each action is explained
- the flow between `dispatch()` → reducer → state update is easy to follow
