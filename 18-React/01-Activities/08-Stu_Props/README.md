# 📦 Passing Data with Props

## 🎯 Activity

Work with a partner to implement the following user story:

> As a developer, I want to pass data from a parent component to a child component using props so that my UI can display dynamic information.

---

## ✅ Acceptance Criteria

Your task is complete when:

- You pass data from `App.jsx` to the `ProfileCard` component using props.
- The child component receives the props correctly.
- The values passed from the parent are displayed dynamically inside JSX.

---

## 💡 Hints

- Props are passed like HTML attributes:

  `<ProfileCard name="Jordan" role="Developer" />`

- Inside the child component, props are accessed using:

  `props.name`

- Remember that JSX expressions must be wrapped in `{ }`.

Reference:

https://react.dev/learn/passing-props-to-a-component

---

## 🧠 Key Concept

Props allow components to receive data from their parent.

This is how React components stay reusable and dynamic.
