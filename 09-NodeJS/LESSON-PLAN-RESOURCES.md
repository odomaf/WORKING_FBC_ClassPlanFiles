# 09 — Node.js Guide (Student README)

## 🎯 Unit Goal

By the end of this unit, you should be able to:

- Explain what **Node.js** is and why it exists
- Run JavaScript **outside the browser**
- Use Node’s built-in modules
- Install and use packages with **npm**
- Understand how Node fits into full‑stack development

This unit focuses on **foundations**, not mastery.

---

## 🧠 What Is Node.js?

Node.js allows you to run JavaScript **on your computer or a server**, instead of only inside a browser.

Before Node.js:

- JavaScript lived inside `<script>` tags
- Back-end logic required other languages

With Node.js:

- JavaScript can run servers
- JavaScript can access files
- JavaScript can power APIs

📘 Learn More

- MDN — Introduction to Node.js  
  https://developer.mozilla.org/en-US/docs/Learn/Server-side/Node_server_side_overview
- Codecademy — What is Node?  
  https://www.codecademy.com/article/what-is-node

---

## 🧩 Browser JavaScript vs Node.js

| Browser JS               | Node.js               |
| ------------------------ | --------------------- |
| Runs in Chrome / Firefox | Runs on your computer |
| Can access the DOM       | No DOM                |
| Uses `window`            | Uses `global`         |
| Sandboxed                | Can access files & OS |

📘 Reference

- MDN — JavaScript Environments  
  https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction

---

## 🛠 Installing Node.js

Download the **LTS version**:

https://nodejs.org

Verify installation:

```
node -v
npm -v
```

📘 Reference

- W3Schools — Node.js Get Started  
  https://www.w3schools.com/nodejs/nodejs_get_started.asp

---

## ▶️ Running JavaScript with Node

Create a file:

```
index.js
```

Run it:

```
node index.js
```

Key idea:

> Node replaces the browser as the JavaScript runtime.

📘 Reference

- Codecademy — Running JavaScript Locally  
  https://www.codecademy.com/articles/running-javascript-locally

---

## 📦 npm — Node Package Manager

npm lets you install reusable code.

Initialize a project:

```
npm init -y
```

Install a package:

```
npm install axios
```

This creates:

- `package.json`
- `node_modules/`

📘 Learn More

- MDN — Package Management  
  https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Package_management
- W3Schools — npm  
  https://www.w3schools.com/nodejs/nodejs_npm.asp

---

## 🧱 Modules in Node.js

Node uses **CommonJS modules**.

Export:

```js
module.exports = function greet() {
  console.log("Hello from Node");
};
```

Import:

```js
const greet = require("./greet");
greet();
```

📘 Reference

- W3Schools — Node Modules  
  https://www.w3schools.com/nodejs/nodejs_modules.asp

---

## 📂 Built‑In Node Modules

Node includes powerful built‑in modules:

- `fs` — file system access
- `path` — safe file paths
- `http` — create servers

📘 Reference

- Node.js Docs — fs  
  https://nodejs.org/api/fs.html

---

## 🌐 Servers (Preview)

Node can act as a web server.

Concept:

- Client sends request
- Server sends response

📘 Preview Reading

- MDN — What is a Web Server  
  https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_web_server
- W3Schools — HTTP Module  
  https://www.w3schools.com/nodejs/nodejs_http.asp

---

## ⚠️ Common Beginner Mistakes

- Forgetting to run `node filename.js`
- Editing files without re-running Node
- Confusing browser JS with Node JS
- Deleting `package.json`

---

## 🧭 Why This Unit Matters

Node.js is the foundation for:

- Express.js
- APIs
- Databases
- Full‑stack applications

Think of Node as the **engine**, not the entire car.

---

## ✅ After This Unit, You Should Be Able To:

- Explain Node.js in plain English
- Run JavaScript with Node
- Install packages with npm
- Read basic Node documentation

Confusion is normal — understanding grows with practice.

---

## 📚 Optional Practice

- Codecademy — Learn Node.js  
  https://www.codecademy.com/learn/learn-node-js
- MDN — Server‑Side Programming  
  https://developer.mozilla.org/en-US/docs/Learn/Server-side
