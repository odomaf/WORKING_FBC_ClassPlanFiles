# 22 Final Project: Full-Stack Single-Page Application

By this point in the course, you have built front-end projects, back-end APIs, full-stack applications, and collaborative assignments. Now it’s time to bring those skills together into one polished final project.

Your final project is a chance to build something that feels real: a full-stack application with a modern front end, a working API, a database, authentication, and a user experience that shows off what your team can do.

Think of this project as your opportunity to build something that belongs in your professional portfolio.

---

# Project Goal

Build a **full-stack single-page application** that solves a real problem and demonstrates the skills you have developed throughout this course.

Your team will define the idea, the user story, and the feature set, but your application must meet the core requirements below.

---

# Core Technical Requirements

Your application must:

- Use **React** for the front end.
- Use **Node.js with Express.js** for the backend server.
- Implement **either a GraphQL API or a REST API**.
- Support **CRUD operations** (Create, Read, Update, Delete) with POST, GET, PUT/PATCH, DELETE routes (used at least one time per HTTP verb)
- Use **one of the following database options**:
  - **MongoDB with Mongoose**, or
  - **PostgreSQL with Sequelize**
- Include **authentication using JSON Web Tokens (JWT)**.
- Protect **sensitive API keys and environment variables on the server**.
- Be **deployed on Render** with working data persistence.
- Include a **polished, responsive user interface**.
- Be **interactive**, responding to user input and updating data dynamically.

---

# API Options

You may choose the API style that best fits your project.

### Option 1 — GraphQL

GraphQL allows clients to request exactly the data they need using a single endpoint. This approach works well when your front end needs flexible data queries.

Common tools include:

- Apollo Server
- Apollo Client
- Express middleware

### Option 2 — REST

REST APIs use multiple endpoints and HTTP methods to structure requests and responses. This approach is simple, widely used, and works well for clearly structured services.

Typical routes include:

- `GET /items`
- `POST /items`
- `PUT /items/:id`
- `DELETE /items/:id`

Either approach is acceptable. Choose the one that best supports your application design.

---

# Database Options

Your team may choose the database approach that best fits your application.

### Option 1 — MongoDB + Mongoose

Best for document-style data where structure may evolve over time.

Good for:

- flexible schemas
- nested data
- rapid prototyping

### Option 2 — PostgreSQL + Sequelize

Best for structured relational data with clear relationships between entities.

Good for:

- relational models
- associations
- structured queries

Both approaches are commonly used in real-world applications.

---

# User Experience Expectations

Your application should feel like a real product.

That means:

- clear navigation
- responsive layout
- polished design
- intuitive interactions
- a consistent visual style

A smaller application that works well is better than a large application that feels unfinished.

---

# Styling Guidance

You may choose any styling approach that helps you build a professional interface.

Options include:

- Writing your own CSS
- CSS Modules
- CSS-in-JS solutions such as:
  - styled-components
  - Emotion
- Component libraries such as:
  - Material UI
  - Chakra UI
  - Ant Design
  - Semantic UI

Your UI should look intentional and professional.

---

# Optional Enhancements

These are not required, but can strengthen your project if implemented well.

### Payment Integration

You may integrate a payment platform such as Stripe if it makes sense for your application.

Examples:

- event ticketing
- subscriptions
- donations
- digital services

### Progressive Web App Features

For an additional challenge, you may implement:

- a **web manifest**
- a **service worker**
- **offline functionality**
- **installable application behavior**

---

# Presentation Requirements

Your team will present your application as if demonstrating it to stakeholders or potential employers.

Your presentation should include:

### Elevator Pitch

A one-minute explanation of what your app does and why it matters.

### Concept

Explain:

- the problem your application solves
- your user story
- your motivation for building it

### Development Process

Discuss:

- technologies used
- how work was divided
- challenges encountered
- lessons learned

### Live Demo

Show the application working, highlighting:

- authentication
- core features
- data interaction
- the overall user experience

### Future Improvements

Explain what your team would add next with more time.

### Project Links

Include:

- deployed Render application
- GitHub repository

---

# Grading Breakdown

### Technical Requirements — 25%

Your project should include:

