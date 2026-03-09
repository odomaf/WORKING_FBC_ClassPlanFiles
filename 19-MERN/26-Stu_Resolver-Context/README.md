# 🐛 Unit 19 – Resolver Context Bug: `/me` Profile Isn’t Loading

### CodeAcademy | MERN + GraphQL Track

This activity is all about a real-world GraphQL concept: **context**.

Your `/me` route is supposed to show the currently logged-in user’s data — but right now it behaves like nobody is logged in.

Your job is to debug why the API isn’t recognizing the logged-in user and fix the issue so the profile page can display **your own thoughts**.

---

## 🎯 User Story

As a user,  
I want to see my own thoughts when I visit my profile page,  
so I can review what I’ve posted.

---

## ✅ Expected Behavior

When a logged-in user visits:

```
/me
```

They should see:

- Their user profile data
- A list of thoughts they created
- The UI for creating new thoughts (if included)

---

## ❌ Actual Behavior

The profile page displays a message saying the user must be logged in to view the page.

This usually means **the API context is not receiving the authenticated user** (even though you logged in).

---

## 🔁 Steps to Reproduce

1️⃣ Navigate to the activity folder:

```bash
cd 26-Stu_Resolver-Context/Unsolved
```

2️⃣ Install, seed, and run in development:

```bash
npm install
npm run seed
npm run dev
```

3️⃣ Open the login page:

```
http://localhost:3000/login
```

4️⃣ Log in using the seeded test user:

```json
{
  "email": "cameron@codeacademy.dev",
  "password": "Password1234!"
}
```

> You can also create a new user and add thoughts, but the seeded account is the fastest path.

5️⃣ Visit the profile route:

```
http://localhost:3000/me
```

6️⃣ Notice the profile page does **not** show the user’s thoughts.

---

## 🖼️ UI Reference

Expected profile page behavior:

![The logged-in user's profile page displays thoughts they've created and a form to create more thoughts.](./Images/01-screenshot.png)

---

## 💡 Hints

To fix this, compare the server-side behavior of:

- `QUERY_ME`
- `QUERY_SINGLE_USER`

Ask yourself:

- Which one depends on `context.user`?
- Which one works with explicit arguments (like an `id` or `username`)?
- If `QUERY_ME` is failing, what does that suggest about the JWT being read/attached?

Also check:

- Is the token being sent from the client on requests?
- Is Apollo Client configured to attach the token in headers?
- Is the server extracting the token and setting `context.user` correctly?

---

## 🏆 Bonus Challenge

After you fix `/me`, discuss:

### How could we implement authentication in a React app **without** using GraphQL?

Research approaches such as:

- REST login endpoints + JWT
- Cookies + sessions
- OAuth (Google/GitHub)
- Auth middleware patterns

Be ready to compare tradeoffs.

---

## 🚀 Why This Matters

Resolver context is how GraphQL supports real authentication workflows:

- “Who is logged in?”
- “What are they allowed to access?”
- “Return only their data.”

If you can debug this issue, you’re thinking like a production full-stack developer.
