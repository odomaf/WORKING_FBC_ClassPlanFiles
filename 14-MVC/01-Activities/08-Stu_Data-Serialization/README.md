# 🐛 Menu Page Missing Chef Names

Your Street Eats Night app is _almost_ working — but there’s a disconnect between what the controller sends and what the view is trying to display.

In this activity, you’ll work with your group to fix the issue so the **full menu renders correctly on the main page**, including the **Chef name** for each dish.

## 🎯 User Story

- As a guest browsing Street Eats Night, I want to see the full menu so I know what food is available (and who’s cooking what).

## ✅ Expected Behavior

- Visiting the home page shows a list of dishes.
- Each dish displays the **dish name** and the **Chef name**.

## ❌ Current Behavior

- The home page loads, but the menu does **not** show the dishes (or the Chef names), even though the single dish page might.

## 🔁 Steps to Reproduce

1. Install dependencies:

   `npm install`

2. Make sure PostgreSQL is running.

3. Create the database:

   `psql -U postgres`

   Then run:

   `\i db/schema.sql;`

4. Seed the database:

   `node seeds/index.js`

5. Start the server:

   `npm start`

6. Open the app:

   `http://localhost:3001/`

## 🧠 What You’re Practicing

- Passing data from a controller route into a Handlebars view
- Making sure your view is using the same property names that your route provides
- Debugging MVC apps by checking the flow:
  **Model → Controller → View**

## 💡 Hint

If `dish.handlebars` shows the Chef name but `all.handlebars` doesn’t, what does that tell you about:

- which route is working,
- what data is being passed,
- and how the main view is looping/rendering?

## 🌶️ Bonus

If your group finishes early:

- What are different ways you can “trim down” Sequelize data before sending it to a view?
- Where could you do that trimming (model query vs controller vs template)?

Be ready to share one approach with the class.
