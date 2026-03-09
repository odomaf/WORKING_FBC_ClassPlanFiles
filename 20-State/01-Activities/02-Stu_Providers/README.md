# 🏗️ Activity: Implement Global State with the React Context API

In larger React applications, many components often need access to the
same data. Passing that data through every level of the component tree
using props can quickly become messy and difficult to maintain.

The **React Context API** provides a solution by allowing developers to
store shared data in a single location and make it available to any
component in the application.

In this activity, you will implement a simple **global state store**
using React Context and make that data available to child components
through a **Provider**.

------------------------------------------------------------------------

# 🎯 User Story

**As a developer**,\
I want to store shared application data in a global location\
so that multiple components can access the same information without
passing props through every component level.

------------------------------------------------------------------------

# 🧩 Scenario

Imagine you are building a small student dashboard for a university
application.\
Multiple parts of the interface need access to a list of students and
their majors.

Instead of passing this data through many layers of components, you will
store it in **React Context** and access it wherever it is needed.

------------------------------------------------------------------------

# ✅ Acceptance Criteria

Your implementation should meet the following requirements:

-   A **global state object** has been created using the React Context
    API.

-   The global state includes an array of **students**, where each
    student contains:

    -   `name`
    -   `major`

Example structure:

    students: [
      { name: "Alex Kim", major: "Computer Science" },
      { name: "Jordan Lee", major: "Information Systems" },
      { name: "Sam Rivera", major: "Software Engineering" }
    ]

-   A **Provider component** makes this global state available to child
    components.

-   At least one component **consumes the context using the `useContext`
    hook**.

-   The test suite runs successfully with **zero failures** when
    running:

    npm run test

------------------------------------------------------------------------

# 🧠 Concepts Practiced

This activity introduces one of the most common React patterns used in
real-world applications:

-   Creating a **React Context**
-   Implementing a **Provider**
-   Accessing shared data with **`useContext`**
-   Sharing **global state across components**

These techniques are frequently used for:

-   user authentication
-   application theme settings
-   user preferences
-   shared application data

------------------------------------------------------------------------

# 💡 Hints

When defining your global state, think about the following:

-   What **data needs to be shared across multiple components?**
-   What **type of data structure** should you initialize?
-   Which components should **consume the context values**?

Remember:

**Providers supply shared data, and consumer components access that data
using `useContext`.**

------------------------------------------------------------------------

# 🏆 Bonus Challenge

After completing the activity, discuss or research the following
questions:

-   Can a React application use **multiple Context Providers**?
-   Can those providers be **nested inside one another**?
-   When might using **multiple contexts** improve application design?

Use the React documentation or your preferred search engine to explore
these questions.

------------------------------------------------------------------------

# 📚 Suggested Reading

React Documentation --- Context API\
https://react.dev/reference/react/useContext

------------------------------------------------------------------------

Focus on understanding **how the Provider supplies data to components
and how `useContext` retrieves that data**.

This pattern becomes extremely useful as React applications grow larger
and more complex.
