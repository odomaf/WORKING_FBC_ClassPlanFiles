# 📘 React Hooks: Fetch and Display API Data

Work with a partner to build a React app that uses Hooks to request data from an external API and render the results on the page.

## 🎯 User Story

As a developer, I want to use React Hooks to fetch API data inside a React application so I can display dynamic content to users.

## ✅ Acceptance Criteria

- Import both `useState` and `useEffect` into the React component.
- Create a function named `getRepoIssues()` that fetches issue data from a GitHub repository.
- Use the `useEffect` Hook to call `getRepoIssues()` when the component loads.
- Store the fetched issue data in a state variable named `issues`.
- Render a list of issues to the page for the user to see.

## 🧠 What You’re Practicing

In this activity, you will practice how to:

- manage component state with `useState`
- run side effects with `useEffect`
- fetch data from an external API
- update the UI based on asynchronous data

## 📌 Activity Goal

Your app should request issue data from the React GitHub repository and display that issue information in the browser.

## 📝 Helpful Resources

- [React Docs: useEffect](https://react.dev/reference/react/useEffect)
- [React Docs: useState](https://react.dev/reference/react/useState)
- [MDN: Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

## 💡 Hints

Think through the following as you work:

- Where should your fetched data live in the component?
- When should the API request run?
- How can you take the array of returned issues and display them with JSX?
- What dependency array should you provide to `useEffect`?

## 🏆 Bonus Challenge

After completing the base activity, discuss and research the following with your partner:

- How can you make `useEffect` run only once when the component first mounts?
- How could you show a loading message while the fetch is in progress?
- How could you handle an error if the API request fails?

## 🚀 Stretch Thinking

If you finish early, try extending the app by adding one of these features:

- show each issue’s title and GitHub username
- make each issue title a clickable link
- add a message when no issues are returned
- display only open issues

## 🤝 Partner Discussion

Before you code, talk through these questions:

1. What problem does `useEffect` solve in React?
2. Why wouldn’t we usually place `fetch()` directly at the top of the component body?
3. Why is state needed after the data comes back from the API?

## ✅ Success Check

You know you are done when:

- the app loads without errors
- the GitHub issues are fetched automatically
- the results are saved in state
- the issues appear in the browser as a rendered list
