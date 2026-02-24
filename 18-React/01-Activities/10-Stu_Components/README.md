# 🧩 Building and Composing Components

## 🎯 Activity

Work with a partner to implement the following user story:

> As a developer, I want to break my UI into reusable components and pass data between them so that my application stays organized and maintainable.

---

## ✅ Acceptance Criteria

Your task is complete when:

- You create and organize components inside the `components` folder.
- You pass the `users` data from `App.jsx` to the `List` component using props.
- The `List` component renders all users using the `map()` method.
- Each rendered list item includes a unique `key` prop.

---

## 💡 Hints

- Props are passed like HTML attributes:

  `<List users={users} />`

- Props are received inside a component as an object:

  `function List(props) {}`

- You can also use **destructuring**:

  `function List({ users }) {}`

- The `map()` method allows you to loop over an array and return JSX for each item.

Reference:

https://react.dev/learn/passing-props-to-a-component  
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

---

## 🧠 Key Concept

React applications are built from small, reusable components.

Data flows from parent to child using props.

When rendering lists, each element must include a unique `key`.
