# 🚀 Deploy an Express App to Render (Study Boost Board)

Work with a partner to complete the user story:

- **As a web developer**, I want to deploy an Express.js application to Render so I can share my app with the world.

This mini app is themed as **Study Boost Board**—a simple homepage served by Express.

---

## ✅ Acceptance Criteria

- It’s done when you have initialized a Git repository by running `git init` at the root of your project.
- It’s done when you have ensured your server binds to `process.env.PORT` (Render provides a `PORT` variable for web services).
- It’s done when your `package.json` includes a working **start command** (ex: `npm start`).
- It’s done when you have pushed your code to a new GitHub repository.
- It’s done when you have connected Render to your GitHub repo and created a **Web Service**.
- It’s done when you have confirmed the app was deployed successfully by visiting the Render URL.

---

## 🧪 What You’re Given

- `Unsolved/` has a couple of problems that prevent a successful Render deploy.
- `Solved/` shows one correct solution.

Your job: **fix Unsolved so it deploys**.

---

## 🛠️ Step-by-Step (Unsolved)

### 1) Run the app locally

From `Unsolved/`:

- `npm install`
- `npm start` (you’ll need to fix this if it errors)

Visit:

- `http://localhost:3001`

### 2) Fix the common Render issues

In `Unsolved/`:

- Update `server.js` to use:

  - `const PORT = process.env.PORT || 3001;`

- Update `package.json` to include:

  - `"scripts": { "start": "node server.js" }`

These two fixes match Render’s Node/Express guidance.

---

## 🌐 Deploy to Render (GitHub Deploy)

### 1) Push to GitHub

- `git init`
- `git add -A`
- `git commit -m "Initial commit"`
- Create a new GitHub repo and push your code.

### 2) Create a Render Web Service

In Render Dashboard:

- New ➜ **Web Service**
- Connect your GitHub repo
- Environment: **Node**
- Build Command: `npm install`
- Start Command: `npm start`
- Choose branch: `main`
- Create Web Service

### 3) Confirm it works

Once it finishes deploying, open the public URL Render provides.

You should see:

- “Study Boost Board ✅”

---

## 📝 Notes (Docs)

- Render Quickstart: Deploy a Node/Express app  
  https://render.com/docs/deploy-node-express-app

- Render Environment Variables (`PORT`)  
  https://render.com/docs/environment-variables

- Render: Configure environment variables  
  https://render.com/docs/configure-environment-variables

- Render Deploys (auto-deploy on push)  
  https://render.com/docs/deploys

---

## 🏆 Bonus

- How can you create a web service from the Render dashboard **without** GitHub auto-deploy?
- What’s the difference between “Manual Deploy” and “Auto Deploy” in Render?

Use Google to research.

---
