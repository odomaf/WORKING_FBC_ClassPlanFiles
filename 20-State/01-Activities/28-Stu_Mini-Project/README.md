# 🛠 Mini Project — Refactor Context API to Redux

In this mini-project, you will refactor an existing React application that currently manages state using the **Context API** so that it instead uses **Redux** for state management.

Redux is a popular state management library commonly used in larger React applications. This exercise will help you understand how Redux organizes state updates through **stores**, **reducers**, and **actions**.

---

# 🎯 Project Objective

As a developer, I want to replace the Context API with Redux so that application state can be managed in a more scalable and predictable way.

---

# 🧠 What You’re Practicing

In this activity, you will practice:

- setting up a **Redux store**
- connecting React components to Redux using **react-redux**
- replacing Context-based state management
- working with **reducers** to control state updates
- refactoring an existing codebase while preserving functionality

---

# ⚙️ Setup

Install the required dependencies:

```
npm install redux react-redux vitest happy-dom @testing-library/react
```

---

# 🧩 Refactoring Tasks

Follow the steps below to convert the application from Context API to Redux.

---

### 1️⃣ Create the Redux Store

Create a new file:

```
utils/store.js
```

Inside this file:

- Import `createStore` from `redux`
- Import the existing reducers from `./reducers`
- Export a Redux store created using `createStore`

Example structure:

```
import { createStore } from "redux";
import reducers from "./reducers";

export default createStore(reducers);
```

---

### 2️⃣ Connect Redux to the Application

Open:

```
utils/CarContext.js
```

Add the following imports:

```
import { Provider } from "react-redux";
import store from "./store";
```

---

### 3️⃣ Replace the Context Provider

Refactor the `CarProvider` component so it returns the Redux provider.

Example structure:

```
<Provider store={store}>
  {children}
</Provider>
```

The Redux **Provider** makes the store available to all React components.

---

### 4️⃣ Clean Up Old Context Code

Remove any code that is no longer needed, including:

- `createContext`
- `useContext`
- `useReducer` logic previously used by the Context API
- unused imports

The application should now rely entirely on Redux for state management.

---

### 5️⃣ Test the Application

Start the development server:

```
npm run start
```

Verify that:

- the application still runs
- existing features behave the same
- state updates still work correctly

From a user's perspective, **nothing should appear different**.

---

# 💡 Implementation Hints

Use the Redux documentation for guidance:

Redux Fundamentals Guide  
https://redux.js.org/tutorials/fundamentals/part-1-overview

Consider the following questions:

- How does Redux manage application state differently from the Context API?
- What role does the **store** play in Redux?
- How do reducers determine how state updates occur?

Also review the existing `reducers.js` file:

- Does it already follow Redux conventions?
- Does anything need to be modified?

---

# 🏆 Bonus Challenge

If you complete the refactor early, explore the following:

Instead of using `createContext`, how could we use `Redux.createStore` together with our reducer to generate the **initial state** and compute **future state updates**?

Research how Redux handles:

- initial state
- dispatching actions
- reducer-driven updates

---

# 🔎 Partner Discussion

Discuss the following questions before finishing:

1. What advantages does Redux provide over the Context API in larger applications?
2. When might Context API be sufficient without Redux?
3. Why do Redux applications rely heavily on reducers?

---

# ✅ Success Check

Your refactor is complete when:

- the Redux store has been created
- the React application is wrapped in `<Provider>`
- Context API logic has been removed
- the application behaves exactly the same from the user's perspective
