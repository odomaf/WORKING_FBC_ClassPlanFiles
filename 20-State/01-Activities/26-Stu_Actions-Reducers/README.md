# 📐 Code Review: Understanding a Reducer Implementation

In this activity, you will work with a partner to review and document how a reducer is used to manage application state.

Reducers are commonly used in React applications when state management becomes more complex than what `useState` can easily handle.

Your goal is to read the reducer logic and add comments that clearly explain how state changes occur.

---

# 🎯 Activity Objective

As a developer, I want to understand how reducers process actions and update application state so I can manage complex state changes in React applications.

---

# 🧠 What You’re Practicing

This activity will help you practice:

- understanding the **reducer pattern**
- identifying how **actions trigger state updates**
- reading and documenting **state management logic**
- improving code readability through **clear comments**

---

# 🧩 Your Task

Open the following file:

client/src/utils/reducers.js

Add comments that explain:

- the purpose of the reducer function
- how the `action` argument is used
- how different action types update the state
- how the reducer returns a new state object
- what happens if an unknown action type is received

Your comments should make it easy for another developer to understand how the reducer works.

---

# 📚 Helpful Resources

React documentation:

https://react.dev/reference/react/useReducer

Additional explanation of reducers:

https://react.dev/learn/extracting-state-logic-into-a-reducer

---

# 💡 Guiding Questions

Discuss these questions with your partner while reviewing the reducer:

- What is the purpose of the `action` argument passed to the reducer?
- How does the reducer decide which state update to perform?
- How can we handle multiple action types inside the same reducer?

---

# ⚙️ Project Setup Reminder

Before testing the application, make sure the project environment is properly set up.

Typical steps include:

Install dependencies:

npm install

Seed the database with sample data:

npm run seed

Start both the frontend and backend servers:

npm run develop

---

# 🧠 Debugging Tip

Many full-stack React projects use the **concurrently** package to run multiple services at the same time.

Consider:

- Which script runs both the client and server?
- Which package enables that behavior?

---

# 🏆 Bonus Challenge

If you complete the commenting exercise early, research the following question:

Why do developers often create constant variable names for action types in `actions.js` instead of using plain strings?

Think about topics such as:

- preventing typos
- code maintainability
- IDE autocomplete support

---

# 🔎 Partner Discussion

Before finishing the activity, discuss:

1. When should a developer choose a reducer instead of `useState`?
2. What advantages does the reducer pattern provide in larger applications?
3. Why is it important that reducers return a **new state object** instead of modifying the existing state?

---

# ✅ Success Check

You know the activity is complete when:

- the reducer logic is clearly documented
- each action type is explained
- the state update process is easy to follow
- another developer could understand the reducer without additional explanation
