# 🏗️ Add Sessions to the Login Route

Work with a group to complete the following activity.

## 🎯 User Stories

- As a museum director, I want visitors to view the gallery’s paintings only after they have logged in.
- As a museum visitor, I want to move between multiple pages without being logged out.

## ✅ Acceptance Criteria

This activity is complete when:

- Visitors can view the gallery page **only after logging in**.  
  If they are not logged in, they are redirected to the login page.

- Visitors can view an individual painting’s detail page **only after logging in**.  
  If they are not logged in, they are redirected to the login page.

- Once logged in, visitors can navigate from the gallery page to a painting’s detail page **without losing their logged-in status**.

## 🖼️ Assets

The following image shows what a visitor sees when attempting to access the gallery page without being logged in:

![A museum webpage prompting the user to log in before viewing the gallery.](./Images/01-Unauthorized-Gallery.jpg)

---

## 💡 Hints

- To test the routes, you may either create your own user or use the following test credentials:
  - **username:** `Sam`
  - **email:** `sam@email.com`
  - **password:** `password1234`

- When a user logs in, where should session data be stored?
- How can your Handlebars templates determine whether a user is logged in?
- Which built-in Handlebars helper allows you to conditionally render content based on login status?

## 🏆 Bonus

If you finish early, research and discuss the following with your group:

- What is the lifecycle of a session?
- When is a session created, maintained, and destroyed?

Use [Google](https://www.google.com) or another search engine to research this topic.
