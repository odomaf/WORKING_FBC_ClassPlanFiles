# 🧱 Unit 14: MVC Architecture with Express, Sequelize & Handlebars

Welcome to **Unit 14**, where everything you’ve learned so far finally _clicks together_.

In this unit, you’ll learn how professional web applications are structured using the **Model–View–Controller (MVC)** pattern. This is a _huge_ milestone — MVC is used in real-world production apps across startups and enterprises.

---

## 🎯 Unit Goals

By the end of this unit, you should be able to:

- Explain what **MVC architecture** is and _why_ it’s used
- Build an Express app organized into **models, views, and controllers**
- Use **Sequelize** models to interact with a SQL database
- Render dynamic HTML using **Handlebars** templates
- Connect routes → controllers → models → views
- Understand how data flows through a full-stack web app

---

## 🧠 Big Picture: What Is MVC?

**MVC** stands for:

- **Model** – Handles data & database logic
- **View** – Handles what the user sees (HTML templates)
- **Controller** – Handles requests, responses, and business logic

Think of MVC like a restaurant:

- **Model** = the kitchen (data & rules)
- **View** = the plated food (what the customer sees)
- **Controller** = the waiter (takes orders, delivers results)

### Why MVC Matters

- Cleaner code
- Easier debugging
- Better teamwork
- Scales to large applications

📖 **Read More**:

- MDN – Application architecture overview
  [https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Website_architecture](https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Website_architecture)

---

## 🗂️ Typical MVC Folder Structure

```
project/
├── config/
│   └── connection.js
├── controllers/
│   ├── api/
│   └── homeRoutes.js
├── models/
│   ├── index.js
│   └── User.js
├── views/
│   ├── layouts/
│   │   └── main.handlebars
│   └── home.handlebars
├── public/
│   └── js/
├── seeds/
├── server.js
└── package.json
```

You’ll see this pattern _everywhere_ in industry codebases.

---

## 🚏 Controllers (Express Routes)

Controllers:

- Receive HTTP requests
- Decide what should happen
- Communicate with models
- Send responses or render views

### Key Express Concepts

- `express.Router()`
- `req.params`, `req.body`, `req.query`
- `res.render()` vs `res.json()`

📖 **Learn More**:

- Express Routing (Official Docs)
  [https://expressjs.com/en/guide/routing.html](https://expressjs.com/en/guide/routing.html)
- MDN – Express introduction
  [https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction)

---

## 🧬 Models (Sequelize)

Models represent **tables in your database**.

They define:

- Columns
- Data types
- Validations
- Relationships

### Common Sequelize Concepts

- `Model.init()`
- `DataTypes.STRING`, `INTEGER`, `BOOLEAN`
- `findAll()`, `findByPk()`, `create()`
- Associations: `hasMany`, `belongsTo`

📖 **Resources**:

- Sequelize Model Basics
  [https://sequelize.org/docs/v6/core-concepts/model-basics/](https://sequelize.org/docs/v6/core-concepts/model-basics/)
- W3Schools – SQL Overview (refresh)
  [https://www.w3schools.com/sql/](https://www.w3schools.com/sql/)

---

## 🖼️ Views (Handlebars)

Handlebars lets you create **dynamic HTML templates**.

Instead of repeating HTML, you use placeholders:

- `{{variable}}`
- `{{#each array}}`
- `{{#if condition}}`

### Layouts

- Shared wrapper for all pages
- Usually `main.handlebars`
- Injects content with `{{{body}}}`

📖 **Handlebars Docs**:

- Mustache / Handlebars Guide
  [https://handlebarsjs.com/guide/](https://handlebarsjs.com/guide/)
- Logic-less template philosophy
  [https://mustache.github.io/](https://mustache.github.io/)

---

## 🔄 Data Flow in an MVC App

1. User visits a URL
2. Express route (controller) is triggered
3. Controller queries Sequelize model
4. Data is returned
5. Controller sends data to Handlebars
6. Handlebars renders HTML
7. Browser displays the page

This flow is _critical_ to understand.

📌 If something breaks, ask yourself:

- Is it the route?
- The model?
- The query?
- The template?

---

## 🧪 Common Debugging Tips

- Use `console.log()` in controllers
- Check SQL output in terminal
- Verify Handlebars variable names
- Confirm associations are defined
- Restart server after model changes

📖 Helpful Reading:

- MDN – Debugging JavaScript
  [https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_went_wrong](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_went_wrong)

---

## 🏆 What Mastery Looks Like

You know you’re solid when you can:

- Trace a request end-to-end
- Add a new model without breaking the app
- Create a new route + view confidently
- Explain MVC to someone else

This unit is a **turning point** — once MVC clicks, full-stack development feels _much_ more manageable.

---

## 📌 Recommended Practice

- Draw MVC diagrams on paper
- Walk through code _line by line_
- Rename variables to test understanding
- Break things (safely) and fix them

---

## 🔗 Extra Reference Links

- Express.js Official Docs
  [https://expressjs.com/](https://expressjs.com/)
- Sequelize Associations
  [https://sequelize.org/docs/v6/core-concepts/assocs/](https://sequelize.org/docs/v6/core-concepts/assocs/)
- Handlebars Expressions
  [https://handlebarsjs.com/guide/expressions.html](https://handlebarsjs.com/guide/expressions.html)

---

👊 Take your time with this unit. MVC is not about speed — it’s about **clarity**.

You’ve officially entered _real_ full‑stack territory.
