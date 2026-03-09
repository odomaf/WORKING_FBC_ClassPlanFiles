# 🐛 Debugging a Broken Reducer

In this exercise, you'll practice **reading failing tests and fixing a reducer** that manages shared application state.

Reducers are commonly used with **React Context** to manage global data in an application. Instead of updating state directly, we send **actions** to a reducer, and the reducer decides how the state should change.

Right now, the reducer in this project is **not behaving correctly**, and the automated tests are failing.

Your job is to investigate the problem and fix it.

---

# 🎯 Learning Objectives

By completing this activity, you should be able to:

- Understand how a **Reducer** updates application state
- Use **action types** to control state updates
- Diagnose failing tests and trace them back to the reducer logic
- Implement correct **ADD** and **REMOVE** behavior for a list of students

---

# 🧪 Expected Behavior

When everything is implemented correctly:

- The reducer should correctly **add students** to the state
- The reducer should correctly **remove students** from the state
- All tests should pass successfully

---

# ❌ Current Behavior

At the moment:

- The reducer logic is incomplete or incorrect
- The test suite that checks **adding and removing students** is failing

Your goal is to **fix the reducer logic so the tests pass.**

---

# 🛠️ Steps to Reproduce the Problem

1. Navigate into the activity folder:

```
06-Stu-Reducers/Unsolved
```

2. Install dependencies:

```
npm install
```

3. Run the test suite:

```
npm run test
```

4. Observe the test failures and read the error messages carefully.

The test output should give you clues about **which functionality is broken.**

---

# 🔎 What You Should Investigate

Start by looking at the reducer file:

```
src/utils/reducers.js
```

Ask yourself:

- What action types are being handled?
- What should happen when we add a student?
- What should happen when we remove a student?
- Are we returning a **new state object** or modifying the old one?

Remember:

Reducers should **never mutate the original state**.

Instead, they should return **a new updated state object.**

---

# 💡 Helpful Hints

Reducers commonly follow this pattern:

```
reducer(currentState, action) -> newState
```

Reducers usually use a `switch` statement:

```
switch (action.type)
```

Each case describes **how the state changes** for that action.

---

# 🧠 Bonus Challenge

If you finish early, discuss this question with your partner:

Where else have we seen the term **reduce** in JavaScript?

Hint: Look into the Array method:

```
Array.prototype.reduce()
```

What does it do, and why might React have borrowed the same concept?

---

# 🚀 Stretch Goal

Once the reducer is fixed:

- Run the application
- Try adding and removing students
- Verify that the UI updates correctly

Understanding reducers is an important step toward building larger React applications.
