# 🐛 Graceful Error Handling with `async` / `await`

In this activity, you will improve your API routes by **handling errors intentionally and returning meaningful HTTP status codes**.

So far, you’ve learned how to use `async` and `await` to clean up asynchronous code. In this step, we take it further by making sure our routes:

* Fail gracefully when something goes wrong
* Communicate clearly with the client
* Follow common backend API conventions

This is where your code starts to feel **professional**.

---

## 🧠 Learning Objectives

By the end of this activity, you should be able to:

* Use `async` / `await` to support `GET`, `PUT`, and `DELETE` requests
* Use `try...catch` blocks to safely handle runtime errors
* Return appropriate HTTP status codes based on the outcome of a request
* Provide helpful JSON error messages to the client

---

## 📂 Your Task

You will update the following route:

```
/api/users/:id
```

Your job is to refactor the route handlers so that they:

* Use `async` / `await` instead of Promise chaining
* Wrap database logic inside `try...catch` blocks
* Return clear status codes and messages for success and failure cases

You are not changing *what* the route does — you are improving **how it handles success and failure**.

---

## ✅ Acceptance Criteria

This activity is complete when:

* The `GET`, `PUT`, and `DELETE` routes for `/api/users/:id` use `async` / `await`
* Each route properly handles errors using `try...catch`
* The correct HTTP status codes are returned:

### Successful Request

* `200 OK` when the request completes without error

### User Not Found

* `404 Not Found` with the following JSON response:

```json
{
  "message": "No user with this id!"
}
```

### Server Error

* `500 Internal Server Error` when an unexpected error occurs

---

## 💡 Helpful Hint

To test your error-handling logic, try visiting the following URL in your browser or API client:

```
/api/users/abc
```

This intentionally invalid ID should trigger your `catch` block.

---

## 🔍 Reflection Questions

Discuss with your group:

* Why is returning the correct HTTP status code important?
* How does `try...catch` improve the reliability of async code?
* What information should an API error message include (and what should it *not* include)?

---

## 🏆 Bonus (Optional)

If you finish early, research and discuss:

* What are some other commonly used HTTP status codes?
* When might you use `400`, `401`, `403`, or `422`?

Use MDN, official HTTP documentation, or other reputable sources.

---

## ✅ Summary

This activity reinforces an important backend principle:

> **APIs should fail clearly, safely, and predictably.**

By combining `async` / `await`, `try...catch`, and proper status codes, you are building APIs that are easier to debug, easier to consume, and easier to trust.
