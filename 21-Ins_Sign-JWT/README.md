# 🔐 Unit 22 – 21 Ins_Sign - Implement JSON Web Tokens (Server-Side Authentication)

### CodeAcademy | MERN + GraphQL Track

This is where your app stops being a toy.

You’re going to implement **real authentication** using:

- Password hashing (`bcrypt`)
- JSON Web Tokens (JWT)
- Login + Signup mutations
- Token verification

This is how modern APIs protect routes in production systems.

---

## 🎯 Objective

In this demo, you will:

- Create new user profiles
- Hash passwords automatically
- Generate JSON Web Tokens on login
- Verify tokens using a shared secret

You are building the foundation for protected routes.

---

## 🛠 Setup Instructions

From the project root:

```bash
npm install
npm run seed
```

Then run:

```bash
npm run watch
```

Open your browser to:

```
http://localhost:3001/graphql
```

You’ll use Apollo Sandbox to test authentication.

---

# 🔎 Step 1 – Understand the Profile Model

Open:

```
models/Profile.js
```

### Explain These Concepts

### 🔒 `save` Hook

When a new profile is created:

- The password is automatically hashed using `bcrypt`
- The raw password is never stored in the database

This is critical.  
Storing plain-text passwords is a major security flaw.

---

### 🔐 `isCorrectPassword` Method

When a user attempts to log in:

- This method compares the entered password
- Against the hashed password stored in the database

It returns `true` or `false`.

This is how we verify credentials securely.

---

# 🔎 Step 2 – Understand the GraphQL Auth Types

Open:

```
schemas/typeDefs.js
```

### 🧾 `Auth` Type

The `Auth` type represents a successful authentication response.

It returns:

- `token` → the signed JWT
- `profile` → the logged-in user's data

---

### 🔄 Mutations

#### `addProfile`

- Accepts profile input fields
- Creates a new user
- Returns an `Auth` object (token + profile)

This means a user is logged in immediately after signup.

---

#### `login`

- Accepts `email` and `password`
- Returns an `Auth` object

If credentials are correct:

- A token is generated
- The user is authenticated

---

# 🔎 Step 3 – Understand JWT Utility

Open:

```
utils/auth.js
```

### What’s Happening Here?

### 📦 `jsonwebtoken`

We import the `jsonwebtoken` library.

This is what creates and verifies tokens.

---

### 🔑 Secret + Expiration

We define:

- A `secret` string (used to sign tokens)
- An `expiration` time (how long the token is valid)

In production, the secret should live in an environment variable.

---

### 🪪 `signToken(user)`

This function:

- Extracts `email`, `name`, and `_id`
- Signs them into a token payload
- Uses the `secret`
- Applies the expiration

This token is what the client stores and sends with future requests.

---

⚠️ **Important**

Do NOT explain `resolvers.js` yet.

That is the objective of the next activity.

---

# 🧪 Testing the Authentication Flow

Use these credentials from the seed file:

```json
{
  "email": "lernantino@techfriends.biz",
  "password": "password10"
}
```

---

### 🧬 Test the Login Mutation

In Apollo Sandbox:

```graphql
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    profile {
      _id
      email
    }
    token
  }
}
```

Set query variables:

```json
{
  "email": "lernantino@techfriends.biz",
  "password": "password10"
}
```

If successful:

- You will receive:
  - A `token`
  - The user's `_id`
  - The user's `email`

Copy the `token`.

---

# 🔍 Inspect the Token

Go to:

```
https://jwt.io/
```

Paste your token into the **Encoded** box.

You will see:

- Header
- Payload (contains email + \_id)
- Signature

This proves:

- The token contains user identity
- The server signed it
- It can be verified

---

# 🧠 Why This Matters

JWT allows us to:

- Keep authentication stateless
- Avoid storing sessions in the database
- Secure API routes
- Identify users across requests

This is production-grade authentication architecture.

---

CodeAcademy  
**Think. Build. Launch.**
