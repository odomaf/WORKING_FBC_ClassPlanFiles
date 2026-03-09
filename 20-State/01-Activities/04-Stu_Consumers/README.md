# 🏗️ Activity: Access and Update Shared State with React Context

As React applications grow, passing data through multiple layers of components can become repetitive and difficult to manage. One way to solve this is by using the **React Context API**, which allows components to read and update shared state from a central location.

In this activity, you will build on the idea of shared state by not only **reading** values from context, but also **updating** them from inside a component.

---

# 🎯 User Story

**As a developer**,  
I want to access and update shared application state with React Context  
so that I can avoid unnecessary prop drilling and keep related data in one place.

---

# 🧩 Scenario

Imagine you are building a small student dashboard for a department page.

The app needs to display:

- a list of students
- a list of majors
- buttons that allow the user to update the shared data

Instead of passing these values and functions through many components, you will manage them in a shared Context and access them where needed.

---

# ✅ Acceptance Criteria

Your implementation should meet the following requirements:

- A component named **`StudentList`** reads shared state values from Context.

- The shared state includes:
  - `students`
  - `majors`

- The `StudentList` component includes buttons that allow the user to:
  - add data to shared state
  - remove data from shared state

- Changes to shared state are reflected in all necessary components.

- The application renders properly in the browser.

---

# 🧠 Concepts Practiced

In this activity, you will practice:

- creating shared state with **React Context**
- reading context values with **`useContext`**
- updating shared state with **state setter functions**
- reflecting state changes in the user interface
- reducing prop drilling in a React application

These ideas are commonly used in real applications for:

- user preferences
- dashboards
- shopping carts
- theme settings
- shared app data

---

# 💡 Hints

As you work through the activity, think about the following:

- What argument does **`useContext()`** accept?
- Where should shared state live?
- How can a child component update data stored in Context?
- Which values and functions need to be provided to consumer components?

Remember:

A Context Provider can share both **state values** and **functions that update state**.

---

# 🏆 Bonus Challenge

After completing the activity, discuss or research the following:

- When is the Context API a better choice than prop drilling?
- When might Context become too large or difficult to manage?
- What other state management tools exist in the React ecosystem?

Use the React documentation or your preferred search engine to explore these ideas.

---

# 📚 Suggested Reading

React Documentation — `useContext`  
https://react.dev/reference/react/useContext

React Documentation — `useState`  
https://react.dev/reference/react/useState

---

Focus on understanding how a component can both **read** and **update** shared state through Context.

That pattern becomes especially useful once your application has multiple components that need access to the same data.
