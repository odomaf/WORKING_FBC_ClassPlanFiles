# 🏗️ 12-Stu_MERN-Setup - Understanding Our MERN Architecture

### CodeAcademy | Full-Stack MERN + GraphQL

This project is structured as a **two-part application**:

- 🖥 Front end → React (Vite)
- 🗄 Back end → Express + Apollo + MongoDB

During development and production, these pieces behave differently.  
Understanding how and why is critical to full-stack development.

---

# 🌍 Root-Level Scripts (Application Control Center)

Our root `package.json` acts as a command center.  
From one location, we can control the entire application.

```json
"scripts": {
  "start": "node server/server.js",
  "dev": "concurrently \"cd server && npm run watch\" \"cd client && npm run dev\"",
  "install-all": "cd server && npm install && cd ../client && npm install",
  "seed": "cd server && npm run seed",
  "build": "cd client && npm run build"
}
```

---

## 🚀 `npm start`

**Production mode**

- Starts only the back-end server
- The server serves the built React application
- No Vite development server runs
- This mirrors how real deployments work

In production:
Express becomes both the API server _and_ the static file server.

---

## 🔥 `npm run dev`

**Development mode**

- Runs both:
  - Back-end server (with nodemon/watch mode)
  - Front-end Vite development server
- Uses `concurrently` to execute both processes at the same time

Why?

Because during development:

- React needs hot reload
- The API needs to restart automatically on changes
- We want a smooth developer experience

---

## 📦 `npm run npm install`

Since our app contains two sub-projects (`server` and `client`), this installs all dependencies in one command.

This mirrors how monorepo-style projects are structured in real teams.

---

## 🌱 `npm run seed`

Seeds the MongoDB database with development data.

Used for:

- Testing
- Demo environments
- Resetting corrupted dev data

---

## 🏗 `npm run build`

Creates a production-ready React build inside:

```
client/dist
```

This optimized build is what the server will serve in production.

---

# 💻 Client-Side Configuration (Vite Proxy)

During development, React runs on one port and the API runs on another.

To prevent CORS issues, we configure a proxy in Vite:

```js
proxy: {
  '/graphql': {
    target: 'http://localhost:3001',
    changeOrigin: true,
    secure: false,
  },
},
```

### Why This Matters

- Front-end runs on: `localhost:5173`
- Back-end runs on: `localhost:3001`
- Proxy forwards `/graphql` requests automatically

So from the client, we can simply call:

```js
fetch("/graphql");
```

Without hardcoding the API URL.

This keeps the code clean and environment-agnostic.

---

# 🖥 Server-Side Production Setup

In production, we no longer use the Vite dev server.

Instead, Express serves the compiled React build:

```js
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/dist/index.html"));
  });
}
```

---

## What This Does

### 1️⃣ Serve Static Files

```js
express.static(...)
```

Makes compiled JS, CSS, and assets accessible to users.

---

### 2️⃣ Wildcard Route (`*`)

This ensures:

- Any route not starting with `/graphql`
- Is handled by React
- React’s client-side router takes over

Example:

- `/dashboard`
- `/profile`
- `/settings`

These routes do not exist on the server — React handles them.

Without this wildcard route, refreshing the page would break.

---

# 🧠 Big Picture Architecture

Development Mode:

```
React Dev Server  →  Proxy  →  Express API  →  MongoDB
```

Production Mode:

```
Client Browser  →  Express (serves React build + API)  →  MongoDB
```

---

# 🚀 Why This Matters

Understanding this architecture prepares you for:

- Real production deployments
- CI/CD pipelines
- Docker containerization
- Hosting on Render / AWS / Railway
- Technical interviews

Full-stack development is not just writing React and Express —
It’s understanding how everything connects.
