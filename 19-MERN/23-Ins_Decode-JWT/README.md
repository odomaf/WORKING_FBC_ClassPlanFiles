# 🔍 Unit 23 – Decode & Use a JWT (Client-Side)

### CodeAcademy | MERN + GraphQL Track

In this demo, you’ll walk through what happens **after a successful login** on the client.

Key idea:

✅ The client **can store** a JWT and **send** it with requests  
❌ The client **cannot verify** a JWT’s signature (that’s the server’s job)

But the client _can_ decode the token to inspect what it contains (payload) and check expiration metadata.

---

## 🛠 Setup

From the project root:

```bash
npm install
npm run seed
npm run dev
```

---

# 1) Client `package.json` – Why `jwt-decode` Exists

Open:

```
client/package.json
```

### What to Explain

- `jwt-decode` does **not** validate tokens (no signature verification)
- It simply decodes the token payload so we can inspect:
  - Who the token belongs to (user id/email)
  - When it expires (`exp`)

This is useful for UX decisions like:

- “Are we logged in?”
- “Should we auto-logout?”
- “Should we show profile navigation?”

---

# 2) `client/src/utils/auth.js` – Our `AuthService`

Open:

```
client/src/utils/auth.js
```

### What to Explain

This `AuthService` class is our client-side “auth toolbox.”

It typically handles things like:

- Saving the JWT after login (often `localStorage`)
- Retrieving the JWT when we need to make API calls
- Checking whether the token is expired
- Providing a `loggedIn()` helper for conditional rendering
- Logging out by removing the token

This is how the app remembers you between refreshes.

---

# 3) `client/src/App.js` – Attaching the Token to Requests

Open:

```
client/src/App.js
```

### What to Explain

In Apollo Client, we use middleware to attach auth headers to every request.

You’ll see `setContext()` used to:

- Pull the token from `AuthService`
- Add it to the request headers (commonly as `Authorization: Bearer <token>`)

That means every query and mutation can automatically send credentials.

> Important: At this stage, the client is sending the token — but the server-side verification logic may still be added or improved in later activities.

---

# 4) `client/src/pages/Login.js` – Login Flow

Open:

```
client/src/pages/Login.js
```

### What to Explain

When the user submits the login form:

1. The client runs the `login` mutation
2. The API returns:
   - `token`
   - user profile info (depending on your schema)
3. The token is stored immediately using `AuthService`
4. The UI can now treat the user as authenticated

That’s the “login handshake” in a GraphQL app.

---

## ✅ What Students Should Walk Away Understanding

By the end of this demo, you should be able to explain:

- Where the JWT lives on the client
- How Apollo attaches it to every request
- Why decoding is NOT verification
- Why the server must validate the token on protected routes

---
