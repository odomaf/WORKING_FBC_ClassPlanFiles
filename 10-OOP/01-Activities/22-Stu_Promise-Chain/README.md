# 🏗️ Generate Blog Post HTML from JSON Data

## Overview

In this activity, you’ll build a small utility that reads data from a JSON file and uses it to generate an HTML document.

This approach allows you to separate **data** from **presentation**, making your application easier to update and maintain.

---

## 🧠 User Story

As a developer, I want a utility that reads data from a JSON file and generates an HTML document for a blog post so that I can update the HTML more efficiently.

---

## ✅ Acceptance Criteria

Your solution is complete when:

- Blog post data is read asynchronously from `blogPost.json`
- An HTML string is generated using the `render()` method of the `BlogPost` class
- The generated HTML is written to a file named `post.html`
- A success message is printed to the terminal after the HTML file is created

---

## 🖼️ Expected Output

The generated HTML file should display a complete blog post based on the data from the JSON file.

(See the example screenshot for reference.)

---

## 💡 Helpful Hints

- How can Promises be used to perform multiple asynchronous tasks in sequence?
- How can Node’s built-in `fs/promises` module be used to read and write files asynchronously?

---

## 🛠️ What You’re Practicing

- Working with JSON data
- Reading files asynchronously in Node.js
- Writing files asynchronously in Node.js
- Using class methods to generate dynamic HTML
- Chaining asynchronous operations with Promises

---

## 🏆 Bonus Challenge

Research the `Promise.all()` method.

Be ready to explain:

- What `Promise.all()` does
- When it’s useful
- How it differs from awaiting Promises one at a time
