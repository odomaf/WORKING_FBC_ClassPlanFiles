# 📘 Week 18 Study Guide --- Introduction to React

## 🎯 Week Goal

By the end of Week 18, you should understand:

-   What React is and why it exists
-   How components work
-   What JSX is
-   How to use props
-   How to manage state with useState
-   How to handle events
-   How to render lists with .map()
-   The basics of React Router

------------------------------------------------------------------------

# 1️⃣ What Is React?

## Key Concepts

-   React is a JavaScript library for building user interfaces
-   It uses reusable components
-   It builds Single Page Applications (SPAs)
-   The UI updates automatically when state changes

### 🔎 Resources

-   MDN --- Single Page Applications\
    https://developer.mozilla.org/en-US/docs/Glossary/SPA

-   React Docs --- Describing the UI\
    https://react.dev/learn/describing-the-ui

------------------------------------------------------------------------

# 2️⃣ Components

## What You Must Know

-   Components are JavaScript functions
-   They return JSX
-   They must return one parent element
-   They should focus on one responsibility

### Example

``` jsx
function Header() {
  return <h1>Hello World</h1>;
}
```

### 🔎 Resources

-   React Docs --- Your First Component\
    https://react.dev/learn/your-first-component

-   W3Schools --- React Components\
    https://www.w3schools.com/react/react_components.asp

------------------------------------------------------------------------

# 3️⃣ JSX

## What You Must Know

-   JSX looks like HTML but is JavaScript
-   Use {} to embed JavaScript
-   Must return one parent element
-   class becomes className

### Example

``` jsx
const name = "Avery";
return <h1>Hello {name}</h1>;
```

### 🔎 Resources

-   React Docs --- Writing Markup with JSX\
    https://react.dev/learn/writing-markup-with-jsx

-   W3Schools --- React JSX\
    https://www.w3schools.com/react/react_jsx.asp

------------------------------------------------------------------------

# 4️⃣ Props

## What You Must Know

-   Props pass data from parent → child
-   Props are read-only
-   Props make components reusable

### Example

``` jsx
function Greeting({ name }) {
  return <h2>Hello {name}</h2>;
}

<Greeting name="Avery" />
```

### 🔎 Resources

-   React Docs --- Passing Props\
    https://react.dev/learn/passing-props-to-a-component

-   W3Schools --- React Props\
    https://www.w3schools.com/react/react_props.asp

------------------------------------------------------------------------

# 5️⃣ State and useState

## What You Must Know

-   State is data that changes
-   Created with useState
-   Changing state causes re-render
-   Never mutate state directly

### Example

``` jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </>
  );
}
```

### 🔎 Resources

-   React Docs --- State\
    https://react.dev/learn/state-a-components-memory

-   W3Schools --- React useState\
    https://www.w3schools.com/react/react_usestate.asp

------------------------------------------------------------------------

# 6️⃣ Events in React

## What You Must Know

-   Event names use camelCase
-   Pass a function reference
-   Do NOT call the function

Correct:

``` jsx
<button onClick={handleClick}>
```

Incorrect:

``` jsx
<button onClick={handleClick()}>
```

### 🔎 Resources

-   React Docs --- Responding to Events\
    https://react.dev/learn/responding-to-events

-   W3Schools --- React Events\
    https://www.w3schools.com/react/react_events.asp

------------------------------------------------------------------------

# 7️⃣ Rendering Lists

## What You Must Know

-   Use .map() to render lists
-   Each element needs a key
-   Keys help React track changes

### Example

``` jsx
const skills = ["React", "Node", "Postgres"];

skills.map((skill, index) => (
  <li key={index}>{skill}</li>
));
```

### 🔎 Resources

-   React Docs --- Rendering Lists\
    https://react.dev/learn/rendering-lists

-   MDN --- Array.map()\
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

------------------------------------------------------------------------

# 8️⃣ Conditional Rendering

## What You Must Know

-   Use &&
-   Use ternary operators
-   Use early returns

### Example

``` jsx
{isLoggedIn ? <Dashboard /> : <Login />}
```

### 🔎 Resources

-   React Docs --- Conditional Rendering\
    https://react.dev/learn/conditional-rendering

------------------------------------------------------------------------

# 9️⃣ React Router Basics

## What You Must Know

-   React apps don't reload pages
-   Use BrowserRouter
-   Use Routes and Route
-   Use Link instead of `<a>`{=html}

### 🔎 Resources

-   React Router Docs\
    https://reactrouter.com/en/main

-   W3Schools --- React Router\
    https://www.w3schools.com/react/react_router.asp

------------------------------------------------------------------------

# 🔟 Common Mistakes to Avoid

-   Forgetting a key in lists
-   Mutating state directly
-   Calling event handlers immediately
-   Forgetting to import hooks
-   Returning multiple JSX elements without a wrapper
-   Using class instead of className

------------------------------------------------------------------------

# 🧠 Self-Check Questions

1.  What triggers a re-render in React?
2.  What is the difference between props and state?
3.  Why are keys important in lists?
4.  Why don't React apps reload pages?
5.  What does useState return?
6.  Why shouldn't you modify state directly?

------------------------------------------------------------------------

# 🛠 Practice Tasks Before Assessment

-   Build a counter
-   Build a toggle button (show/hide content)
-   Render a list of skills
-   Create a controlled form input
-   Create two routes using React Router

------------------------------------------------------------------------

## 🚀 Final Reminder

React is not about memorizing syntax.\
It's about understanding how data drives the UI.

UI = f(state)
