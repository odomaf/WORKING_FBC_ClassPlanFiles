# 🧪 Insomnia API Testing Demo

In this activity, students will use **Insomnia** to explore and test API endpoints before writing any frontend code.

This mirrors real-world development workflows where developers:
- Test APIs independently
- Inspect returned data
- Verify endpoints before building UI features

---

## 🚀 Getting Started with Insomnia

If you do not already have Insomnia installed, download it here:

https://insomnia.rest/download

Official Insomnia documentation:

https://docs.insomnia.rest/insomnia/get-started

---

## 🔍 Demo: GitHub Public API

We will begin by making a **GET request** to GitHub’s public API.

### Steps

1. Open Insomnia  
2. Create a new request  
3. Set the HTTP method to **GET**  
4. Enter the following URL: https://api.github.com/repos/microsoft/vscode/pulls?state=open
5. Click **Send**

---

## 🧠 Understanding the URL Structure

This URL is made up of several parts:

- Protocol:  
  `https`

- Base URL:  
  `api.github.com`

- Endpoint:  
  `repos`

- Organization:  
  `microsoft`

- Repository:  
  `vscode`

- Resource:  
  `pulls`

- Query String:  
  `state=open`

These parts directly relate to Express concepts you will use later, such as:
- `req.params`
- `req.query`

---

## 📦 Inspecting the Response

After clicking **Send**, Insomnia returns:

- A JSON array
- Each object represents one open pull request
- Each object includes details such as:
  - Title
  - Author
  - Status
  - URL

This type of response is ideal for:
- Looping through data
- Rendering lists or cards
- Building frontend UI components

---

## 🔄 Trying a Different Resource

Now modify the URL slightly.

Replace the word **pulls** with **issues**.

New URL: https://api.github.com/repos/microsoft/vscode/issues?state=open


Click **Send** again.

Notice:
- The base URL stays the same
- The organization and repository stay the same
- Only the resource changes
- The API returns different data

---

## 📚 Additional Documentation

GitHub REST API documentation:

https://docs.github.com/en/rest

---

## ✅ Key Takeaways

- Insomnia allows you to test APIs without writing JavaScript
- URLs follow predictable, structured patterns
- Route parameters and query strings control API behavior
- Testing APIs first makes frontend development faster and more reliable

---

## 🏆 Bonus Exploration

Research the following topics:

- What other HTTP methods does Insomnia support?
- What is the difference between GET and POST?
- How do query strings differ from route parameters?

Use Google or the documentation links above to explore further.

---






