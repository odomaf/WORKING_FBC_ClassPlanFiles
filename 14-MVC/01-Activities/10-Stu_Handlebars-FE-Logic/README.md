# 📐 Add Comments: Editing a Dish (Street Eats Night)

In this activity, your group will read through an existing “edit dish” feature and add clear comments that explain what each part is doing.

You’re practicing how data flows through an MVC app:

**View (Handlebars) → Client-side JS → API Route (Controller) → Database (Model)**

## ✅ Your Task

Add comments describing the purpose and behavior of the code in:

- [dish.handlebars](./Unsolved/views/dish.handlebars)
- [edit-dish.js](./Unsolved/public/js/edit-dish.js)
- [dish-routes.js](./Unsolved/controllers/api/dish-routes.js)

Focus your comments on:

- what triggers the code
- what data is being collected/sent
- where the request is going
- what the server does with that request
- what the user should see after the update

## 📝 Notes / References

Use these references while you work:

- [Handlebars Guide (basics + expressions)](https://handlebarsjs.com/guide/#what-is-handlebars)
- [MDN: MVC overview](https://developer.mozilla.org/en-US/docs/Glossary/MVC)

## 💡 Hint

When a user edits a dish, where does the updated info come from?

- the HTML form fields?
- the browser (client-side JavaScript)?
- the database?

Follow the path from the **form submit** to the **API route**.

## 🏆 Bonus Challenge

Discuss with your group:

- What are the advantages of using a template engine like Handlebars?
- What are the tradeoffs compared to building the UI with a front-end framework (like React)?

Be ready to share 1 pro and 1 con with the class.
