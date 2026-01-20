# 📐 Create & Read Data with Sequelize (Student Activity)

In this activity, you will focus on **understanding how Sequelize performs CREATE and READ operations** using model query methods.

Rather than writing new code from scratch, your goal is to **read existing code carefully and explain what it is doing**. This mirrors a real-world skill: developers often spend more time reading and understanding code than writing it.

---

## 🧠 Learning Objectives

By the end of this activity, you should be able to:

* Identify where Sequelize CREATE and READ operations occur in a route file
* Explain what `Book.create()` does and when it is used
* Explain what `Book.findAll()` does and what it returns
* Describe how data flows from an HTTP request to the database and back to the client

---

## 📂 Your Task

Work with your group to add **clear, meaningful comments** to the code found in:

```
Unsolved/routes/api/bookRoutes.js
```

Your comments should explain:

* What each route is responsible for
* Which Sequelize method is being used
* What data is being sent to or retrieved from the database
* What the response sent back to the client represents

Focus on *why* the code exists, not just *what* it does.

---

## 📝 Reference Material

Use the official Sequelize documentation to guide your understanding:

* Sequelize – Model Querying Basics
  [https://sequelize.org/master/manual/model-querying-basics.html](https://sequelize.org/master/manual/model-querying-basics.html)

You do **not** need to memorize every option — focus on the patterns you see used in this activity.

---

## 🔍 Reflection Questions

Discuss with your group:

* What is the difference between a CREATE operation and a READ operation?
* Why might an API return JSON instead of rendering a page?
* How does Sequelize simplify working with SQL compared to writing raw queries?

---

## 🏆 Bonus (Optional)

If you finish early, research and discuss:

* What is the difference between Sequelize’s `create()` and `build()` methods?
* When might you want to use `build()` instead of `create()`?

You may use Google, official documentation, or other reputable learning resources.

---

## ✅ Summary

This activity is about **reading code with intention**. Understanding how Sequelize performs basic CREATE and READ operations will prepare you for UPDATE and DELETE operations in later activities.

Take your time — clarity now will save you hours later.
