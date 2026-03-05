# 🏗️ Unit 19 – 18-Stu_useMutation - Build the Thought Details Page (Query w/ Arguments)

### CodeAcademy | MERN + GraphQL Track

Right now the homepage shows a feed of thoughts. That’s great — but real apps also need **detail pages**.

In this activity, you’ll wire up the GraphQL query that powers a single thought page so users can click a post and view the full details.

> Note: The title on this activity might mention “mutation,” but what you’re actually implementing here is a **query** that accepts an argument (the thought’s ID).

---

## 🎯 User Story

As a user,  
when I click on a thought in the feed,  
I want to be taken to a details page where I can view that thought’s full information.

---

## ✅ Acceptance Criteria

This activity is complete when:

- Clicking a thought navigates to a new page (already routed for you)
- The new page displays the selected thought’s details (queried from the API)

---

## 💡 Hints

- ✅ The routing is already set up — you don’t need to reinvent navigation.
- Think in GraphQL terms:
  - The homepage uses a query that returns a **list**
  - The detail page needs a query that returns **one item**
- Where should reusable GraphQL queries live so components can import them?
- What does it mean for a query to accept an argument (`id`)?
- Which values returned by `useQuery()` help you handle:
  - loading state
  - errors
  - missing data

---

## 🧠 Bootcamp Reality Check

If the detail page is blank:

- Confirm the route param (id) is being read correctly
- Confirm your query matches the schema field name exactly
- `console.log(data)` to verify the returned shape
- Validate the thought ID exists (seed the DB if needed)

---

## 🏆 Bonus Challenge

This activity uses React Router for client-side routing.

**Challenge:**  
Which browser API does React Router leverage to change routes without reloading the page?

Use Google (or another search engine) and be ready to explain your answer in one sentence.

---
