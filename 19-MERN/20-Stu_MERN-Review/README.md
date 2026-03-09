# 🏗️ Unit 20 – 20-Stu_MERN-Review - Full Thought Feed + Detail Experience

### CodeAcademy | MERN + GraphQL Track

This is where your app starts to feel real.

You’re going to connect the full experience:

- Global thought feed
- Individual thought detail page
- Create new thoughts
- Add comments to a thought

This is no longer just “wiring up queries.”  
This is **full-stack feature integration.**

---

## 🎯 User Stories

As a user:

- I want to see a feed of thoughts from all users.
- I want to click a thought and view its details.
- I want to create my own thought.
- I want to leave a comment on an individual thought.

---

## ✅ Acceptance Criteria

Your implementation is complete when:

### 🏠 Homepage

- The homepage displays a list of thoughts from all users.
- Each thought links to its own detail page.

---

### ✍️ Create Thought

- Submitting the new thought form:
  - Sends the mutation to the server
  - Saves the thought in the database
  - Displays the new thought on the page

---

### 📄 Single Thought Page

- Visiting a single thought route displays:
  - The thought’s text
  - The author
  - Its list of comments

---

### 💬 Add Comment

- Submitting a comment:
  - Sends the mutation to the server
  - Persists in the database
  - Displays immediately on the thought page

---

## 🧠 Think Like a Bootcamp Developer

At this stage, bugs usually fall into one of these categories:

- Query field name mismatch
- Mutation variables not passed correctly
- Component not refetching or updating cache
- Form not preventing default submission
- Route param not matching expected ID

Debug intentionally.  
Use `console.log()`.  
Inspect network requests.  
Check your GraphQL response structure carefully.

This is how real debugging works.

---

## 💡 Hints

- How does your Vite dev server communicate with your backend API?
- Where are your GraphQL queries and mutations defined?
- What does `useMutation()` return?
  - (Hint: It returns a function you call — not data directly.)
- How do you handle loading and error states?
- What happens to the UI after a mutation runs?

---

## 🏆 Bonus Challenge

Apollo Client includes built-in caching behavior.

**Challenge:**  
How could leveraging Apollo’s cache improve performance after a mutation?

For example:

- Could you update the cache instead of refetching?
- How might that reduce network requests?

Research and be ready to explain the tradeoffs.

---
