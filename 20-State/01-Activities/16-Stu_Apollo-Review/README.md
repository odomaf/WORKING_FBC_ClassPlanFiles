# 🏗️ React + GraphQL: Create a New Post with a Mutation

Work with a partner to update the application so users can submit a new post and see it appear in the feed.

## 🎯 User Story

As a user, I want to submit a new post so it can be saved to the database and appear in the application.

## ✅ Acceptance Criteria

- When a user submits the form, a GraphQL mutation is triggered.
- The new post is saved to the database.
- After a successful submission, the UI updates to show the new post in the feed.
- The form clears after the post is successfully submitted.

## 📚 What You’re Practicing

In this activity you will practice how to:

- create and use GraphQL mutations
- send data from a form to a backend API
- connect React components to Apollo Client
- update the UI after new data is created

## 🧠 Activity Goal

Your goal is to connect a form to a GraphQL mutation so users can create new posts and see them appear in the app.

## 💡 Hints

Think through these questions as you build:

- Where should GraphQL mutations be defined in the project?
- What arguments does the mutation need to create a new post?
- How can the mutation be triggered when the form is submitted?
- What pieces of mutation state (`loading`, `error`, `data`) might be useful to display in the UI?
- After the mutation runs, how can the UI update to reflect the new data?

## 🏆 Bonus Challenge

If you complete the core requirements early, try extending the feature with one of the following:

- Show a loading indicator while the mutation is running.
- Display an error message if the submission fails.
- Optimistically add the post to the UI before the server responds.
- Display the username and timestamp of the newly created post.

## 🔎 Partner Discussion

Before implementing the mutation, discuss these questions:

1. What is the difference between a GraphQL **query** and a **mutation**?
2. Why are mutations used for creating or modifying data?
3. How does Apollo Client help manage data between the UI and the server?

## 🌐 Research Prompt

After finishing the activity, research the following with your partner:

- How can Apollo Client also act as a **state management tool** in a React application?

## ✅ Success Check

You know your implementation is complete when:

- the form successfully submits data
- the mutation creates a new record in the database
- the UI updates and displays the newly created post
- the app continues to function without a full page refresh
