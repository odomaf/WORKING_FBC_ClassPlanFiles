# 🐛 Debugging Authentication: Fix the Profile Page

In this activity, you will work with a partner to debug issues related to authentication and user-specific data.

Several parts of the application are not behaving correctly for logged-in users. Your goal is to investigate the problem and restore the expected behavior.

---

# 🎯 User Stories

- As a logged-in user, I want my username to appear in the header so I know I am authenticated.
- As a user, I want to view the posts that I have personally created.
- As a user, I want to create new posts and comments and see them appear immediately in the app.

---

# ✅ Acceptance Criteria

Your fix is complete when the following behaviors work:

- A logged-in user sees their **username displayed in the header navigation**.
- A logged-in user can visit the `/me` route and view **their own post history**.
- When a user submits a new post, the post appears on the page.
- When a user submits a new comment, the comment appears on the page.

---

# 📚 What You’re Practicing

This debugging exercise will help you practice:

- working with **JSON Web Tokens (JWT)**
- understanding **authentication flows**
- debugging **GraphQL queries and mutations**
- verifying **user-specific data in React applications**
- troubleshooting **full-stack authentication issues**

---

# 🧠 Activity Goal

The goal of this exercise is to trace how authentication data flows through the application and identify why the logged-in user’s data is not appearing correctly.

You may need to investigate:

- authentication utilities
- GraphQL queries or mutations
- route logic
- React state or props
- JWT token contents

---

# ⚙️ Setup Instructions

1. Navigate to the project folder:

18-Stu_JWT-Review/Unsolved

2. Install dependencies:

npm install

3. Seed the database:

npm run seed

4. Start the development server:

npm run develop

5. Open the application in your browser:

http://localhost:3000/login

---

# 🧪 Test Credentials

You may use the following test account, or create your own:

{
"email": "lernantino@techfriends.dev",
"password": "password10"
}

After logging in, verify whether the profile page and header behave correctly.

---

# 🖼️ Reference

The profile page should display:

- the logged-in user's posts
- a form to create a new post
- navigation that reflects the authenticated user

![Profile page displaying a user's posts and post form](./Images/01-screenshot.png)

---

# 💡 Debugging Hints

Consider investigating the following questions:

- What information is stored inside the JWT token payload?
- How can you decode a JWT to inspect its contents?
- Where in the application is the logged-in user’s ID retrieved?
- Which query is responsible for loading the logged-in user's data?
- How does the `/me` route know which user is currently authenticated?

---

# 🏆 Bonus Challenge

If you complete the debugging tasks early, research and discuss the following with your partner:

How could authentication be implemented in a React application **without GraphQL**?

Examples might include:

- REST APIs
- session-based authentication
- token storage strategies

---

# 🔎 Partner Discussion

Discuss these questions before implementing your fix:

1. Why is it important that authentication logic lives on the **server** instead of only the client?
2. What security risks exist if a JWT is improperly verified?
3. What advantages do JWT tokens provide for modern web applications?

---

# ✅ Success Check

You know the application is fixed when:

- the logged-in user's **username appears in the header**
- visiting `/me` shows **only that user's posts**
- creating a **new post updates the page**
- creating a **new comment updates the page**
