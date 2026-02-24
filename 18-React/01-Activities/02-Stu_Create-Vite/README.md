# 📐 Add Comments That Describe the Functionality of a React App

## Before We Begin

Initializing a React application using `npm create vite` is fast and simple. Vite provides:

- A development server with native ES Module support
- Hot Module Replacement (HMR) for instant updates
- A production build tool powered by Rollup

Vite replaces older setups that required manual Webpack configuration and gives us a modern, lightweight development experience.

---

## 🛠 Creating a New Vite + React App

When you would like to scaffold a new `vite` application on your own, follow these steps:

1. In the command line, navigate to the desired parent folder and run:

   ```
   npm create vite
   ```

   🔑 _Note:_ This command automatically creates a new project folder for you. You do not need to manually create one with `mkdir`.

2. Enter the desired name of your project folder.

3. Select your framework:
   - Choose **React**

4. Select your variant:
   - Choose **JavaScript**

5. `cd` into your newly created project folder and run:

   ```
   npm install
   ```

6. Start the development server:

   ```
   npm run dev
   ```

   Navigate to the provided local URL in your browser to view your app.

---

## ⚙ Recommended Customization

### 1️⃣ Update `package.json` Scripts

Open your `package.json` file and update the `scripts` section to include a `"start"` command:

```json
"scripts": {
  "dev": "vite",
  "start": "vite",
  "build": "vite build",
  "lint": "eslint src --ext js,jsx --report-unused-disable-directives --max-warnings 0",
  "preview": "vite preview"
},
```

This allows you to run:

```
npm start
```

Instead of only `npm run dev`.

---

### 2️⃣ Configure `vite.config.js`

Open `vite.config.js` and update the configuration:

```js
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
});
```

This:

- Sets the development server to run on port `3000`
- Automatically opens the browser when the server starts

---

## 🧠 Activity

Work with a partner to add clear, descriptive comments explaining the functionality of the code inside:

```
Unsolved/src
```

Focus on explaining:

- What each component does
- What JSX is doing
- How components are imported and exported
- What `createRoot` is responsible for
- How the application is structured

Your goal is to demonstrate that you understand how a basic React application is organized.

---

## 📝 Notes

Refer to the official documentation:

https://vitejs.dev/guide/

---

## 🏆 Bonus Challenge

If you complete the activity early:

Research additional configuration options available inside the `defineConfig` method.

Examples to explore:

- `base`
- `resolve`
- `build`
- `optimizeDeps`
- `css`

Use your preferred search engine to investigate how these options work and when they might be useful.