- React front end
- Node + Express backend
- GraphQL **or** REST API
- CRUD functionality
- MongoDB + Mongoose **or** PostgreSQL + Sequelize
- JWT authentication
- secure environment variable handling

---

### Project Concept — 10%

Your application should be:

- unique
- clearly explained
- meaningful to users

---

### Deployment — 20%

Your project should:

- be deployed on Render
- load without errors
- connect successfully to its database
- include a GitHub repository link

---

### Repository Quality — 10%

Your repository should include:

- a unique project name
- clean file structure
- meaningful commit messages
- clear naming conventions
- helpful comments where appropriate
- a high-quality README

---

### Application Quality — 15%

Your application should demonstrate:

- intuitive user experience
- clean visual design
- responsiveness
- usability

---

### Presentation — 10%

Your presentation should:

- use a slide deck
- involve every team member speaking
- clearly explain the concept, process, and demo

---

### Collaboration — 10%

Teams should demonstrate balanced collaboration reflected through GitHub commits and shared development work.

---

# Submission Requirements

Each team member must submit:

- The **URL of the deployed application**
- The **URL of the GitHub repository**

Make sure your repository includes a complete README and your deployed app is fully functional.

---

# Suggested Team Project Ideas

If your team is unsure what to build, here are some example project directions that work well for a full-stack application. These ideas are only starting points. Your team is encouraged to adapt them or create your own concept.

The most successful projects usually focus on **one clear workflow done well**, rather than trying to build many unrelated features.

---

## 1. Job Application Tracker

A platform that helps users organize and track job applications.

Possible features:

- user authentication
- add and manage job applications
- track status (applied, interview, offer, rejected)
- attach notes for each application
- dashboard showing active applications
- filters by company or status

---

## 2. Study Group Planner

An app that helps students organize study sessions and collaborate with classmates.

Possible features:

- create study groups
- schedule study sessions
- RSVP or attendance tracking
- shared notes or resources
- dashboard showing upcoming sessions

---

## 3. Event Discovery Platform

A platform where users can create and discover local events.

Possible features:

- create events
- RSVP to events
- browse events by category
- event dashboard
- user-created event pages

---

## 4. Habit Tracker

An application that helps users track daily habits and build consistency.

Possible features:

- create habits
- daily completion tracking
- habit streak tracking
- dashboard showing progress
- habit history view

---

## 5. Recipe Manager

A platform where users can save, organize, and share recipes.

Possible features:

- create and edit recipes
- ingredient lists
- recipe categories
- favorites or bookmarks
- search and filtering

---

## 6. Personal Finance Tracker

An application for tracking income, expenses, and spending categories.

Possible features:

- add income and expenses
- categorize transactions
- monthly spending dashboard
- charts or summaries
- budgeting tools

---

## 7. Workout Log

A fitness tracking application that helps users record workouts and monitor progress.

Possible features:

- log workouts
- track exercises and sets
- workout history
- progress dashboard
- goal tracking

---

## 8. Book or Movie Collection App

A personal media library for tracking books or movies users want to read or watch.

Possible features:

- add books or movies
- rating system
- status tracking (completed, watching, planned)
- search and filtering
- personal collection dashboard

---

## 9. Community Resource Board

A platform where users can share helpful resources such as tools, guides, or recommendations.

Possible features:

- create and edit posts
- categorize resources
- upvote or like resources
- comment system
- dashboard of trending resources

---

## 10. Roommate Task Manager

A shared application for managing chores and responsibilities within a household.

Possible features:

- shared task lists
- assign tasks to users
- task completion tracking
- recurring tasks
- dashboard showing responsibilities

---

## Project Idea Tips

When choosing your project idea:

- Focus on **one clear user workflow**
- Make sure your idea supports **CRUD operations**
- Choose a project that benefits from **user authentication**
- Keep the scope **realistic for the time available**

The best projects are not the biggest projects. They are the ones that are **complete, functional, and well designed**.

Build something your team would feel confident demonstrating during a technical interview.

## Final Advice

The strongest projects usually share three qualities:

- a focused idea
- strong execution
- a polished presentation

Do not try to build everything. Build the **right things well**.

A smaller, complete project is far stronger than a large unfinished one.

Treat this as something you would proudly show in a job interview or portfolio.
