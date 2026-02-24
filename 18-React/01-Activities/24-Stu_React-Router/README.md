# Week 18 — React Router (Student Activity)

## 🎯 Goal

In this activity, you will set up **client-side routing** using `react-router-dom`.

You will practice:

- Defining routes with `createBrowserRouter`
- Rendering nested routes with `<Outlet />`
- Navigating with `<Link />`
- Reading URL params with `useParams()`

---

## 🧠 User Stories

- As a user, I want to see the Home page when the app loads.
- As a user, I want to click to view an About page.
- As a user, I want to click a user and view their full profile page.
- As a user, if I type an invalid URL, I want to see a friendly error page.

---

## ✅ Acceptance Criteria

This activity is complete when:

- The router is defined in `Unsolved/src/main.jsx`
- The app layout renders child routes using `<Outlet />`
- The Home page lists users and each user has a link to a profile URL like:
  `/profile/3`
- The Profile page reads the URL param using `useParams()` and fetches that user’s data
- Invalid routes (ex: `/banana`) show the Error page with a link back home

---

## 🔧 Files You’ll Work In

- `Unsolved/src/main.jsx` (router config)
- `Unsolved/src/App.jsx` (layout + Outlet)
- `Unsolved/src/pages/HomePage.jsx` (Link to profile)
- `Unsolved/src/pages/ProfilePage.jsx` (useParams + fetch)

---

## 🏆 Bonus

Add “active tab” styling using `NavLink` in the nav component.

---

## Getting Started

From the `Unsolved` folder:

1. npm install
2. npm run dev
