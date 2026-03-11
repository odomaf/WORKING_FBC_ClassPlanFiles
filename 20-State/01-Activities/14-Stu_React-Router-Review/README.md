# 🏗️ React Router: Build a Single Post Details Page

Work with a partner to update the app so users can click into a single post and view its full details along with the related comments.

## 🎯 User Stories

- As a user, I want to open an individual post and read the full conversation around it.
- As a user, I want each post to have its own URL so I can bookmark it or share it later.

## ✅ Acceptance Criteria

- A user can click a post from the homepage and navigate to that post’s detail page without a full page refresh.
- A user can visit a post directly by its URL in the browser and still see the correct post details.
- The single-post page displays the selected post’s information.
- The single-post page displays that post’s list of comments.

## 📚 What You’re Practicing

In this activity, you will practice how to:

- create dynamic routes with React Router
- navigate between pages in a single-page application
- use URL parameters to identify which record to display
- connect route parameters to a GraphQL query
- render a detail page from fetched data

## 🧠 Activity Goal

Your goal is to create a dedicated details page for each post so users can move from the homepage to an individual post view and read its comments.

## 🖼️ Reference

The example app should include:

- the selected post’s content
- a list of comments for that post
- navigation that works without reloading the page

> Instructor note: You may keep the existing visual style, or lightly restyle the page to better match your project theme.

## 💡 Hints

Think through these questions as you build:

- What should the `to` prop look like in the `<Link>` for each post?
- How do we define a route that includes a dynamic value like an ID?
- How can `useParams()` help us retrieve that ID from the URL?
- Once we have the route parameter, how do we pass it into `useQuery()`?
- What should happen if the page loads before the query finishes?

## 🏆 Bonus Challenge

If you finish early, extend the activity with one or more of the following:

- Add a loading message while the post data is being fetched.
- Add a fallback message if the post is not found.
- Display the comment count near the post title.
- Add a “Back to Home” link on the single-post page.

## 🔎 Partner Discussion

Before you begin coding, discuss these questions:

1. Why is it useful for each post to have its own URL?
2. What makes client-side routing different from a traditional full page reload?
3. How do route parameters help us reuse one page component for many posts?

## 🌐 Research Prompt

After completing the activity, research this question with your partner:

- Which browser feature or API does React Router rely on to update the URL without reloading the page?

## ✅ Success Check

You know the feature is working when:

- clicking a post opens its details page
- the URL updates correctly
- refreshing the browser still loads the correct page
- the selected post’s comments appear on screen
