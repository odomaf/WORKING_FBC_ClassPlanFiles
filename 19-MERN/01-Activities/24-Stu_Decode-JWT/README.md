# 🐛 Unit 19 – Decode JWT Bug: User Gets Logged Out Immediately

### CodeAcademy | MERN + GraphQL Track

This bug is a classic “time math” problem.

The login flow _looks_ like it succeeds… but the client immediately decides the token is expired and logs the user out.

Your job is to trace the client-side auth logic, find the mismatch, and fix it so users stay logged in.

---

## 🎯 User Story

As a user,  
I want to log in and remain logged in,  
so I can use the app without getting kicked out instantly.

---

## ✅ Expected Behavior

- A user can sign up or log in
- The API returns a JWT with a **~2 hour** expiration
- The token is stored client-side
- The user remains authenticated after redirect / refresh

---

## ❌ Actual Behavior

- The client immediately treats the JWT as expired
- The token is removed from `localStorage`
- The user is logged out right away

---

## 🔁 Steps to Reproduce

1️⃣ Navigate to the activity folder:

```bash
cd 24-Stu_Decode-JWT/Unsolved
```

2️⃣ Install, seed, and run:

```bash
npm install
npm run seed
npm run dev
```

3️⃣ Create an account:

```
http://localhost:3000/signup
```

Or log in using a seeded user:

```
http://localhost:3000/login
```

4️⃣ After redirecting to the homepage, notice:

- You are still prompted to log in or sign up
- The session does not “stick”

---

## 💡 Hints

- Where does all client-side auth logic live?
  - (Look for a utility class/service that manages tokens.)
- JWT timestamps usually use **seconds since epoch**
- JavaScript time (`Date.now()`) uses **milliseconds since epoch**

If you compare seconds to milliseconds directly, your app will think:

> “This token expired a long time ago.”

That’s usually the root cause.

---

## 🧠 Debug Checklist (Bootcamp Style)

When debugging, verify:

- Is the token being stored in `localStorage` at all?
- Is it being removed immediately? (Where?)
- What does the decoded token payload show for `exp`?
- What is the client comparing `exp` against?
  - `Date.now()` (ms)
  - `new Date().getTime()` (ms)
  - `Math.floor(Date.now() / 1000)` (seconds)

---

## 🏆 Bonus Challenge

When would you choose:

- **JWTs**
  vs
- **Cookies (sessions or httpOnly cookies)**

for user authentication?

Research and be ready to discuss security + DX tradeoffs.

---
