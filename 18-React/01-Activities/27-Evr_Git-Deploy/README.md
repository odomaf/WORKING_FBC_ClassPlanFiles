# Deploy React App to Netlify (Vite + React)

You’ve built React apps locally — now let’s **ship one**.

This guide walks you through deploying a **Vite + React** app to **Netlify**, while keeping your repo structure intact. We’ll also cover the **one required step** for React Router so refreshes don’t break your site.

---

## Sign up / Log in to Netlify

To deploy with Netlify, you’ll log in using GitHub.

1. Go to Netlify and log in:
   https://www.netlify.com/
2. Choose **Log in with GitHub**

---

## Prepare the Repo

Before deploying, make sure:

- Your project builds locally:
  `npm run build`
- Your code is pushed to GitHub
- Your production branch is **main**

Netlify will build your site from the `main` branch, and will automatically redeploy after every push (Continuous Deployment).

---

## React Router Note (Important)

If your app uses **React Router**, you must override Netlify’s default routing behavior.

Otherwise, refreshing a route like `/about` or `/profile/3` can cause a **404**.

### Fix: Add a `_redirects` file

1. Create a file at:

   `public/_redirects`

2. Put this single line inside:

   `/*  /index.html  200`

This tells Netlify:

“Send all routes back to `index.html` so React Router can handle them.”

Reference:
https://docs.netlify.com/routing/redirects/rewrites-proxies/#history-pushstate-and-single-page-apps

---

## Deploy the Site

### 1) Import the project to Netlify

Go here:
https://app.netlify.com/start

![Netlify displays options for importing a project with the option to connect via GitHub.](./Images/1-Getting-Started.PNG)

### 2) Select your repository

![After selecting GitHub, you can choose the repository to deploy by searching through the search menu.](./Images/2-Select-Repo.PNG)

If your repo doesn’t show up, click:

**Configure the Netlify app on GitHub**

…and grant access to the repo.

![You can choose to either give access to all repositories or search specific repository names to give Netlify access.](./Images/3-Repo-Access.PNG)

### 3) Configure build settings

On the “Basic build settings” screen, use:

- **Branch:** `main`
- **Build command:** `npm run build`
- **Publish directory:** `dist`

Everything else can stay default for this unit.

![In the Basic Build settings page, we can specify base directory, publish directory, and more. For this demonstration, select dist for publish directory.](./Images/4-Config.PNG)

### 4) Click Deploy

### 5) Your Vite app is deployed 🎉

Once deployed, you can change your site name anytime:

- Click **Site configuration**
- Click **Change site name**

![You can click on the Site configuration option to update the site name for the Netlify app.](./Images/5-Site-Configuration.PNG)

![After selecting the Site configuration option, click on the Change site name button to update the site name as desired.](./Images/6-Change-Name.PNG)

### 6) Open your live URL

Click the site URL and verify:

- Home loads correctly
- Navigation works
- If using React Router: refreshing a route does NOT 404

---

## Reflection

You just deployed a modern React app using a professional workflow:

- GitHub repo as the source of truth
- Netlify builds from `main`
- Every push triggers an automatic redeploy

If it builds locally, it should build on Netlify — so always run:

`npm run build`

before deploying.

Reference (Vite docs):
https://vitejs.dev/guide/static-deploy.html#netlify-with-git
