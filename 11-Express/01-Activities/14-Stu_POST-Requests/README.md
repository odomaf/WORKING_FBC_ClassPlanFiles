# 🏗️ Implement Logging for GET and POST Requests

In this activity, you’ll practice handling different HTTP methods in an Express.js server.

Understanding how **GET** and **POST** requests are handled differently is a foundational skill for building full CRUD (Create, Read, Update, Delete) applications.

---

## 📘 User Story

As a developer,  
I want my server to respond differently based on the HTTP method used,  
so that future CRUD operations behave correctly.

---

## ✅ Acceptance Criteria

This activity is complete when:

- A **GET** route logs a message when a request is received.
- A **POST** route logs a message when a request is received.
- Testing the routes using **Insomnia** shows different behavior for GET vs POST requests.
- The server responds to the client confirming which request type was received.

---

## 🧪 How to Test

1. Start your server: `node server.js`

2. Open **Insomnia**.

3. Send a **GET** request to: http://localhost:3001/api/reviews

4. Send a **POST** request to the same endpoint: http://localhost:3001/api/reviews

5. Repeat the process for: http://localhost:3001/api/upvotes


6. Observe:
- Messages returned in Insomnia
- Logs printed in your terminal

---

## 💡 Hints

- Express allows you to define multiple routes using the same URL.
- The HTTP method (`GET`, `POST`, etc.) determines which route handler runs.
- Look at `req.method` to see which type of request was made.

---

## 🏆 Bonus Challenge

Discuss with your partner:

- When should you use a **GET** request?
- When should you use a **POST** request?
- Why is it important not to mix their responsibilities?

Research using a search engine or official Express documentation.

---

## 📚 Helpful References

- Express Routing: https://expressjs.com/en/guide/routing.html
- HTTP Methods Overview: https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods

---




