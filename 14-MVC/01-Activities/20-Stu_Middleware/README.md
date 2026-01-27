# 📖 Implement Middleware for User Authentication

Work with a group to complete the following activity.

## 🎯 User Story

- As a developer, I want to create my own middleware function to check whether a user is authenticated.

## ✅ Acceptance Criteria

This activity is complete when:

- The middleware checks whether a user is currently logged in.
- Logged-in users are allowed to access the gallery and individual painting pages.
- Users who are not logged in are redirected to the login page when attempting to access protected routes.

## 📝 Notes

Use the following documentation as a reference while working through this activity:

- [Express.js documentation on using middleware](https://expressjs.com/en/guide/using-middleware.html)

---

## 💡 Hints

As you work, think about the following:

- Where is the current logic that checks whether a user is logged in?
- How can that logic be extracted and rewritten as a reusable middleware function?
- Where should custom middleware live so it can be imported and used by multiple routes?
- How does this compare to where you placed custom helper functions earlier in the project?

## 🏆 Bonus

If you complete the main task early, research and discuss:

- What are some other common middleware functions used in Express applications?
- What problems do they help solve?

Use [Google](https://www.google.com) or another search engine to research these questions.
