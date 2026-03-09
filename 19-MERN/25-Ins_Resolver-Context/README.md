# 🛡️ Unit 19 – Pass JWT to Resolvers with Context (Server-Side)

### CodeAcademy | MERN + GraphQL Track

In this demo, we connect the final piece of the authentication puzzle:

✅ The client stores a token and sends it with requests  
✅ The server verifies the token  
✅ The server makes the logged-in user available to resolvers via **context**

This is the pattern you’ll see in real GraphQL back ends.

---

## 🎯 Objective

By the end of this demo, you should be able to explain:

- What GraphQL `context` is
- How a JWT is read from incoming requests
- How a verified user becomes `context.user`
- How resolvers use `context` to protect queries and mutations

---

## 🛠 Setup

From the project root:

```bash
npm install
npm run seed
npm run watch
```

Then open Apollo Sandbox:

```
http://localhost:3001/graphql
```

---

# 1) `server/server.js` – Adding Context to Apollo Server

Open:

```
server/server.js
```

### What to Explain

Apollo Server supports a `context` option.

Think of it like Express middleware:

- It runs **before** your resolvers
- It can inspect the incoming request
- It can attach useful data (like the logged-in user)
- Whatever you return becomes the `context` object in every resolver

This is the “checkpoint” where we verify tokens **once**, then reuse the result everywhere.

---

# 2) `server/utils/auth.js` – `authMiddleware`

Open:

```
server/utils/auth.js
```

### What to Explain

`authMiddleware` is responsible for:

- Checking the incoming request for a JWT
- Verifying and decoding the token (if present)
- Attaching the decoded user data to the request/context
- Returning the request (modified or unchanged)

Key idea:

- If the token is valid → the middleware adds `user` data
- If the token is missing/invalid → the request continues, but without `user`

This gives us flexible auth:

- Some routes can be public
- Some routes can require login

---

# 3) `server/schemas/resolvers.js` – Using `context` in Resolvers

Open:

```
server/schemas/resolvers.js
```

### What to Explain

Resolver functions can accept three parameters:

```js
(parent, args, context);
```

That third parameter, `context`, is the object returned by the Apollo Server `context` function (which typically calls `authMiddleware`).

So in a protected resolver:

- If `context.user` exists → the user is authenticated
- If `context.user` is missing → the user is not logged in

This allows you to implement protected operations like:

- `me` (return current user)
- `addThought` (only logged-in users can post)
- `addComment` (only logged-in users can comment)

---

## 🧠 What Students Should Walk Away Understanding

- The client sends `Authorization: Bearer <token>`
- The server verifies the token in one place (middleware/context)
- Resolvers don’t need to re-verify — they just check `context.user`
- “Logged in” means: `context.user` exists

---
