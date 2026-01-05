# 📖 Implement Body Parsing for POST Requests

In this activity, you will work with a partner to add **body parsing middleware** to an Express.js server and handle incoming POST request data sent in different formats.

---

## 🧠 User Story

As a developer, I want my application to be backward compatible with URL-encoded data in addition to JSON so that my server can handle requests from different types of clients.

---

## ✅ Acceptance Criteria

It’s done when:

- I have implemented Express.js middleware to parse JSON request bodies.
- I have implemented Express.js middleware to parse URL-encoded request bodies.
- I can successfully make a POST request to `/api/upvotes/:review_id` using JSON data.
- I can successfully make a POST request to `/api/upvotes/:review_id` using URL-encoded data.
- Both POST requests return a response that includes the updated upvote count for the selected review.

---

## 🔧 Technical Requirements

Your server should support the following request body formats.

### JSON request body example

Send this using Insomnia with **Body → JSON** selected:

```json
{
  "upvote": true
}
```

### URL-encoded request body example

Send this using Insomnia with **Body → Form URL Encoded** selected:

```
upvote=true
```

---

## 🧪 Testing Instructions (Using Insomnia)

1. Start your server using Node.
2. Open Insomnia.
3. Create a POST request to:

```
http://localhost:3001/api/upvotes/:review_id
```

4. Replace `:review_id` with a valid review ID from your data.
5. Test the endpoint twice:
   - Once using **JSON**
   - Once using **Form URL Encoded**
6. Confirm that the response shows the updated upvote count.

---

## 📝 Notes

You will need to use Express middleware to access request body data.

Helpful documentation:

- Express.js documentation on `req.body`  
  http://expressjs.com/en/api.html#req.body

- Optional Chaining (JavaScript)  
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining

---

## 💡 Hints

- How does Express know how to read incoming request bodies?
- What middleware is required for JSON data?
- What middleware is required for URL-encoded form data?
- How does Insomnia format data differently depending on the body type selected?

---

## 🏆 Bonus Challenge

After completing the activity, research the following:

- What is URL encoding?
- Why is URL-encoded data still commonly used today?

Use Google or another search engine to find real-world examples.

---
