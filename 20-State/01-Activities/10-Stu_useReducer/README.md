# 🚗 React `useReducer` Practice

In this activity, you will explore React's **`useReducer` hook**, which is commonly used for managing more complex state logic.

Earlier in this unit you worked with:

- **actions**
- **reducers**

Now we will connect those concepts directly to React using `useReducer`.

Instead of calling `setState` manually, `useReducer` allows components to update state by **dispatching actions**, which are processed by a reducer function.

This pattern is extremely common in large React applications.

---

# 🎯 Learning Objectives

By completing this activity, you should be able to:

- Explain why React provides the `useReducer` hook
- Understand the relationship between **actions, reducers, and state**
- Use `dispatch()` to trigger state updates
- Identify when `useReducer` is preferable to `useState`

---

# 🧠 Conceptual Model

The `useReducer` pattern follows this flow:

```
Component
   ↓
dispatch(action)
   ↓
Reducer Function
   ↓
New State
   ↓
React Re-renders UI
```

Instead of updating state directly, we send an **action object** like this:

```javascript
dispatch({
  type: "ADD_CAR",
  payload: newCar,
});
```

The reducer receives the action and decides how state should change.

---

# 🧪 Your Task

In this activity you will complete the implementation of a small **Garage Inventory Manager**.

Users should be able to:

- Add a new car
- Remove a car
- See the updated list immediately

The state logic should be handled using **`useReducer` instead of `useState`**.

---

# 📂 Where to Look

Focus on these files:

```
src/utils/reducer.js
src/components/Garage.jsx
```

Ask yourself:

- What does each **action type** represent?
- What should happen in each reducer case?
- How does `dispatch()` trigger the reducer?

---

# 💡 Hints

Remember the reducer pattern:

```
reducer(currentState, action) → newState
```

Reducers should:

- **never mutate the original state**
- always return a **new state object**
- use `switch(action.type)` to determine behavior

---

# 🏆 Bonus Challenge

If you finish early, discuss the following with your partner:

- When would you choose `useReducer` instead of `useState`?
- Why might reducers make large applications easier to maintain?

You may want to research:

- React docs
- MDN
- other developer resources

---

# 🚀 Stretch Goal

Add a new reducer action that:

- **clears the entire garage inventory**

Example action:

```
CLEAR_GARAGE
```

Then add a button in the UI that dispatches this action.

---
